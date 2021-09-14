import { getCssAsText } from '../function/getCssAsText';

describe('getCssAsText', () => {
  it('is equal', () => {
    expect(getCssAsText('content', '""', 'px')).toEqual('content: "";');
    expect(getCssAsText('borderColor', '#fff', 'px')).toEqual('border-color: #fff;');
    expect(getCssAsText('height', '100%', 'px')).toEqual('height: 100%;');
    expect(getCssAsText('height', 1, 'px')).toEqual('height: 1px;');
    expect(getCssAsText('fontSize', 22, 'px')).toEqual('font-size: 22px;');
    expect(getCssAsText('marginTop', 20, 'px')).toEqual('margin-top: 20px;');
    expect(getCssAsText('margin-top', 20, 'px')).toEqual('margin-top: 20px;');
  });
});
