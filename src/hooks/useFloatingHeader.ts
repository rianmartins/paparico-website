"use client";

import { useEffect, useRef, useState } from "react";

const DESKTOP_BREAKPOINT = 721;
const FLOATING_HEADER_TOP_OFFSET = 120;
const FLOATING_HEADER_SCROLL_DELTA = 10;
const FLOATING_HEADER_IDLE_TIMEOUT = 3000;
const FLOATING_HEADER_CLICK_HIDE_DELAY = 500;
// Prevent the floating header from immediately reopening during the smooth scroll
// triggered by its own navigation links.
const FLOATING_HEADER_CLICK_SUPPRESS_DURATION = 1200;

export function useFloatingHeader() {
  const [isFloatingHeaderVisible, setIsFloatingHeaderVisible] = useState(false);
  const previousScrollYRef = useRef(0);
  const isFloatingHeaderHoveredRef = useRef(false);
  const isFloatingHeaderForceHidingRef = useRef(false);
  const floatingHeaderSuppressUntilRef = useRef(0);
  const floatingHeaderRef = useRef<HTMLDivElement | null>(null);
  const mousePositionRef = useRef({ x: -1, y: -1 });
  const autoHideTimeoutRef = useRef<number | null>(null);
  const clickHideTimeoutRef = useRef<number | null>(null);
  const animationFrameRef = useRef<number | null>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const clearAutoHideTimer = () => {
      if (autoHideTimeoutRef.current !== null) {
        window.clearTimeout(autoHideTimeoutRef.current);
        autoHideTimeoutRef.current = null;
      }
    };

    const clearClickHideTimer = () => {
      if (clickHideTimeoutRef.current !== null) {
        window.clearTimeout(clickHideTimeoutRef.current);
        clickHideTimeoutRef.current = null;
      }
    };

    const hideFloatingHeader = () => {
      clearAutoHideTimer();
      clearClickHideTimer();
      isFloatingHeaderHoveredRef.current = false;
      isFloatingHeaderForceHidingRef.current = false;
      setIsFloatingHeaderVisible(false);
    };

    const isPointerInsideFloatingHeader = () => {
      const headerElement = floatingHeaderRef.current;

      if (!headerElement) {
        return false;
      }

      const { x, y } = mousePositionRef.current;

      if (x < 0 || y < 0) {
        return false;
      }

      const bounds = headerElement.getBoundingClientRect();

      return x >= bounds.left && x <= bounds.right && y >= bounds.top && y <= bounds.bottom;
    };

    const showFloatingHeaderTemporarily = () => {
      // Ignore upward scroll events for a short window after a menu click so the
      // header can finish hiding even if the page is still animating upward.
      if (Date.now() < floatingHeaderSuppressUntilRef.current) {
        return;
      }

      setIsFloatingHeaderVisible(true);
      clearAutoHideTimer();

      if (isPointerInsideFloatingHeader()) {
        isFloatingHeaderHoveredRef.current = true;
      }

      if (isFloatingHeaderHoveredRef.current || isFloatingHeaderForceHidingRef.current) {
        return;
      }

      autoHideTimeoutRef.current = window.setTimeout(() => {
        setIsFloatingHeaderVisible(false);
        autoHideTimeoutRef.current = null;
      }, FLOATING_HEADER_IDLE_TIMEOUT);
    };

    const handleScroll = () => {
      if (animationFrameRef.current !== null) return;

      // Batch scroll reads/writes in rAF to keep the header responsive without
      // reacting to every single native scroll event.
      animationFrameRef.current = window.requestAnimationFrame(() => {
        const currentScrollY = window.scrollY;
        const scrollDelta = currentScrollY - previousScrollYRef.current;
        const isDesktop = window.innerWidth >= DESKTOP_BREAKPOINT;
        const isNearTop = currentScrollY <= FLOATING_HEADER_TOP_OFFSET;

        if (!isDesktop || isNearTop) {
          hideFloatingHeader();
        } else if (scrollDelta <= -FLOATING_HEADER_SCROLL_DELTA) {
          showFloatingHeaderTemporarily();
        }

        previousScrollYRef.current = currentScrollY;
        animationFrameRef.current = null;
      });
    };

    const handleMouseMove = (event: MouseEvent) => {
      mousePositionRef.current = { x: event.clientX, y: event.clientY };
    };

    const handleResize = () => {
      if (window.innerWidth < DESKTOP_BREAKPOINT) {
        hideFloatingHeader();
      }
    };

    previousScrollYRef.current = window.scrollY;
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("resize", handleResize);

    return () => {
      clearAutoHideTimer();
      clearClickHideTimer();

      if (animationFrameRef.current !== null) {
        window.cancelAnimationFrame(animationFrameRef.current);
      }

      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleFloatingHeaderMouseEnter = () => {
    if (isFloatingHeaderForceHidingRef.current) {
      return;
    }

    isFloatingHeaderHoveredRef.current = true;

    clearTimeout(autoHideTimeoutRef.current ?? undefined);
    autoHideTimeoutRef.current = null;
  };

  const handleFloatingHeaderMouseLeave = () => {
    isFloatingHeaderHoveredRef.current = false;

    clearTimeout(autoHideTimeoutRef.current ?? undefined);
    autoHideTimeoutRef.current = null;

    if (
      typeof window !== "undefined" &&
      window.scrollY > FLOATING_HEADER_TOP_OFFSET &&
      !isFloatingHeaderForceHidingRef.current
    ) {
      autoHideTimeoutRef.current = window.setTimeout(() => {
        setIsFloatingHeaderVisible(false);
        autoHideTimeoutRef.current = null;
      }, FLOATING_HEADER_IDLE_TIMEOUT);
    }
  };

  const handleFloatingHeaderClickCapture = (event: React.MouseEvent<HTMLDivElement>) => {
    const target = event.target as HTMLElement | null;

    if (!target?.closest("a, button")) {
      return;
    }

    // Clicking a floating-menu action should always hide this helper menu,
    // even if the pointer is still hovering the header.
    isFloatingHeaderForceHidingRef.current = true;
    isFloatingHeaderHoveredRef.current = false;
    floatingHeaderSuppressUntilRef.current = Date.now() + FLOATING_HEADER_CLICK_SUPPRESS_DURATION;

    clearTimeout(autoHideTimeoutRef.current ?? undefined);
    autoHideTimeoutRef.current = null;
    clearTimeout(clickHideTimeoutRef.current ?? undefined);

    clickHideTimeoutRef.current = window.setTimeout(() => {
      setIsFloatingHeaderVisible(false);
      clickHideTimeoutRef.current = null;
      isFloatingHeaderForceHidingRef.current = false;
    }, FLOATING_HEADER_CLICK_HIDE_DELAY);
  };

  return {
    floatingHeaderRef,
    isFloatingHeaderVisible,
    handleFloatingHeaderMouseEnter,
    handleFloatingHeaderMouseLeave,
    handleFloatingHeaderClickCapture,
  };
}
