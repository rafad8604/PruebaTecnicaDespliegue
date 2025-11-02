import Swal from 'sweetalert2';

export const useAlert = () => {
  const showSuccess = (title: string = "Perfecto", text?: string) => {
    return Swal.fire({
      title,
      text,
      icon: "success",
      draggable: true
    });
  };

  const showError = (title: string = "Oops...", text: string = "Error") => {
    return Swal.fire({
      icon: "error",
      title,
      text
    });
  };

  const showWarning = (title: string, text?: string) => {
    return Swal.fire({
      icon: "warning",
      title,
      text
    });
  };

  const showInfo = (title: string, text?: string) => {
    return Swal.fire({
      icon: "info",
      title,
      text
    });
  };

  const showConfirm = (
    title: string, 
    text?: string, 
    confirmButtonText: string = "Sí", 
    cancelButtonText: string = "No"
  ) => {
    return Swal.fire({
      title,
      text,
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText,
      cancelButtonText
    });
  };

  const showLoading = (title: string = "Cargando...", text?: string) => {
    return Swal.fire({
      title,
      text,
      allowOutsideClick: false,
      allowEscapeKey: false,
      allowEnterKey: false,
      showConfirmButton: false,
      didOpen: () => {
        Swal.showLoading();
      }
    });
  };

  const closeLoading = () => {
    Swal.close();
  };

  return {
    showSuccess,
    showError,
    showWarning,
    showInfo,
    showConfirm,
    showLoading,
    closeLoading
  };
};