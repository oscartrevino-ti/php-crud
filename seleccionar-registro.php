<?php
include ('database.php');

    $ID = $_POST['ID'];
    $query = "SELECT * FROM `tbl_registros` WHERE `ID`= $ID";
    $result = mysqli_query($conexion, $query);

    if(!$result) {
        die('fallido');
    }
    
    //almacenar datos en array json
    $json = array();
    while($row = mysqli_fetch_array($result)) {
        $json[] = array(
            'nombre' => $row['nombre'],
            'direccion' => $row['direccion'],
            'edad' => $row['edad'],
            'telefono' => $row['telefono'],
            'correo' => $row['correo'],
            'ID' => $row['ID']
        );
    }   

    $jsonstring = json_encode($json[0]);
    echo $jsonstring;

?>