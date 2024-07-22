import { ContentInstance, ImageContentInfo } from '../../types';
import './index.css';

export class ImageContent implements ContentInstance {
  createElement(contentInfo: ImageContentInfo) {
    const contentImageWrapper = document.createElement('div');
    const image = document.createElement('img');

    image.src = contentInfo.src;

    image.classList.add('content-image');
    contentImageWrapper.classList.add('content-image-wrapper');

    contentImageWrapper.appendChild(image);

    return { type: contentInfo.type, element: contentImageWrapper };
  }
}
