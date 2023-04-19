<?php
include ('database.php');

    if (isset($_POST['ID'])) {

        $ID = $_POST['ID'];

        $query = "DELETE FROM `tbl_registros` WHERE `ID`= $ID";
        $result = mysqli_query($conexion, $query);

        if (!$result) {
            die('fallido');
        }


    }
?>