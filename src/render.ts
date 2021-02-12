import { JssProperties } from './interface/ClassProperties';
import { API } from './interface/API';
import { getCssAsText } from './function/getCssAsText';
import { ANIMATION_NAME_KEY, FONT_FACE_KEY, KEY_FRAMES_KEY } from './constant';

export const render = (style: JssProperties, counterClassName: string, jss: API, round = 0): Array<string> => {
  let result: Array<string> = [];
  const other: Array<string> = [];

  const styleKeys = Object.keys(style);

  for (let sIndex = 0; sIndex < styleKeys.length; sIndex++) {
    const styleName = styleKeys[sIndex].trim();
    const styleValue = (style as any)[styleName];

    if (typeof styleValue !== 'object') {
      result.push(getCssAsText(styleName, styleValue));
    }

    if (typeof styleValue === 'object') {
      if (styleName.indexOf('@') === 0) {
        if (styleName.toLowerCase() === FONT_FACE_KEY.toLowerCase()) {
          other.push(...jss.renderFontFace(styleValue));
        } else if (styleName.toLowerCase() === KEY_FRAMES_KEY.toLowerCase()) {
          const animationName = styleValue[ANIMATION_NAME_KEY];
          styleValue[ANIMATION_NAME_KEY] = undefined;
          other.push(...jss.renderKeyFrames(animationName, styleValue));
        } else {
          other.push(`${styleName} {`, ...render(styleValue, counterClassName, jss, round + 1), '}');
        }
      } else {
        other.push(...render(styleValue, counterClassName + styleName, jss, round));
      }
    }
  }

  if (result.length !== 0) {
    result = [`.${counterClassName} {`, ...result, '}'];
  }

  result.push(...other);

  return result;
};
