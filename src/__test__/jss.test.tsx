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

describe('joinClassNames', () => {
  it('check style output', () => {
    const [animationName, animationStyle] = jss.makeAnimation('animation', {
      '0%': { top: 0, left: 0, background: 'red' },
      '25%': { top: 0, left: 100, background: 'blue' },
      '50%': { top: 100, left: 100, background: 'yellow' },
      '75%': { top: 100, left: 0, background: 'green' },
      '100%': { top: 0, left: 0, background: 'red' },
    });
    const [classes, style] = jss.makeStyles({
      container: {
        // Normal jss
        fontFamily: 'Nonito',
        '@media (min-device-width: 800px)': {
          paddingTop: 50,
          flex: 1,
          ':hover': {
            backgroundColor: 'red',
          },
          ' span': {
            color: 'black',
            height: 4,
            fontSize: 20,
          },
          '.libraryClass': {
            color: 'black',
            height: 4,
            fontSize: 20,
          },
        },
      },
      animation: {
        paddingTop: 50,
        animationName,
        animationIterationCount: 'infinite',
        animationDuration: '4s',
      },
    });
    expect(classes).toMatchSnapshot();
    const { children: childrenOfStyle, ...otherPropsOfStyle } = style;
    const { children: childrenOfAnimation, ...otherPropsOfAnimation } = animationStyle;
    expect(childrenOfStyle[0]).toMatchSnapshot();
    expect(otherPropsOfStyle).toMatchSnapshot();
    expect(childrenOfAnimation[0]).toMatchSnapshot();
    expect(otherPropsOfAnimation).toMatchSnapshot();
  });
});
