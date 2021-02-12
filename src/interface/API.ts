import { IVirtualNode } from 'springtype-types';
import { ClassProperty, JssProperties } from './ClassProperties';
import { FontFaceProperties } from './FontFaceProperties';
import { KeyFrameProperties } from './KeyFrameProperties';

export interface API {
  classNamePrefix: string;
  instanceCounter: number;
  space: string;
  renderFontFace: (style: FontFaceProperties) => Array<string>;
  renderKeyFrames: (animationName: string, style: KeyFrameProperties) => Array<string>;
  render: (style: JssProperties, counterClassName: string, round?: number) => Array<string>;
  makeStyles: <T extends string = string>(classProperty: ClassProperty<T>) => [Record<T, string>, IVirtualNode];
}
