import { FontFaceProperties, IVirtualNode } from 'springtype-types';
import { camelToKebabCase } from './function/camelToKebabCase';
import { FONT_FACE_KEY } from './constant';
import { createStyleNode } from './createStyleNode';

export const makeFont = (style: FontFaceProperties): IVirtualNode => {
  const styleLines = [`${FONT_FACE_KEY} {`];
  const styleKeys = Object.keys(style);

  for (let sIndex = 0; sIndex < styleKeys.length; sIndex++) {
    const styleName = styleKeys[sIndex].trim();
    const styleValue = (style as any)[styleName];
    styleLines.push(`${camelToKebabCase(styleName)}: ${styleValue}`);
  }
  styleLines.push('}');

  return createStyleNode(styleLines);
};
