import { toast } from "sonner";
import { i18n } from "../../i18n-config";

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

export function getSanitizedPathname(pathname: string) {
  return pathname.startsWith("/") ? pathname.substring(1) : pathname;
}

export function isPathnameMissingLocale(pathname: string) {
  return i18n.locales.every(
    (locale) => !pathname.startsWith(`/${locale}/`) && pathname !== `/${locale}`
  );
}
