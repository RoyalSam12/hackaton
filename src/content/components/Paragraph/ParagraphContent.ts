import { ContentInstance, ParagraphContentInfo } from '../../types';
import './index.css';

export class ParagraphContent implements ContentInstance {
  createElement(contentInfo: ParagraphContentInfo) {
    const paragraphWrapper = document.createElement('div');
    const paragraph = document.createElement('p');

    paragraphWrapper.classList.add('paragraph-wrapper');
    paragraph.classList.add('paragraph');

    paragraph.textContent = contentInfo.content;
    paragraphWrapper.appendChild(paragraph);

    return { type: contentInfo.type, element: paragraphWrapper };
  }
}
