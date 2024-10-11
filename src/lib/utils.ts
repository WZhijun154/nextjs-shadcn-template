import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { toast } from "sonner";

export const IS_PRODUCTION = process.env.IS_PRODUCTION === "true";

export const SITE_URL = IS_PRODUCTION
  ? (process.env.SITE_URL as string)
  : "http://localhost:3000";

export const UI_TITLE = "ShadcnUI/Nextjs";

export const AUTHOR_NAME = "Wang Zhijun";
export const AUTHOR_TITLE = "Full Stack Developer";
export const AUTHOR_GITHUB_URL = "https://github.com/WZhijun154";
export const AUTHOR_AVATAR_URL =
  "https://avatars.githubusercontent.com/u/65524271?s=400&u=c3a2cdd11799add06a5259b00e9cfc7475b4da5d&v=4";
export const AUTHOR_X_URL = "https://x.com/wangzhijun154";
export const TODAY_YEAR = new Date().getFullYear();
export const TODAY_DATE = new Date();

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
