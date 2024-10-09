import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { toast } from "sonner";

export const IS_PRODUCTION = process.env.IS_PRODUCTION === "true";

export const SITE_URL = IS_PRODUCTION
  ? (process.env.SITE_URL as string)
  : "http://localhost:3000";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function toastError(message: string) {
  toast.error(message, {
    position: "top-right",
  });
}

export function toastSuccess(message: string) {
  toast.success(message, {
    position: "top-right",
  });
}

export function toastInfo(message: string) {
  toast.info(message, {
    position: "top-right",
  });
}

export function toastWarning(message: string) {
  toast.warning(message, {
    position: "top-right",
  });
}
