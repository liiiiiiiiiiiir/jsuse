export const useSub = (...args: number[]) => {
  if (!args.length) {
    return;
  }
  return args.reduce((pre, cur, idx) => {
    return idx === 0 ? pre + cur : pre - cur;
  }, 0);
};
