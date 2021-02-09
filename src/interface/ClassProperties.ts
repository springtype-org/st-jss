import {CssProperties} from "./CssProperties";
import {FontFaceProperties} from "./FontFaceProperties";
export type Style= { [media: string]: Partial<CssProperties> | Style }

export type JssProperties =  Partial<CssProperties> | Style | {'@font-face'?: Partial<FontFaceProperties>};

export type ClassProperty<K extends keyof any> = {
    [P in K]: JssProperties;
};
