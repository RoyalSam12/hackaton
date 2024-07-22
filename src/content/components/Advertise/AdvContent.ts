import { AdvContentInfo, ContentInstance } from '../../types';
import './index.css';

export class AdvContent implements ContentInstance {
  createElement(contentInfo: AdvContentInfo) {
    const adv = document.createElement('div');

    adv.setAttribute('data-slot-type', '1');
    adv.classList.add('advertise');

    adv.id = contentInfo.id;

    return { type: contentInfo.type, element: adv };
  }
}
