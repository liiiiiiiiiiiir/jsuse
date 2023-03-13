import type { VoidFn } from "./types";

export type StartTimeoutOpt = {
  delay?: number,
  times?: number
}

export function useTimeout() {
  let timer: number | null = null;
  let lastTime = +new Date();
  let count = 0;

  function startTimeout(callback: VoidFn, options: StartTimeoutOpt = {}) {
    !timer && (timer = requestAnimationFrame(() => {
      const { delay, times } = options;
      const nowTime = +new Date();
      if (delay) {
        if (nowTime - lastTime >= delay) {
          lastTime = nowTime;
          callback();
        }
      } else {
        lastTime = nowTime;
        callback();
      }
      if (times && ++count > times) {
        return stopTimeout();
      }

      stopTimeout();
      startTimeout(callback, options);
    }));
  }

  function stopTimeout() {
    if (timer) {
      cancelAnimationFrame(timer);
      timer = null;
    }
  }

  return { startTimeout, stopTimeout };
}
