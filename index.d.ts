import * as React from "react";

export default class Gallery extends React.Component<Props> {}

export type ImageOptions = {
  src:               string;
  thumbnail:         string;
  thumbnailWidth:    number;
  thumbnailHeight:   number;
  thumbnailCaption?: number;
  tags?:             string[];
  isSelected?:       boolean;
  caption?:          string;
  srcSet?:           string[];
  customOverlay?:    any;
  orientation?:      number;
};

export type Props = {
  images:                ImageOptions[];
  id?:                   string;
  enableImageSelection?: boolean;
  onSelectImage?:        () => void;
  rowHeight?:            number;
  maxRows?:              number;
  margin?:               number;
  enableLightbox?:       boolean;
  onClickThumbnail?:     () => void;
  lightboxWillOpen?:     () => void;
  lightboxWillClose?:    () => void;
  tagStyle?:             object;
  tileViewportStyle?:    () => void;
  thumbnailStyle?:       () => void;
}
