export type AppFont = {
  className: string;
  style: { fontFamily: string };
};

type AppFontWithVariable = AppFont & {
  variable: string;
};

export const nunito: AppFontWithVariable = {
  className: "",
  variable: "",
  style: { fontFamily: '"Nunito", "Helvetica Neue", Arial, sans-serif' },
};

export const robotoFlex: AppFont = {
  className: "",
  style: { fontFamily: '"Roboto Flex", Arial, sans-serif' },
};

export const fredoka: AppFont = {
  className: "",
  style: { fontFamily: '"Fredoka", "Trebuchet MS", sans-serif' },
};
