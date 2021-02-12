import { tsx, render, Props } from 'springtype';
import { $ } from 'st-query';
import { jss } from '../../../dist';

export const MyStyledCmp = ({ children }: Props) => {
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
      },
      // add a font always global
      '@font-face': {
        fontFamily: 'Open Sans',
        fontStyle: 'normal',
        fontWeight: 400,
        src: 'url("/fonts/OpenSans-Regular-webfont.woff2") format("woff2")',
      },
      // add an animation ensure unique animation name
      '@keyframes': {
        animationName: 'animationName',
        '0%': { top: 0, left: 0, background: 'red' },
        '25%': { top: 0, left: 100, background: 'blue' },
        '50%': { top: 100, left: 100, background: 'yellow' },
        '75%': { top: 100, left: 0, background: 'green' },
        '100%': { top: 0, left: 0, background: 'red' },
      },
    },
  });

  const onChangeStyleClick = () => {
    console.log('ref?', style);
  };

  return (
    <fragment>
      {style}
      <div className={classes.container}>{children}</div>

      <button type="button" onClick={onChangeStyleClick}>
        Change style
      </button>
    </fragment>
  );
};
render(<MyStyledCmp />);
