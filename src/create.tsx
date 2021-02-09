import {IVirtualNode, tsx} from "springtype";
import {ClassProperty} from "./interface/ClassProperties";
import {API} from "./interface/API";
import {Style} from "./Style";

const LINEBREAK = '\n';

export const create = <T extends string = string>(classProperties: ClassProperty<T>, jss: API): [Record<T, string>, IVirtualNode] => {
    const counter = jss.instanceCounter++;

    const namePrefix = jss.classNamePrefix

    const css: Array<string> = [];
    const classes: any = {}

    const classNameKey = Object.keys(classProperties);
    for (let index = 0; index < classNameKey.length; index++) {
        const className = classNameKey[index];
        const counterClassName = `${namePrefix}-${className}-${counter}`

        classes[className] = counterClassName;
        const result = jss.render(classProperties[className], counterClassName);
        // collect all css parts
        css.push(result.join(LINEBREAK));
    }

    return [classes, <Style>{css.join(LINEBREAK)}</Style>]
}