import { IVirtualNode } from 'springtype-types';
import { LINEBREAK } from './constant';

export const createStyleNode = (styleLines: Array<string>): IVirtualNode => ({
  type: 'style',
  attributes: {
    type: 'text/css',
  },
  children: [styleLines.join(LINEBREAK)],
});
