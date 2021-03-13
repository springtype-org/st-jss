import { camelToKebabCase } from './camelToKebabCase';

export const getCssAsText = (key: string, value: any) => {
  const helperEl: any = document.createElement('div');
  helperEl.style[key] = value;
  const documentStyle = helperEl.style.cssText;
  // dont work with :before content: ""
  if (documentStyle !== '') {
    return documentStyle;
  }
  return `${camelToKebabCase(key)}: ${value};`;
};
