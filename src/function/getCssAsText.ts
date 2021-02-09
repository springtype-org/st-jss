export const getCssAsText = (key: string, value: any) => {
    const helperEl = document.createElement('div')
    helperEl.style[key] = value;
    return helperEl.style.cssText;
}
