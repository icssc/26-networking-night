import "@mui/material/styles";
import "@mui/material/Typography";
import "@mui/material/Button";

declare module "@mui/material/styles" {
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
  interface ButtonPropsVariantOverrides {
    galaxyDeep: true;
    galaxyNebula: true;
    galaxyStar: true;
  }
}
