import { createTheme } from "@mui/material/styles";

export function createAppTheme(fontFamily: string) {
  return createTheme({
    typography: {
      fontFamily,
      allVariants: {
        fontFamily,
      },
    },
  });
}
