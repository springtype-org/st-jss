export const joinClassNames = (classes: Array<string | number>) =>
  classes
    .map((c) => `${c}`.trim())
    .filter((c) => !!c)
    .join('-');
