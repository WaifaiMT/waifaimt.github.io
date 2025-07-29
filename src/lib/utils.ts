// src/lib/utils.ts
import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const formatPeriod = (period: string): string => {
  return period.replace(/—/g, '—'); // Ensure consistent em dash
};

export const getYearFromPeriod = (period: string): string => {
  return period.split(' ')[0];
};
