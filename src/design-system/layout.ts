/**
 * ============================================================
 * Executive Portfolio System
 * Layout System
 * ============================================================
 */

import tokens from "./tokens";

export const layout = {
  /* ==========================================================
   * Container Widths
   * ========================================================== */

  container: {
    compact: 1140,

    default: tokens.layout.content,

    wide: tokens.layout.container,

    full: "100%",
  },

  /* ==========================================================
   * Content Width
   * ========================================================== */

  content: {
    xs: 420,

    sm: 560,

    md: 680,

    lg: 820,

    xl: 980,
  },

  /* ==========================================================
   * Two Column Layouts
   * ========================================================== */

  columns: {
    equal: "1fr 1fr",

    hero: "1fr 1.1fr",

    about: "0.95fr 1.05fr",

    services: "1fr 1fr",

    projects: "1.1fr 0.9fr",
  },

  /* ==========================================================
   * Section
   * ========================================================== */

  section: {
    paddingTop: tokens.layout.sectionPaddingY,

    paddingBottom: tokens.layout.sectionPaddingY,

    paddingX: tokens.layout.sectionPaddingX,

    gap: tokens.layout.gridGap,
  },

  /* ==========================================================
   * Cards
   * ========================================================== */

  card: {
    maxWidth: 460,

    minHeight: 320,
  },

  /* ==========================================================
   * Images
   * ========================================================== */

  image: {
    portraitHeight: 620,

    heroHeight: 760,

    thumbnail: 320,
  },

  /* ==========================================================
   * Navigation
   * ========================================================== */

  navigation: {
    height: 90,
  },

  /* ==========================================================
   * Z Index
   * ========================================================== */

  zIndex: {
    background: 0,

    content: 10,

    navbar: 100,

    dropdown: 200,

    modal: 999,
  },
} as const;

export default layout;
