import {JssProperties} from "./interface/ClassProperties";
import {repeat} from "./function/repeat";
import {API} from "./interface/API";
import {getCssAsText} from "./function/getCssAsText";


export const render = (style: JssProperties, counterClassName: string, jss: API, round = 0): Array<string> => {
    let result: Array<string> = [];
    const other: Array<string> = [];

    const styleKeys = Object.keys(style);

    const outerSpace = repeat(jss.space, round);
    const innerSpace = repeat(jss.space, round + 1);

    for (let sIndex = 0; sIndex < styleKeys.length; sIndex++) {
        const styleName = styleKeys[sIndex].trim();
        const styleValue = style[styleName];
        if (typeof styleValue !== 'object') {
            result.push(innerSpace + getCssAsText(styleName, styleValue));
        }
        if (typeof styleValue === 'object') {
            console.log(styleName, styleName.indexOf('@') === 1)
            if (styleName.indexOf('@') === 0) {
                // do extra stuff by font-face
                if (styleName.toLowerCase() === jss.fontFaceKey.toLowerCase()) {
                    other.push(...jss.renderFontFace(styleValue));
                }
                // do extra stuff by keyframes
                else if (styleName.toLowerCase().indexOf(jss.keyframesKey.toLowerCase()) === 0) {
                    other.push(...jss.renderKeyFrames(styleName.substr(jss.keyframesKey.length).trim(), styleValue));
                }
                // all other media queries
                else {
                    other.push(`${styleName} {`, ...render(styleValue, counterClassName, jss, round + 1), '}');
                }
            } else {
                // hover something like this
                other.push(...render(styleValue, counterClassName + styleName, jss, round));
            }
        }
    }
    if (result.length !== 0) {
        result = [`${outerSpace}.${counterClassName} {`, ...result, outerSpace + '}'];
    }
    result.push(...other);
    return result
}
