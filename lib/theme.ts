import { alpha, createTheme } from "@mui/material/styles";
import { brandColors } from "@/lib/colors";

export function createAppTheme(fontFamily: string) {
  return createTheme({
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
        variants: [
          {
            props: { variant: "galaxyDeep" },
            style: {
              color: "#f5f0ff",
              backgroundColor: brandColors.galaxyDeep,
              boxShadow: "none",
              "&:hover": {
                backgroundColor: "#4f5585",
                boxShadow: "none",
                "@media (hover: none)": {
                  backgroundColor: "#4f5585",
                },
              },
              "&:active": {
                boxShadow: "none",
              },
              "&.Mui-focusVisible": {
                boxShadow: `0 0 0 3px ${alpha(brandColors.galaxyDeep, 0.45)}`,
              },
              "&.Mui-disabled": {
                color: alpha("#f5f0ff", 0.5),
                backgroundColor: alpha(brandColors.galaxyDeep, 0.5),
              },
            },
          },
          {
            props: { variant: "galaxyNebula" },
            style: {
              color: brandColors.galaxyDeep,
              backgroundColor: brandColors.galaxyNebula,
              boxShadow: "none",
              "&:hover": {
                backgroundColor: "#d4b5d4",
                boxShadow: "none",
                "@media (hover: none)": {
                  backgroundColor: "#d4b5d4",
                },
              },
              "&:active": {
                boxShadow: "none",
              },
              "&.Mui-focusVisible": {
                boxShadow: `0 0 0 3px ${alpha(brandColors.galaxyNebula, 0.55)}`,
              },
              "&.Mui-disabled": {
                color: alpha(brandColors.galaxyDeep, 0.5),
                backgroundColor: alpha(brandColors.galaxyNebula, 0.5),
              },
            },
          },
          {
            props: { variant: "galaxyStar" },
            style: {
              color: brandColors.galaxyDeep,
              backgroundColor: brandColors.galaxyStar,
              boxShadow: "none",
              "&:hover": {
                backgroundColor: "#ffedb3",
                boxShadow: "none",
                "@media (hover: none)": {
                  backgroundColor: "#ffedb3",
                },
              },
              "&:active": {
                boxShadow: "none",
              },
              "&.Mui-focusVisible": {
                boxShadow: `0 0 0 3px ${alpha(brandColors.galaxyStar, 0.55)}`,
              },
              "&.Mui-disabled": {
                color: alpha(brandColors.galaxyDeep, 0.5),
                backgroundColor: alpha(brandColors.galaxyStar, 0.5),
              },
            },
          },
        ],
      },
    },
  });
}
