import "@mui/material/styles";
import "@mui/material/Typography";
import "@mui/material/Button";

declare module "@mui/material/styles" {
  interface Palette {
    galaxyDeep: Palette["primary"];
    galaxyNebula: Palette["primary"];
    galaxyStar: Palette["primary"];
  }

  interface PaletteOptions {
    galaxyDeep?: PaletteOptions["primary"];
    galaxyNebula?: PaletteOptions["primary"];
    galaxyStar?: PaletteOptions["primary"];
  }

  interface TypographyVariants {
    galaxyDeep: React.CSSProperties;
    galaxyNebula: React.CSSProperties;
    galaxyStar: React.CSSProperties;
  }

  interface TypographyVariantsOptions {
    galaxyDeep?: React.CSSProperties;
    galaxyNebula?: React.CSSProperties;
    galaxyStar?: React.CSSProperties;
  }
}

declare module "@mui/material/Typography" {
  interface TypographyPropsVariantOverrides {
    galaxyDeep: true;
    galaxyNebula: true;
    galaxyStar: true;
  }
}

declare module "@mui/material/Button" {
  interface ButtonPropsColorOverrides {
    galaxyDeep: true;
    galaxyNebula: true;
    galaxyStar: true;
  }
}
