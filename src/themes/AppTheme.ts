import {size} from './Metrics';

export const Colors: {[key: string]: string} = {
  white: '#FFFFFF',
  black: '#000000',
  darkBase1: '#090909',
  darkBase3: '#EBEBEB',
  darkBase4: '#D9D9D9',
  darkBase5: '#999999',
  goldTheme1: '#ECD996',
  goldTheme2: '#FFF5D1',
  success: '#34C759',
  errorText: 'red',
  appFF5942: '#FF5942',
  app2196F3: '#2196F3',
};

export const FONTS: {[key: string]: string} = {
  Inter100: 'Inter-Thin',
  Inter200: 'Inter-ExtraLight',
  Inter300: 'Inter-Light',
  Inter400: 'Inter-Regular',
  Inter500: 'Inter-Medium',
  Inter600: 'Inter-SemiBold',
  Inter700: 'Inter-Bold',
  Inter800: 'Inter-ExtraBold',
  Inter900: 'Inter-Black',
};

export const FONT_SIZE: {[key: string]: number} = {
  very_tiny: size(6),
  tiny: size(8),
  small_tiny: size(10),
  small: size(12),
  small_medium: size(14),
  medium: size(16),
  medium_extra: size(18),
  regular: size(20),
  regular_extra: size(22),
  large: size(24),
  extra_large: size(48),
};
