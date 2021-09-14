import { jss } from '../jss';

describe('makeFont', () => {
  it('check style output', () => {
    const style = jss.makeFont({
      // Normal jss
      fontFamily: 'Nonito',
      src: 'url(https://fonts.com/myfont)',
    });
    expect(style).toMatchSnapshot();
    const { children: childrenOfStyle, ...otherPropsOfStyle } = style;
    expect(childrenOfStyle[0]).toMatchSnapshot();
    expect(otherPropsOfStyle).toMatchSnapshot();
  });
});
