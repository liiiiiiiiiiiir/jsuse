export const useDivide = (...args: number[]) => {
  if (!args.length) {
    return;
  }
  return args.reduce((pre, cur, idx) => {
    if (idx === 0) {
      return pre * cur;
    } else {
      if (cur === 0) {
        throw new Error("被除数不能为0");
      }
      return pre / cur;
    }
  }, 1);
};
