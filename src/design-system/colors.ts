/**
 * ============================================================
 * Executive Portfolio System
 * Color System
 * ============================================================
 */

import tokens from "./tokens";

export const colors = {
  /* ==========================================================
   * Brand
   * ========================================================== */

  brand: {
    primary: tokens.colors.primary,
    primaryDark: tokens.colors.primaryDark,
    primaryLight: tokens.colors.primaryLight,
  },

  /* ==========================================================
   * Backgrounds
   * ========================================================== */

  background: {
    page: tokens.colors.background,
    section: tokens.colors.background,
    surface: tokens.colors.surface,
    card: tokens.colors.surface,
    elevated: tokens.colors.white,
  },

  /* ==========================================================
   * Text
   * ========================================================== */

  text: {
    primary: tokens.colors.textPrimary,
    secondary: tokens.colors.textSecondary,
    muted: tokens.colors.textMuted,
    inverse: tokens.colors.white,
  },

  /* ==========================================================
   * Borders
   * ========================================================== */

  border: {
    primary: tokens.colors.border,
    secondary: tokens.colors.divider,
    light: tokens.colors.primaryLight,
  },

  /* ==========================================================
   * Status
   * ========================================================== */

  status: {
    success: tokens.colors.success,
    warning: tokens.colors.warning,
    danger: tokens.colors.danger,
  },

  /* ==========================================================
   * Buttons
   * ========================================================== */

  button: {
    primary: {
      background: tokens.colors.primary,
      text: tokens.colors.white,
    },

    secondary: {
      background: tokens.colors.white,
      text: tokens.colors.primaryDark,
      border: tokens.colors.border,
    },
  },

  /* ==========================================================
   * Cards
   * ========================================================== */

  card: {
    background: tokens.colors.white,
    border: tokens.colors.border,
  },
} as const;

export default colors;
