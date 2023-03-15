export const useMultiply = (...args: number[]) => {
  if (!args.length) {
    return;
  }
  return args.reduce((pre, cur) => {
    return pre * cur;
  }, 1);
};
