export const brandColors = {
  galaxyDeep: "#3d426b",
  galaxyNebula: "#c8a2c8",
  galaxyStar: "#ffe599",
} as const;

export type BrandColor = keyof typeof brandColors;
