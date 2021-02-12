import { Props } from 'springtype-types';

export interface StyleProps extends Props {}

export const Style = ({ children }: StyleProps) => ({
  type: 'stype',
  attributes: {
    type: 'text/css',
    ref: {},
  },
  children,
});
