import { jss } from '../jss';
import { camelToKebabCase } from '../function/camelToKebabCase';
import { getCssAsText } from '../function/getCssAsText';
import { joinClassNames } from '../function/joinClassNames';

describe('jss', () => {
  it('is defined', () => {
    expect(jss).toBeDefined();
  });
});
describe('camelToKebabCase', () => {
  it('is equal', () => {
    expect(camelToKebabCase('backgroundColor')).toEqual('background-color');
    expect(camelToKebabCase('background-color')).toEqual('background-color');
  });
});
describe('getCssAsText', () => {
  it('is equal', () => {
    expect(getCssAsText('content', '""')).toEqual('content: "";');
    expect(getCssAsText('borderColor', '#fff')).toEqual('border-color: #fff;');
  });
});
describe('joinClassNames', () => {
  it('is equal', () => {
    expect(joinClassNames(['st', 'header', 3])).toEqual('st-header-3');
    expect(joinClassNames(['st', 'container', 0])).toEqual('st-container-0');
  });
});
