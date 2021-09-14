import { FontFaceProperties, KeyFrameProperties } from 'springtype-types';
import { API } from './interface/API';
import { ClassProperty } from './interface/ClassProperties';
import { makeStyles } from './makeStyles';
import { makeFont } from './makeFont';
import { makeAnimation } from './makeAnimation';

export const jss: API = {
  defaultUnit: 'px',
  classNamePrefix: 'st',
  instanceCounter: 0,
  makeAnimation: (animationName: string, style: Partial<KeyFrameProperties>) =>
    makeAnimation(animationName, style, jss),
  makeFont: (style: FontFaceProperties) => makeFont(style),
  makeStyles: <T extends string = string>(classProperty: ClassProperty<T>) => makeStyles<T>(classProperty, jss),
};
