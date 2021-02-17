import { FontFaceProperties, IVirtualNode } from 'springtype-types';
import { camelToKebabCase } from './function/camelToKebabCase';
import { API } from './interface/API';
import { FONT_FACE_KEY } from './constant';
import { createStyleNode } from './create';

export const renderFontFace = (style: FontFaceProperties, jss: API): IVirtualNode => {
  const styleLines = [`${FONT_FACE_KEY} {`];
  const styleKeys = Object.keys(style);

  for (let sIndex = 0; sIndex < styleKeys.length; sIndex++) {
    const styleName = styleKeys[sIndex].trim();
    const styleValue = (style as any)[styleName];
    styleLines.push(`${jss.space}${camelToKebabCase(styleName)}: ${styleValue}`);
  }
  styleLines.push('}');

  return createStyleNode(styleLines);
};
