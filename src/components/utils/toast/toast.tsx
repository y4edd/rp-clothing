import { toast, ToastContainer, ToastOptions } from "react-toastify";

export const showToast = (message: string, type: string) => {
  const options: ToastOptions = {
    position: "top-center",
    autoClose: 3000,
    hideProgressBar: false,
    closeOnClick: false,
    pauseOnHover: true,
    draggable: false,
    progress: undefined,
    theme: "colored",
  };

  if (type === "success") {
    toast.success(message, options);
  } else {
    toast.error(message, options);
  }
};

export const ToastContainerComponent = () => <ToastContainer />;
