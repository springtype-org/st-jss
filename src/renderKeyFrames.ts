import {API} from "./interface/API";
import {KeyFrameProperties} from "./interface/KeyFrameProperties";
import {getCssAsText} from "./function/getCssAsText";

export const renderKeyFrames =(animationName: string, style: Partial<KeyFrameProperties>, jss: API): Array<string> => {
    const result = [`${jss.keyframesKey} ${animationName}{`];
    const styleKeys = Object.keys(style);

    for (let sIndex = 0; sIndex < styleKeys.length; sIndex++) {
        const styleName = styleKeys[sIndex].trim();
        const styleValue = style[styleName];

        const keyFrame = Object.keys(styleValue);
        result.push(`${jss.space}${styleName} {`);
        for(let index = 0; index <keyFrame.length; index++ ){
            const name = keyFrame[index];
            result.push(jss.space+jss.space + getCssAsText(name,styleValue[name]));
        }
        result.push(`${jss.space}}`);

    }
    result.push('}')
    return result;
}
