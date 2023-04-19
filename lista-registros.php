<?php
include("database.php");

$query = "SELECT * FROM `tbl_registros`";
$result = mysqli_query($conexion, $query);
    
    if (!$result) {
        die('FALLO');
    }

    
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

    $jsonstring = json_encode($json);
    echo $jsonstring;

?>