import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

let activeScrollAnimId: number | null = null;

export function smoothScrollTo(targetPosition: number, duration = 480) {
  if (typeof window === "undefined") return;

  if (activeScrollAnimId !== null) {
    cancelAnimationFrame(activeScrollAnimId);
    activeScrollAnimId = null;
  }

  const startPosition = window.pageYOffset;
  const distance = targetPosition - startPosition;
  if (Math.abs(distance) < 2) return;

  const startTime = performance.now();

  const easeInOutCubic = (t: number) =>
    t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;

  const onUserCancel = () => {
    if (activeScrollAnimId !== null) {
      cancelAnimationFrame(activeScrollAnimId);
      activeScrollAnimId = null;
    }
    cleanup();
  };

  const cleanup = () => {
    window.removeEventListener("wheel", onUserCancel);
    window.removeEventListener("touchmove", onUserCancel);
  };

  window.addEventListener("wheel", onUserCancel, { passive: true, once: true });
  window.addEventListener("touchmove", onUserCancel, { passive: true, once: true });

  const step = (currentTime: number) => {
    const elapsed = currentTime - startTime;
    const progress = Math.min(elapsed / duration, 1);
    const ease = easeInOutCubic(progress);

    window.scrollTo(0, startPosition + distance * ease);

    if (progress < 1) {
      activeScrollAnimId = requestAnimationFrame(step);
    } else {
      activeScrollAnimId = null;
      cleanup();
    }
  };

  activeScrollAnimId = requestAnimationFrame(step);
}

