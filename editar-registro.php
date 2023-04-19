<?php
include ('database.php');

        $ID = $_POST['ID'];
        $nombre =  $_POST['nombre'];
        $direccion = $_POST['direccion'];
        $edad = $_POST['edad'];
        $telefono = $_POST['telefono'];
        $correo = $_POST['correo'];
    
        $query = " UPDATE `tbl_registros` 
        SET `nombre` = '$nombre', `direccion` = '$direccion', `edad` = '$edad', `telefono` = '$telefono', `correo` = '$correo' 
        WHERE `ID` = $ID";
    
        $result = mysqli_query($conexion, $query);
    
        if (!$result) {
          die('registro fallido');
        }

?>