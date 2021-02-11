import { FontFaceProperties } from './interface/FontFaceProperties';
import { camelToKebabCase } from './function/camelToKebabCase';
import { API } from './interface/API';
import { FONT_FACE_KEY } from './constant';

export const renderFontFace = (style: FontFaceProperties, jss: API): Array<string> => {
  const result = [`${FONT_FACE_KEY} {`];
  const styleKeys = Object.keys(style);

  for (let sIndex = 0; sIndex < styleKeys.length; sIndex++) {
    const styleName = styleKeys[sIndex].trim();
    const styleValue = (style as any)[styleName];
    result.push(`${jss.space}${camelToKebabCase(styleName)}: ${styleValue}`);
  }
  result.push('}');
  return result;
};
