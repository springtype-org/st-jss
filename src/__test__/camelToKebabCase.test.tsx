import { camelToKebabCase } from '../function/camelToKebabCase';

describe('camelToKebabCase', () => {
  it('is equal', () => {
    expect(camelToKebabCase('backgroundColor')).toEqual('background-color');
    expect(camelToKebabCase('background-color')).toEqual('background-color');
  });
});
