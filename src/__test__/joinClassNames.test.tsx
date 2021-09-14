import { joinClassNames } from '../function/joinClassNames';

describe('joinClassNames', () => {
  it('is equal', () => {
    expect(joinClassNames(['st', 'header', 3])).toEqual('st-header-3');
    expect(joinClassNames(['st', 'container', 0])).toEqual('st-container-0');
  });
});
