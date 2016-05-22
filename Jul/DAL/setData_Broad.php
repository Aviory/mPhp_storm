<?php
/**
 * Created by PhpStorm.
 * User: Кудесник
 * Date: 22.05.2016
 * Time: 12:39
 */
require_once 'config.php';

if(isset($_POST['data_broad'])){
    $img = $_POST['data_broad'];
}

$stmt = $pdo->prepare("UPDATE julypop_data_broad SET img = :img where dates = dates");
$stmt->execute(array(':img' => $img));
$stmt = null;
$pdo = null;
