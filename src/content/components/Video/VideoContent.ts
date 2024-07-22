import { ContentInstance, VideoContentInfo } from '../../types';
import './index.css';

export class VideoContent implements ContentInstance {
  createElement(contentInfo: VideoContentInfo) {
    const videoContainer = document.createElement('div');
    videoContainer.id = contentInfo.id;
    videoContainer.classList.add('video-wrapper');

    const vidazoo = document.createElement('script');
    vidazoo.async = true;
    vidazoo.src = 'https://static.vidazoo.com/basev/vwpt.js';
    vidazoo.setAttribute('data-widget-id', '5f7c82bd819a8b00049dd9d6');

    videoContainer.appendChild(vidazoo);

    return { type: contentInfo.type, element: videoContainer };
  }
}
