/**
 * ============================================================
 * Executive Portfolio System
 * Border Radius System
 * ============================================================
 */

import tokens from "./tokens";

export const radius = {
  /* ==========================================================
   * Base Scale
   * ========================================================== */

  xs: tokens.radius.xs,
  sm: tokens.radius.sm,
  md: tokens.radius.md,
  lg: tokens.radius.lg,
  xl: tokens.radius.xl,
  xxl: tokens.radius.xxl,

  /* ==========================================================
   * Components
   * ========================================================== */

  button: {
    sm: tokens.radius.button,
    md: tokens.radius.button,
    lg: tokens.radius.button,
    pill: 9999,
  },

  /* ==========================================================
   * Cards
   * ========================================================== */

  card: {
    sm: tokens.radius.lg,
    md: tokens.radius.card,
    lg: tokens.radius.section,
  },

  /* ==========================================================
   * Images
   * ========================================================== */

  image: {
    sm: tokens.radius.md,
    md: tokens.radius.image,
    lg: tokens.radius.section,
    circle: 9999,
  },

  /* ==========================================================
   * Inputs
   * ========================================================== */

  input: {
    sm: tokens.radius.sm,
    md: tokens.radius.md,
    lg: tokens.radius.lg,
  },

  /* ==========================================================
   * Containers
   * ========================================================== */

  container: {
    card: tokens.radius.card,
    section: tokens.radius.section,
  },

  /* ==========================================================
   * Special
   * ========================================================== */

  badge: {
    rounded: 9999,
  },

  avatar: {
    rounded: 9999,
  },
} as const;

export default radius;
