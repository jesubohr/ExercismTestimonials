export function debounce(fn: (...params: any[]) => any, timeout = 500) {
  let timeoutId: ReturnType<typeof setTimeout>;
  return function (this: any, ...args: any[]) {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => fn.apply(this, args), timeout);
  }
}
