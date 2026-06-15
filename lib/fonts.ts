import { Fredoka, Roboto_Flex } from "next/font/google";

export const robotoFlex = Roboto_Flex({
  subsets: ["latin"],
  display: "swap",
});

export const fredoka = Fredoka({
  subsets: ["latin"],
  display: "swap",
});

export type AppFont = {
  className: string;
  style: { fontFamily: string };
};
