import { FontFaceProperties, KeyFrameProperties } from 'springtype-types';
import { API } from './interface/API';
import { ClassProperty } from './interface/ClassProperties';
import { create } from './create';
import { renderFontFace } from './renderFontFace';
import { renderKeyFrames } from './renderKeyFrames';

export const jss: API = {
  classNamePrefix: 'st',
  instanceCounter: 0,
  space: '  ',
  makeAnimation: (animationName: string, style: Partial<KeyFrameProperties>) =>
    renderKeyFrames(animationName, style, jss),
  makeFont: (style: FontFaceProperties) => renderFontFace(style, jss),
  makeStyles: <T extends string = string>(classProperty: ClassProperty<T>) => create<T>(classProperty, jss),
};
