<h1 align="center">SpringType: st-jss</h1>

<p align="center">
  Nano library to work with CSS in TS
</p>

[![Gitter](https://badges.gitter.im/springtype-official/springtype.svg)](https://gitter.im/springtype-official/springtype?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge)

<h2 align="center">Purpose</h2>

This is an exremely tiny, yet powerful library for generation of CSS in TypeScript. `st-jss` does include all special types like _font-face_, _keyframes_, `@media` queries and `:pseudo-selectors`.

<h2 align="center">Features</h2>

- ✅ Implements a JSS-like API to work with CSS in TS
- ✅ Comes with namespace support
- ✅ Tiny: `671 bytes` (best, brotli) - `871 bytes` (worst, umd, gz)
- ✅ Zero dependencies
- ✅ First class TypeScript support
- ✅ 0% Unit Test coverage

<h2 align="center">How to</h2>

This is how using `st-jss` looks like:

```tsx
import {Props, tsx, render} from "springtype";
import { jss } from 'st-jss';

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
```

<h2 align="center">API</h2>

The following contract is made between the webapp and `st-jss`:

```typescript
export interface API {
  classNamePrefix: string;
  instanceCounter: number;
  space: string;
  makeFont: (style: FontFaceProperties) => IVirtualNode;
  makeAnimation: (animationName: string, style: KeyFrameProperties) => [string, IVirtualNode];
  makeStyles: <T extends string = string>(classProperty: ClassProperty<T>) => [Record<T, string>, IVirtualNode];
}
```

<h2 align="center">Backers</h2>

Thank you so much for supporting us financially! 🙏🏻😎🥳👍

<table>
  <tbody>
    <tr>
      <td align="center">
        <img width="150" height="150"
        src="https://avatars2.githubusercontent.com/u/17221813?v=4&s=150">
        </br>
        <a href="https://github.com/jsdevtom">Tom</a>
      </td>
    </tr>
  <tbody>
</table>

<h2 align="center">Maintainers</h2>

`st-jss` is brought to you by:

<table>
  <tbody>
    <tr>
      <td align="center">
        <img width="150" height="150"
        src="https://avatars2.githubusercontent.com/u/12079044?s=150&v=4">
        </br>
        <a href="https://github.com/mansi1">Michael Mannseicher</a>
      </td>
      <td align="center">
        <img width="150" height="150"
        src="https://avatars3.githubusercontent.com/u/454817?v=4&s=150">
        </br>
        <a href="https://github.com/kyr0">Aron Homberg</a>
      </td>
    </tr>
  <tbody>
</table>

<h2 align="center">Contributing</h2>

Please help out to make this project even better and see your name added to the list of our
[CONTRIBUTORS.md](./CONTRIBUTORS.md) :tada:
