"use client";

import { ThemeProvider } from "@mui/material/styles";
import { useMemo } from "react";
import { createAppTheme } from "@/lib/theme";

type MuiProviderProps = {
  children: React.ReactNode;
  fontFamily: string;
};

export function MuiProvider({ children, fontFamily }: MuiProviderProps) {
  const theme = useMemo(() => createAppTheme(fontFamily), [fontFamily]);

  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
}
