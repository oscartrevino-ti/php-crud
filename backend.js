$(document).ready(function(){
 
    let editar = false; //variable para enviar datos cuando el form este en editar registro
    obtenerRegistros();

    //agregar datos al enviar el form
    $('#registros-form').submit(function(e){
        
        const postData = {
            nombre: $('#nombre').val(),
            direccion: $('#direccion').val(),
            edad: $('#edad').val(),
            telefono: $('#telefono').val(),
            correo: $('#correo').val(),
            ID: $('#registroID').val()
        };
        
        //validacion mediante variable editar
        
        let url = editar === false ? 'agregar-registro.php' : 'editar-registro.php';
            console.log(url);

        $.post(url, postData, function (response) {
            console.log(response);
            //recragar tabla al agregar o actualizar un registro
            obtenerRegistros();

            $('#registros-form').trigger('reset');
            editar = false;
        });

        e.preventDefault();
    });


    //obtener registros en la tabla
    function obtenerRegistros() {
        $.ajax({
            url: 'lista-registros.php',
            type: 'GET',
            success: function (response) {
                //reflejar registros en la tabla
                let registros = JSON.parse(response);
                let template = '';
                registros.forEach(registro => {
                    template += `
                        <tr registroID="${registro.ID}">
                            <td>${registro.ID}</td>
                            <td>${registro.nombre}</td>
                            <td>${registro.direccion}</td>
                            <td>${registro.edad}</td>
                            <td>${registro.telefono}</td>
                            <td>${registro.correo}</td>
                            <td>
                                <div class="d-flex flex-column mb-3">
                                    <button class="editar-registro btn btn-info mb-2 mt-3">
                                    Editar
                                    </button>


                                    <button class="eliminar-registro btn btn-danger">
                                    Eliminar
                                    </button>
                                </div>
                            </td>
                        </tr>
                    `
                });
                //insertar template en el html
                $('#registros').html(template);
            }
        });
    }

    //Eliminar registro al hacer click en el boton "liminar" con el id del registro
    $(document).on('click', '.eliminar-registro', function () {
        let element = $(this)[0].parentElement.parentElement.parentElement;  //fila con id seleccionado
        let ID= $(element).attr('registroID'); //seleccionar id mediante atributo "registroID"
        $.post('eliminar-registro.php', {ID}, function (response) {
            console.log(response);
            obtenerRegistros();
        })
    })

    //seleccionar registro mediante boton editar 
    $(document).on('click', '.editar-registro', function () {
        let element = $(this)[0].parentElement.parentElement.parentElement;  //fila con id seleccionado
        let ID= $(element).attr('registroID'); //seleccionar id mediante atributo "registroID"
        $.post('seleccionar-registro.php', {ID}, function (response) {
            const registro = JSON.parse(response);
            $('#nombre').val(registro.nombre);
            $('#direccion').val(registro.direccion);
            $('#edad').val(registro.edad);
            $('#telefono').val(registro.telefono);
            $('#correo').val(registro.correo);
            $('#registroID').val(registro.ID);
    
            editar = true;
        })
    })


});