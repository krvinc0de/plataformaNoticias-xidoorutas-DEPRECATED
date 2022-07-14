import Swal from 'sweetalert2'

export const successPost = (datos, onSubmit) => {
    Swal.fire({
        icon: 'question',
        title: 'La publicacion esta apunto de crearse en Xidoo Rutas',
        text: 'Asegurate de que no tenga errores! :)',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Estoy seguro, crea mi publicacion!',
        cancelButtonText: 'Revisar de nuevo'
      }).then(result=>{
        if(result.isConfirmed && datos.parrafo1 != '' && datos.parrafo2 != '' && datos.parrafo3 && datos.titulo != ''){
          Swal.fire(
            'Publicacion creada con exito!',
            'Gracias por contribuir a la comunidad:)',
            'success',
            onSubmit(datos)
            )
        }
      })
}
