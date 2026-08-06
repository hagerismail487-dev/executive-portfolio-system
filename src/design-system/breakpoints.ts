/**
 * ============================================================
 * Executive Portfolio System
 * Breakpoints System
 * ============================================================
 */

import tokens from "./tokens";

export const breakpoints = {
  /* ==========================================================
   * Devices
   * ========================================================== */

  mobile: tokens.breakpoints.mobile,

  tablet: tokens.breakpoints.tablet,

  laptop: tokens.breakpoints.laptop,

  desktop: tokens.breakpoints.desktop,

  wide: tokens.breakpoints.wide,

  /* ==========================================================
   * Media Queries
   * ========================================================== */

  media: {
    mobile: `(min-width: ${tokens.breakpoints.mobile}px)`,

    tablet: `(min-width: ${tokens.breakpoints.tablet}px)`,

    laptop: `(min-width: ${tokens.breakpoints.laptop}px)`,

    desktop: `(min-width: ${tokens.breakpoints.desktop}px)`,

    wide: `(min-width: ${tokens.breakpoints.wide}px)`,
  },

  /* ==========================================================
   * Container Width
   * ========================================================== */

  container: {
    mobile: "100%",

    tablet: "100%",

    laptop: "960px",

    desktop: "1240px",

    wide: "1320px",
  },

  /* ==========================================================
   * Columns
   * ========================================================== */

  columns: {
    mobile: 1,

    tablet: 1,

    laptop: 2,

    desktop: 2,

    wide: 2,
  },

  /* ==========================================================
   * Navigation
   * ========================================================== */

  navigation: {
    mobile: true,

    desktop: false,
  },
} as const;

export default breakpoints;
