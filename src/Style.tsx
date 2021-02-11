import { Props, tsx } from 'springtype';

export interface StyleProps extends Props {}

export const Style = ({ children }: StyleProps) => <style type="text/css">{children}</style>;
