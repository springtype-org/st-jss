import { JssProperties } from './interface/ClassProperties';
import { API } from './interface/API';
import { getCssAsText } from './function/getCssAsText';

export const render = (style: JssProperties, counterClassName: string, jss: API, space: string = ''): Array<string> => {
  let result: Array<string> = [];
  const other: Array<string> = [];

  const styleKeys = Object.keys(style);

  for (let sIndex = 0; sIndex < styleKeys.length; sIndex++) {
    const styleName = styleKeys[sIndex].trim();
    const styleValue = (style as any)[styleName];

    if (typeof styleValue !== 'object') {
      result.push(space + jss.space + getCssAsText(styleName, styleValue));
    }

    if (typeof styleValue === 'object') {
      if (styleName.indexOf('@') === 0) {
        other.push(`${styleName} {`, ...render(styleValue, counterClassName, jss, space + jss.space), '}');
      } else {
        other.push(...render(styleValue, counterClassName + styleName, jss, space));
      }
    }
  }

  if (result.length !== 0) {
    result = [`${space}.${counterClassName} {`, ...result, `${space}}`];
  }

  result.push(...other);

  return result;
};
