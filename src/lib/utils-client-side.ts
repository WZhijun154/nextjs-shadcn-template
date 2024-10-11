import { toast } from "sonner";

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
