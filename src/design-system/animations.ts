/**
 * ============================================================
 * Executive Portfolio System
 * Animation System
 * ============================================================
 */

import tokens from "./tokens";

export const animations = {
  /* ==========================================================
   * Duration
   * ========================================================== */

  duration: {
    fast: tokens.animation.fast,
    normal: tokens.animation.normal,
    slow: tokens.animation.slow,
  },

  /* ==========================================================
   * Timing Function
   * ========================================================== */

  easing: {
    default: tokens.animation.easing,

    easeIn: "cubic-bezier(0.4,0,1,1)",

    easeOut: "cubic-bezier(0,0,0.2,1)",

    easeInOut: "cubic-bezier(0.4,0,0.2,1)",
  },

  /* ==========================================================
   * Transition
   * ========================================================== */

  transition: {
    default: `all ${tokens.animation.normal} ${tokens.animation.easing}`,

    colors: `color ${tokens.animation.normal} ${tokens.animation.easing},
              background-color ${tokens.animation.normal} ${tokens.animation.easing},
              border-color ${tokens.animation.normal} ${tokens.animation.easing}`,

    transform: `transform ${tokens.animation.normal} ${tokens.animation.easing}`,

    shadow: `box-shadow ${tokens.animation.normal} ${tokens.animation.easing}`,

    opacity: `opacity ${tokens.animation.normal} ${tokens.animation.easing}`,
  },

  /* ==========================================================
   * Hover Effects
   * ========================================================== */

  hover: {
    lift: {
      translateY: "-6px",
    },

    softLift: {
      translateY: "-3px",
    },

    scale: {
      small: "1.02",
      medium: "1.05",
      large: "1.08",
    },
  },

  /* ==========================================================
   * Opacity
   * ========================================================== */

  opacity: {
    hidden: 0,

    visible: 1,

    muted: 0.7,
  },

  /* ==========================================================
   * Blur
   * ========================================================== */

  blur: {
    sm: "4px",

    md: "12px",

    lg: "24px",

    xl: "48px",
  },
} as const;

export default animations;
