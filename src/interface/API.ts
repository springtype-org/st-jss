import { FontFaceProperties, IVirtualNode, KeyFrameProperties } from 'springtype-types';
import { ClassProperty } from './ClassProperties';

export interface API {
  classNamePrefix: string;
  instanceCounter: number;
  makeFont: (style: FontFaceProperties) => IVirtualNode;
  makeAnimation: (animationName: string, style: KeyFrameProperties) => [string, IVirtualNode];
  makeStyles: <T extends string = string>(classProperty: ClassProperty<T>) => [Record<T, string>, IVirtualNode];
}
