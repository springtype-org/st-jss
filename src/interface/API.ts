import {ClassProperty, JssProperties} from "./ClassProperties";
import {IVirtualNode} from "springtype";
import {FontFaceProperties} from "./FontFaceProperties";
import {KeyFrameProperties} from "./KeyFrameProperties";

export interface API {
    classNamePrefix: string;
    instanceCounter: number;
    space: string;
    fontFaceKey: string;
    keyframesKey: string;
    renderFontFace: (style: Partial<FontFaceProperties>) => Array<string>;
    renderKeyFrames: (animationName: string, style: Partial<KeyFrameProperties>) => Array<string>;
    render: (style: JssProperties, counterClassName: string, round?: number) => Array<string>;
    create: <T extends string = string>(classProperty: ClassProperty<T>) => [ Record<T, string>, IVirtualNode];
}
