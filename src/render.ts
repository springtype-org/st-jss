import { JssProperties } from './interface/ClassProperties';
import { API } from './interface/API';
import { getCssAsText } from './function/getCssAsText';
import { CSS_OPERATORS } from './constant';

export const render = (style: JssProperties, counterClassName: string, jss: API): Array<string> => {
  let result: Array<string> = [];
  const other: Array<string> = [];

  const styleKeys = Object.keys(style);

  for (let sIndex = 0; sIndex < styleKeys.length; sIndex++) {
    const styleName = styleKeys[sIndex];
    const styleValue = (style as any)[styleName];

    if (typeof styleValue !== 'object') {
      result.push(jss.space + getCssAsText(styleName.trim(), styleValue, jss.defaultUnit));
    }

    if (typeof styleValue === 'object') {
      if (styleName.trim().indexOf('@') === 0) {
        // media query start here
        other.push(
          `${styleName.trim()} {`,
          // add space to media query
          ...render(styleValue, counterClassName, jss).map((v) => jss.space + v),
          '}',
        );
      } else {
        const [firstCharacter, ...normalizedName] = styleName.split('');
        const operator = CSS_OPERATORS.find((op) => op === firstCharacter) || ` ${firstCharacter}`;
        other.push(...render(styleValue, counterClassName + operator + normalizedName.join(''), jss));
      }
    }
  }

  if (result.length !== 0) {
    result = [`.${counterClassName} {`, ...result, '}'];
  }

  result.push(...other);

  return result;
};
