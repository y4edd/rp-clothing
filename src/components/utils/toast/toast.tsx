import { ToastContainer, type ToastOptions, toast } from "react-toastify";

export const showToast = (message: string) => {
  const options: ToastOptions = {
    position: "top-center",
    autoClose: 500,
    hideProgressBar: true,
    closeOnClick: false,
    pauseOnHover: true,
    draggable: false,
    progress: undefined,
    theme: "colored",
  };

  toast.success(message, options);
};

export const ToastContainerComponent = () => <ToastContainer />;
