/**
 * ============================================================
 * Executive Portfolio System
 * Design Tokens
 * Single Source of Truth
 * ============================================================
 */

export const tokens = {
  /* ==========================================================
   * Brand
   * ========================================================== */

  brand: {
    name: "Executive Portfolio System",
    author: "Hager Ismail",
  },

  /* ==========================================================
   * Colors
   * ========================================================== */

  colors: {
    primary: "#2563EB",
    primaryDark: "#102A56",
    primaryLight: "#EEF5FF",

    white: "#FFFFFF",

    background: "#FAFBFD",
    surface: "#FFFFFF",

    border: "#E7EEF8",
    divider: "#EEF2F7",

    textPrimary: "#102A56",
    textSecondary: "#475569",
    textMuted: "#64748B",

    success: "#16A34A",
    warning: "#F59E0B",
    danger: "#DC2626",
  },

  /* ==========================================================
   * Typography
   * ========================================================== */

  typography: {
    fontFamily: {
      primary: "Inter, sans-serif",
    },

    weight: {
      regular: 400,
      medium: 500,
      semibold: 600,
      bold: 700,
      extrabold: 800,
    },
  },

  /* ==========================================================
   * Layout
   * ========================================================== */

  layout: {
    container: 1440,
    content: 1320,

    sectionPaddingY: 160,
    sectionPaddingX: 24,

    gridGap: 96,
  },

  /* ==========================================================
   * Radius
   * ========================================================== */

  radius: {
    xs: 8,
    sm: 12,
    md: 16,
    lg: 24,
    xl: 32,
    xxl: 40,

    button: 16,
    card: 28,
    image: 32,
    section: 40,
  },

  /* ==========================================================
   * Shadow
   * ========================================================== */

  shadows: {
    xs: "0 2px 6px rgba(15,23,42,.05)",

    sm: "0 8px 20px rgba(15,23,42,.06)",

    md: "0 16px 40px rgba(18,58,99,.08)",

    lg: "0 30px 80px rgba(18,58,99,.10)",

    xl: "0 45px 120px rgba(18,58,99,.12)",
  },

  /* ==========================================================
   * Spacing
   * ========================================================== */

  spacing: {
    xs: 4,
    sm: 8,
    md: 16,
    lg: 24,
    xl: 32,
    xxl: 48,
    xxxl: 64,
    section: 160,
  },

  /* ==========================================================
   * Breakpoints
   * ========================================================== */

  breakpoints: {
    mobile: 640,
    tablet: 768,
    laptop: 1024,
    desktop: 1280,
    wide: 1536,
  },

  /* ==========================================================
   * Animation
   * ========================================================== */

  animation: {
    fast: "150ms",
    normal: "300ms",
    slow: "500ms",

    easing: "cubic-bezier(.4,0,.2,1)",
  },
} as const;

export default tokens;
