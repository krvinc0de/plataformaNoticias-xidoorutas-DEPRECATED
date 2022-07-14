import Swal from "sweetalert2"

export const userNotFound = () => {
    Swal.fire({
        icon: 'error',
        title: 'No existe ese usuario o contrasenia',
        text: 'Intentelo de nuevo',
        showConfirmButton: false,
        timer: 2500
      })
}