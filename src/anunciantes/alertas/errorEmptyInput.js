import Swal from 'sweetalert2'

export const errorEmptyInput = () => {
    Swal.fire({
        icon: 'error',
        title: 'No puede haber campos vacios',
        text: 'revisa el contenido y completalo!',
        confirmButtonColor: '#EB4747',
        confirmButtonText: 'Revisar el contenido',
      })
}
