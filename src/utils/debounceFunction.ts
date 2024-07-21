/**
 * mechanism to implement debounce
 * @param fn
 * @param delay
 * @returns
 */
export default function debounceFunction<T extends unknown[]>(
  fn: (...args: T) => void,
  delay: number
) {
  let timeoutId: NodeJS.Timeout;

  return function (this: unknown, ...args: T) {
    clearTimeout(timeoutId);

    timeoutId = setTimeout(() => {
      fn.apply(this, args);
    }, delay);
  };
}
