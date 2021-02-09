import {API} from "./interface/API";
import {ClassProperty, JssProperties} from "./interface/ClassProperties";
import {render} from "./render";
import {create} from "./create";
import {renderFontFace} from "./renderFontFace";
import {FontFaceProperties} from "./interface/FontFaceProperties";
import {KeyFrameProperties} from "./interface/KeyFrameProperties";
import {renderKeyFrames} from "./renderKeyFrames";

export const jss: API = {
    keyframesKey: "@keyframes",
    fontFaceKey: "@font-face",
    classNamePrefix: 'st',
    instanceCounter: 0,
    space: '  ',
    render: (style: JssProperties, className: string) => render(style, className, jss),
    renderKeyFrames: (animationName: string, style: Partial<KeyFrameProperties>) => renderKeyFrames(animationName, style, jss),
    renderFontFace: (style: Partial<FontFaceProperties>) => renderFontFace(style, jss),
    create: <T extends string = string>(classProperty: ClassProperty<T>) => create<T>(classProperty, jss)
}

