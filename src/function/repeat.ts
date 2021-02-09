export const repeat =(str: string, count: number) =>{
  let result: Array<string> = []
    for (let i = 0; i < count; i++) {
        result.push(str);
    }
    return result.join('');
}
