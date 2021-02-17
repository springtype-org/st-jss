import { IVirtualNode, KeyFrameProperties } from 'springtype-types';
import { API } from './interface/API';
import { getCssAsText } from './function/getCssAsText';
import { KEY_FRAMES_KEY } from './constant';
import { joinClassNames } from './function/joinClassNames';
import { createStyleNode } from './createStyleNode';

export const makeAnimation = (
  animationName: string,
  style: Partial<KeyFrameProperties>,
  jss: API,
): [string, IVirtualNode] => {
  const newAnimationName = joinClassNames([jss.classNamePrefix, animationName, ++jss.instanceCounter]);
  const animationLines = [`${KEY_FRAMES_KEY} ${newAnimationName}{`];
  const styleKeys = Object.keys(style);

  for (let sIndex = 0; sIndex < styleKeys.length; sIndex++) {
    const styleName = styleKeys[sIndex].trim();
    const styleValue = (style as any)[styleName];

    const keyFrame = Object.keys(styleValue);
    animationLines.push(`${styleName} {`);
    for (let index = 0; index < keyFrame.length; index++) {
      const name = keyFrame[index];
      animationLines.push(getCssAsText(name, styleValue[name]));
    }
    animationLines.push('}');
  }
  animationLines.push('}');
  return [newAnimationName, createStyleNode(animationLines)];
};
