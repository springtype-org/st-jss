import { jss } from '../jss';

describe('makeStyles', () => {
  it('check style output', () => {
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
        animationIterationCount: 'infinite',
        animationDuration: '4s',
      },
    });
    expect(classes).toMatchSnapshot();
    const { children: childrenOfStyle, ...otherPropsOfStyle } = style;
    expect(childrenOfStyle[0]).toMatchSnapshot();
    expect(otherPropsOfStyle).toMatchSnapshot();
  });
});
