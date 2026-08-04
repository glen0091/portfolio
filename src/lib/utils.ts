import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/** Deterministic small helper for staggered animation delays. */
export function stagger(index: number, base = 0.06) {
  return Number((index * base).toFixed(2));
}
