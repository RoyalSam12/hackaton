declare global {
  interface Window {
    pbjs: any;
    googletag: any;
  }
}

type ElementId = string;

export class PbjsFacade {
  refreshedAds: ElementId[] = [];

  constructor(private pbjs = window.pbjs || {}, private googletag = window.googletag || {}) {}

  requestBids = async (elementId: string): Promise<void> => {
    await this.pbjs.requestBids({
      timeout: 1000,
      adUnitCodes: [elementId],
    });

    this.pbjs.setTargetingForGPTAsync([elementId]);

    const target = this.googletag
      .pubads()
      .getSlots()
      .find((slot: any) => slot.getSlotElementId() === elementId);

    if (target) {
      this.googletag.pubads().refresh([target]);
      this.refreshedAds.push(elementId);
    }
  };

  addElemenentsToQueue = (elementsIds: string[]): void => {
    elementsIds.forEach((elementId) => {
      const isElementAlreadyRefreshed = this.refreshedAds.includes(elementId);

      if (!isElementAlreadyRefreshed) {
        this.pbjs.que.push(() => this.requestBids(elementId));
      }
    });
  };
}
