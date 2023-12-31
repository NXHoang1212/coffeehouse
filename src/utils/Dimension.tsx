import { useWindowDimensions, Dimensions } from 'react-native';

export const useDimension = () => {
  const { width, height } = useWindowDimensions();
  return { width, height };
};
