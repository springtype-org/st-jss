import { IVirtualNode } from 'springtype-types';
import { ClassProperty } from './interface/ClassProperties';
import { API } from './interface/API';
import { LINEBREAK } from './constant';
import { joinClassNames } from './function/joinClassNames';
import { render } from './render';

export const createStyleNode = (styleLines: Array<string>): IVirtualNode => ({
  type: 'style',
  attributes: {
    type: 'text/css',
  },
  children: [styleLines.join(LINEBREAK)],
});

export const create = <T extends string = string>(
  classProperties: ClassProperty<T>,
  jss: API,
): [Record<T, string>, IVirtualNode] => {
  const styleLines: Array<string> = [];
  const classes: any = {};

  const classNameKey = Object.keys(classProperties);
  for (let index = 0; index < classNameKey.length; index++) {
    const className = classNameKey[index];
    const counterClassName = joinClassNames([jss.classNamePrefix, className, ++jss.instanceCounter]);

    classes[className] = counterClassName;
    const result = render((classProperties as any)[className], counterClassName, jss);
    // collect all css parts
    styleLines.push(result.join(LINEBREAK));
  }

  return [classes, createStyleNode(styleLines)];
};
