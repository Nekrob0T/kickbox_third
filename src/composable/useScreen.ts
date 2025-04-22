import { useMediaQuery } from '@vueuse/core';

export function useScreen() {
  const isLargeScreen = useMediaQuery('(min-width: 768px)');

  return {
    isLargeScreen,
  };
}
