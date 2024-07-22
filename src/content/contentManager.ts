import {
  ImageContent,
  AdvContent,
  EmbedContent,
  ParagraphContent,
  TitleContent,
  VideoContent,
} from './components';
import { ContentInfo, ContentType, ViewInfo } from './types';

export class ContentManager {
  constructor(private viewsInfo: ViewInfo[] = []) {}

  appendContent(contentInfos: ContentInfo[]) {
    try {
      const newContent = this.createContent(contentInfos);

      this.viewsInfo = [...this.viewsInfo, ...newContent];
    } catch {
      throw new Error('Failed to append content');
    }
  }

  get views(): ViewInfo[] {
    return this.viewsInfo;
  }

  createContent(contentInfos: ContentInfo[]): ViewInfo[] {
    return contentInfos.map((contentInfo) => {
      switch (contentInfo.type) {
        case ContentType.IMAGE:
          return new ImageContent().createElement(contentInfo);
        case ContentType.TITLE:
          return new TitleContent().createElement(contentInfo);
        case ContentType.PARAGRAPH:
          return new ParagraphContent().createElement(contentInfo);
        case ContentType.ADV:
          return new AdvContent().createElement(contentInfo);
        case ContentType.VIDEO:
          return new VideoContent().createElement(contentInfo);
        case ContentType.EMBED:
          return new EmbedContent().createElement(contentInfo);
        default: {
          throw new Error('Unknown content type');
        }
      }
    });
  }
}

export default new ContentManager();
