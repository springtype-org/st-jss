import { JssProperties } from './interface/ClassProperties';
import { API } from './interface/API';
import { getCssAsText } from './function/getCssAsText';

export const render = (style: JssProperties, counterClassName: string, jss: API): Array<string> => {
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
        other.push(`${styleName} {`, ...render(styleValue, counterClassName, jss), '}');
      } else {
        other.push(...render(styleValue, counterClassName + styleName, jss));
      }
    }
  }

  if (result.length !== 0) {
    result = [`.${counterClassName} {`, ...result, '}'];
  }

  result.push(...other);

  return result;
};
