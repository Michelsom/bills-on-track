export const darkTheme = {
  primary: '#16C64F',
  background: '#333',

  title: '#fff',
  text: '#fff',
  greenColor: '#008440',
  accent: '#8A85FF',
  grey100: '#888',
  black: '#000',

  grey300: '#333',
  grey200: '#222',

  danger: '#A33',
}

export type BaseTheme = typeof darkTheme;
export type Theme = { theme: BaseTheme };