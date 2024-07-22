import { ContentInstance, EmbedContentInfo } from '../../types';
import './index.css';

export class EmbedContent implements ContentInstance {
  createElement(contentInfo: EmbedContentInfo) {
    const embededWrapper = document.createElement('div');
    const embed = document.createElement('blockquote');
    const anchor = document.createElement('a');

    embed.classList.add('twitter-tweet');
    embededWrapper.classList.add('embeded-wrapper');

    anchor.href = contentInfo.url;

    embed.appendChild(anchor);
    embededWrapper.appendChild(embed);

    return { type: contentInfo.type, element: embededWrapper };
  }
}
