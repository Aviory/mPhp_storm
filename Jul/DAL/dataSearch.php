<?php
require_once 'config.php';
$from_query;

if(isset($_POST['from_query'])){
    $from_query = $_POST['from_query'];
}
if(isset($_POST['from_category'])){
    $from_category = $_POST['from_category'];
}
if(isset($_POST['from_podcategory'])){
    $from_podcategory = $_POST['from_podcategory'];
}
if(isset($_POST['from_name'])){
    $from_name = $_POST['from_name'];
}
if(isset($_POST['from_ingridient'])){
    $from_ingridient = $_POST['from_ingridient'];
}

$stmt = $pdo->prepare('SELECT * FROM recipes');
$stmt->execute(array(':rec_name' => $rec->rec_name));
$reclist = array();
while ($row = $stmt->fetch())
{
    $rec              = array(
        "id"          => $row['id'],
        "name"        => $row['name'],
        "category"    => $row['category'],
        "podcategory" => $row['podcategory'],
        "ingridients" => $row['ingridients'],
        "cooking"     => $row['cooking'],
        "image"       => $row['image']
    );
    $reclist[] = $rec;
}
echo json_encode($reclist);

$stmt = null;
$pdo = null;
?>