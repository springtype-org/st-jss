import { CssProperties } from './CssProperties';
import { FontFaceProperties } from './FontFaceProperties';
import { KeyFrameProperties } from './KeyFrameProperties';

export type MediaStyle = {
  '@font-face': FontFaceProperties;
  '@keyframes': KeyFrameProperties;
  [media: string]: Partial<CssProperties> | MediaStyle;
};

export type JssProperties = Partial<CssProperties> | MediaStyle;

export type ClassProperty<K extends keyof any> = {
  [P in K]: JssProperties;
};
