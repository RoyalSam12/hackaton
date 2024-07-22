import { ContentInstance, TitleContentInfo } from '../../types';
import './index.css';

export class TitleContent implements ContentInstance {
  createElement(contentInfo: TitleContentInfo) {
    const titleWrapper = document.createElement('div');
    const title = document.createElement('h1');

    titleWrapper.classList.add('title-wrapper');
    title.classList.add('title');

    title.textContent = contentInfo.content;
    titleWrapper.appendChild(title);

    return { type: contentInfo.type, element: titleWrapper };
  }
}
