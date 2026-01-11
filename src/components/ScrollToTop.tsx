import { useEffect } from "react";
import { useLocation } from "react-router-dom";

/**
 * Ensures route navigation always starts at the top of the page.
 * Fixes the "navigate while scrolled down" behavior across all pages.
 */
const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  }, [pathname]);

  return null;
};

export default ScrollToTop;
