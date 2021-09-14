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
    expect(getCssAsText('content', '""', 'px')).toEqual('content: "";');
    expect(getCssAsText('borderColor', '#fff', 'px')).toEqual('border-color: #fff;');
    expect(getCssAsText('height', '100%', 'px')).toEqual('height: 100%;');
    expect(getCssAsText('height', 1, 'px')).toEqual('height: 1px;');
    expect(getCssAsText('margin-top', 20, 'px')).toEqual('margin-top: 20px;');
  });
});
describe('joinClassNames', () => {
  it('is equal', () => {
    expect(joinClassNames(['st', 'header', 3])).toEqual('st-header-3');
    expect(joinClassNames(['st', 'container', 0])).toEqual('st-container-0');
  });
});
