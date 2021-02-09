import {CssProperties} from "./CssProperties";

export interface KeyFrameProperties {
    from: Partial<CssProperties>;
    to: Partial<CssProperties>;
    [key: string]: Partial<CssProperties>;
}
