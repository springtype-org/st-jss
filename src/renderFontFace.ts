import {FontFaceProperties} from "./interface/FontFaceProperties";
import {camelToKebabCase} from "./function/camelToKebabCase";
import {API} from "./interface/API";

export const renderFontFace =(style: Partial<FontFaceProperties>, jss: API): Array<string> => {
    const result = [`${jss.fontFaceKey} {`];
    const styleKeys = Object.keys(style);

    for (let sIndex = 0; sIndex < styleKeys.length; sIndex++) {
        const styleName = styleKeys[sIndex].trim();
        const styleValue = style[styleName];
        result.push(jss.space + `${camelToKebabCase(styleName)}: ${styleValue}`);
    }
    result.push('}')
    return result;
}
