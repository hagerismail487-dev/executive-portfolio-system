/**
 * ============================================================
 * Executive Portfolio System
 * Shadow System
 * ============================================================
 */

import tokens from "./tokens";

export const shadows = {
  /* ==========================================================
   * Base
   * ========================================================== */

  none: "none",

  xs: tokens.shadows.xs,

  sm: tokens.shadows.sm,

  md: tokens.shadows.md,

  lg: tokens.shadows.lg,

  xl: tokens.shadows.xl,

  /* ==========================================================
   * Components
   * ========================================================== */

  button: {
    default: tokens.shadows.sm,
    hover: tokens.shadows.md,
  },

  card: {
    default: tokens.shadows.md,
    hover: tokens.shadows.lg,
  },

  image: {
    default: tokens.shadows.md,
    hover: tokens.shadows.lg,
  },

  section: {
    default: tokens.shadows.lg,
  },

  modal: {
    default: tokens.shadows.xl,
  },

  /* ==========================================================
   * Interactive States
   * ========================================================== */

  hover: {
    soft: tokens.shadows.sm,
    medium: tokens.shadows.md,
    strong: tokens.shadows.lg,
  },
} as const;

export default shadows;
