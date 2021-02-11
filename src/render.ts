import { JssProperties } from './interface/ClassProperties';
import { repeat } from './function/repeat';
import { API } from './interface/API';
import { getCssAsText } from './function/getCssAsText';
import { ANIMATION_NAME_KEY, FONT_FACE_KEY, KEY_FRAMES_KEY } from './constant';

export const render = (style: JssProperties, counterClassName: string, jss: API, round = 0): Array<string> => {
  let result: Array<string> = [];
  const other: Array<string> = [];

  const styleKeys = Object.keys(style);

  const outerSpace = repeat(jss.space, round);
  const innerSpace = repeat(jss.space, round + 1);

  for (let sIndex = 0; sIndex < styleKeys.length; sIndex++) {
    const styleName = styleKeys[sIndex].trim();
    const styleValue = (style as any)[styleName];
    if (typeof styleValue !== 'object') {
      result.push(innerSpace + getCssAsText(styleName, styleValue));
    }
    if (typeof styleValue === 'object') {
      if (styleName.indexOf('@') === 0) {
        // do extra stuff by font-face
        if (styleName.toLowerCase() === FONT_FACE_KEY.toLowerCase()) {
          other.push(...jss.renderFontFace(styleValue));
          // do extra stuff by keyframes
        } else if (styleName.toLowerCase() === KEY_FRAMES_KEY.toLowerCase()) {
          const animationName = styleValue[ANIMATION_NAME_KEY];
          delete styleValue[ANIMATION_NAME_KEY];
          other.push(...jss.renderKeyFrames(animationName, styleValue));
          // all other media queries
        } else {
          other.push(`${styleName} {`, ...render(styleValue, counterClassName, jss, round + 1), '}');
        }
      } else {
        // hover something like this
        other.push(...render(styleValue, counterClassName + styleName, jss, round));
      }
    }
  }
  if (result.length !== 0) {
    result = [`${outerSpace}.${counterClassName} {`, ...result, `${outerSpace}}`];
  }
  result.push(...other);
  return result;
};
