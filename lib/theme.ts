import { alpha, createTheme } from "@mui/material/styles";
import { brandColors } from "@/lib/colors";
import { fredoka } from "@/lib/fonts";

const pillButtonStyles = {
  borderRadius: 9999,
  fontWeight: 700,
  textTransform: "none" as const,
  fontFamily: fredoka.style.fontFamily,
  fontSize: "1rem",
  padding: "10px 28px",
  boxShadow: "none",
};

export function createAppTheme(fontFamily: string) {
  return createTheme({
    palette: {
      galaxyDeep: {
        main: brandColors.galaxyDeep,
        contrastText: "#f5f0ff",
        dark: "#2f3354",
        light: "#4f5585",
      },
      galaxyNebula: {
        main: brandColors.galaxyNebula,
        contrastText: brandColors.galaxyDeep,
        dark: "#b88fb8",
        light: "#d4b5d4",
      },
      galaxyStar: {
        main: brandColors.galaxyStar,
        contrastText: brandColors.galaxyDeep,
        dark: "#e6c96e",
        light: "#ffedb3",
      },
    },
    typography: {
      fontFamily,
      allVariants: {
        fontFamily,
      },
      galaxyDeep: {
        fontFamily,
        color: brandColors.galaxyDeep,
      },
      galaxyNebula: {
        fontFamily,
        color: brandColors.galaxyNebula,
      },
      galaxyStar: {
        fontFamily,
        color: brandColors.galaxyStar,
      },
    },
    components: {
      MuiButton: {
        styleOverrides: {
          root: pillButtonStyles,
        },
        variants: [
          {
            props: { variant: "contained", color: "galaxyStar" },
            style: {
              boxShadow: `0 0 20px ${alpha(brandColors.galaxyStar, 0.4)}`,
              "&:hover": {
                boxShadow: `0 0 28px ${alpha(brandColors.galaxyStar, 0.55)}`,
                "@media (hover: none)": {
                  boxShadow: `0 0 20px ${alpha(brandColors.galaxyStar, 0.4)}`,
                },
              },
            },
          },
          {
            props: { variant: "contained", color: "galaxyNebula" },
            style: {
              "&:hover": {
                backgroundColor: "#d4b5d4",
              },
            },
          },
          {
            props: { variant: "contained", color: "galaxyDeep" },
            style: {
              "&:hover": {
                backgroundColor: "#4f5585",
              },
            },
          },
          {
            props: { variant: "outlined", color: "galaxyStar" },
            style: {
              borderWidth: 2,
              "&:hover": {
                borderWidth: 2,
                backgroundColor: alpha(brandColors.galaxyStar, 0.1),
              },
            },
          },
          {
            props: { variant: "outlined", color: "galaxyNebula" },
            style: {
              borderWidth: 2,
              backgroundColor: "transparent",
              "&:hover": {
                borderWidth: 2,
                backgroundColor: alpha(brandColors.galaxyNebula, 0.1),
              },
            },
          },
          {
            props: { variant: "outlined", color: "galaxyDeep" },
            style: {
              borderWidth: 2,
              "&:hover": {
                borderWidth: 2,
                backgroundColor: alpha(brandColors.galaxyDeep, 0.12),
              },
            },
          },
        ],
      },
    },
  });
}
