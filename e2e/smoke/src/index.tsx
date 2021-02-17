import { tsx, render, Props } from 'springtype';
import { jss } from '../../../dist';

export const MyStyledCmp = ({ children }: Props) => {
  const [animationName, animationStyle] = jss.makeAnimation('myAnimation', {
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
      },
    },
    animation: {
      paddingTop: 50,
      animationName,
      animationIterationCount: 'infinite',
      animationDuration: '4s',
    },
  });

  const onChangeStyleClick = () => {
    console.log('ref?', style);
  };

  return (
    <fragment>
      {style}
      {animationStyle}
      <div className={classes.container}>{children}</div>
      <div className={classes.animation} />
      <button type="button" onClick={onChangeStyleClick}>
        Change style
      </button>
    </fragment>
  );
};

render(<MyStyledCmp />);
