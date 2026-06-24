import { Fredoka, Nunito, Roboto_Flex } from "next/font/google";

export type AppFont = {
  className: string;
  style: { fontFamily: string };
  variable?: string;
};

export const nunito = Nunito({
  subsets: ["latin"],
  variable: "--font-nunito",
  display: "swap",
});

export const robotoFlex = Roboto_Flex({
  subsets: ["latin"],
  variable: "--font-roboto-flex",
  display: "swap",
});

export const fredoka = Fredoka({
  subsets: ["latin"],
  variable: "--font-fredoka",
  display: "swap",
});
