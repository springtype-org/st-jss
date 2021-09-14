import { jss } from '../jss';

describe('makeAnimation', () => {
  it('check style output', () => {
    const [animationName, animationStyle] = jss.makeAnimation('animation', {
      '0%': { top: 0, left: 0, background: 'red' },
      '25%': { top: 0, left: 100, background: 'blue' },
      '50%': { top: 100, left: 100, background: 'yellow' },
      '75%': { top: 100, left: 0, background: 'green' },
      '100%': { top: 0, left: 0, background: 'red' },
    });
    expect(animationName).toMatchSnapshot();
    const { children: childrenOfAnimation, ...otherPropsOfAnimation } = animationStyle;
    expect(childrenOfAnimation[0]).toMatchSnapshot();
    expect(otherPropsOfAnimation).toMatchSnapshot();
  });
});
