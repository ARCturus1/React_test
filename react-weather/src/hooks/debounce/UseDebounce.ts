export function useDebounce(callback: (value: string) => void, delay: number) {
  let timeoutId: number | null = null;
  return (value: string) => {
    if (timeoutId) {
      clearTimeout(timeoutId);
    }
    timeoutId = setTimeout(() => {
      callback(value);
    }, delay);
  };
};
