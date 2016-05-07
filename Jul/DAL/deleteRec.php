<?php
require_once 'config.php';
require_once 'objrecipe.php';

$rec = new recipe();

if(isset($_POST['id'])){
    $rec->id = $_POST['id'];
}

$stmt = $pdo->prepare("DELETE from recipes where id = :id)");
$stmt->execute(array(':id' => $rec->id));
$stmt = null;
$pdo = null;
echo 1;
header('Location: http://localhost/git/Jul/index.html'); exit;