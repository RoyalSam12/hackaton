export enum ContentType {
  'IMAGE' = 'image',
  'TITLE' = 'title',
  'PARAGRAPH' = 'paragraph',
  'ADV' = 'adv',
  'VIDEO' = 'video',
  'EMBED' = 'embed',
}

export type ViewInfo = {
  type: ContentType
  element: HTMLElement
};

export interface ContentInstance {
  createElement(contentInfo: ContentInfo): ViewInfo;
}

export type ContentInfo =
    ImageContentInfo |
    TitleContentInfo |
    ParagraphContentInfo |
    AdvContentInfo |
    VideoContentInfo |
    EmbedContentInfo;

export type ImageContentInfo = {
  type: ContentType.IMAGE
  src: string
};

export type TitleContentInfo = {
  type: ContentType.TITLE
  content: string
};

export type ParagraphContentInfo = {
  type: ContentType.PARAGRAPH
  content: string
};

export type AdvContentInfo = {
  type: ContentType.ADV
  id: string
};

export type VideoContentInfo = {
  type: ContentType.VIDEO
  id: string
};

export type EmbedContentInfo = {
  type: ContentType.EMBED
  url: string
};
