<?php
include("database.php");

    if (isset($_POST['nombre'])) {
        $nombre =  $_POST['nombre'];
        $direccion = $_POST['direccion'];
        $edad = $_POST['edad'];
        $telefono = $_POST['telefono'];
        $correo = $_POST['correo'];
    
        $query = "INSERT INTO `tbl_registros` (`nombre`, `direccion`, `edad`, `telefono`, `correo`) 
        VALUES ('$nombre', '$direccion', '$edad', '$telefono', '$correo')";
    
        $result = mysqli_query($conexion, $query);
    
        if (!$result) {
          die('registro fallido');
        }
        echo 'registro agregdo';
        }

        $jsonstring = json_encode($json);
        echo $jsonstring;

?>