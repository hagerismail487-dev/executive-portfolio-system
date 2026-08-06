/**
 * ============================================================
 * Executive Portfolio System
 * Typography System
 * ============================================================
 */

import tokens from "./tokens";

export const typography = {
  /* ==========================================================
   * Font Family
   * ========================================================== */

  fontFamily: {
    primary: tokens.typography.fontFamily.primary,
  },

  /* ==========================================================
   * Font Weight
   * ========================================================== */

  weight: {
    regular: tokens.typography.weight.regular,
    medium: tokens.typography.weight.medium,
    semibold: tokens.typography.weight.semibold,
    bold: tokens.typography.weight.bold,
    extrabold: tokens.typography.weight.extrabold,
  },

  /* ==========================================================
   * Display
   * ========================================================== */

  display: {
    xl: {
      size: 80,
      lineHeight: 1,
      weight: tokens.typography.weight.extrabold,
      letterSpacing: "-0.05em",
    },

    lg: {
      size: 72,
      lineHeight: 1.02,
      weight: tokens.typography.weight.bold,
      letterSpacing: "-0.05em",
    },

    md: {
      size: 60,
      lineHeight: 1.05,
      weight: tokens.typography.weight.bold,
      letterSpacing: "-0.04em",
    },
  },

  /* ==========================================================
   * Headings
   * ========================================================== */

  heading: {
    h1: {
      size: 64,
      lineHeight: 1.05,
      weight: tokens.typography.weight.bold,
    },

    h2: {
      size: 48,
      lineHeight: 1.1,
      weight: tokens.typography.weight.bold,
    },

    h3: {
      size: 36,
      lineHeight: 1.15,
      weight: tokens.typography.weight.bold,
    },

    h4: {
      size: 28,
      lineHeight: 1.2,
      weight: tokens.typography.weight.semibold,
    },

    h5: {
      size: 22,
      lineHeight: 1.3,
      weight: tokens.typography.weight.semibold,
    },
  },

  /* ==========================================================
   * Body
   * ========================================================== */

  body: {
    xl: {
      size: 22,
      lineHeight: 1.8,
      weight: tokens.typography.weight.regular,
    },

    lg: {
      size: 20,
      lineHeight: 1.8,
      weight: tokens.typography.weight.regular,
    },

    md: {
      size: 18,
      lineHeight: 1.8,
      weight: tokens.typography.weight.regular,
    },

    sm: {
      size: 16,
      lineHeight: 1.7,
      weight: tokens.typography.weight.regular,
    },

    xs: {
      size: 14,
      lineHeight: 1.6,
      weight: tokens.typography.weight.regular,
    },
  },

  /* ==========================================================
   * Label
   * ========================================================== */

  label: {
    section: {
      size: 14,
      weight: tokens.typography.weight.bold,
      letterSpacing: "0.35em",
      textTransform: "uppercase",
    },

    caption: {
      size: 12,
      weight: tokens.typography.weight.medium,
      letterSpacing: "0.25em",
      textTransform: "uppercase",
    },
  },

  /* ==========================================================
   * Button
   * ========================================================== */

  button: {
    lg: {
      size: 18,
      weight: tokens.typography.weight.semibold,
    },

    md: {
      size: 16,
      weight: tokens.typography.weight.semibold,
    },

    sm: {
      size: 14,
      weight: tokens.typography.weight.semibold,
    },
  },

  /* ==========================================================
   * Statistics
   * ========================================================== */

  stats: {
    value: {
      size: 56,
      weight: tokens.typography.weight.bold,
      lineHeight: 1,
    },

    label: {
      size: 16,
      weight: tokens.typography.weight.medium,
      lineHeight: 1.5,
    },
  },
} as const;

export default typography;
