
import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function getLazyImageUrl(url: string, blur = true) {
  if (!url) return '';
  if (blur) {
    // Add blur parameter if the URL is from Unsplash or similar services
    if (url.includes('unsplash.com')) {
      return `${url}&blur=200`;
    }
  }
  return url;
}
