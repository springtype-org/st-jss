export const getCssAsText = (key: string, value: any) => {
  const helperEl: any = document.createElement('div');
  helperEl.style[key] = value;
  return helperEl.style.cssText;
};
