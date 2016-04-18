<?php
require_once 'config.php';
require_once 'objrecipe.php';
//http://phpfaq.ru/pdo
$stmt = $pdo->query('SELECT * FROM recipes');
$recList = array();
while ($row = $stmt->fetch())
{
    $rec              = new recipe;
    $rec->id          = $row['id'];
    $rec->name        = $row['name'];
    $rec->category    = $row['category'];
    $rec->podcategory = $row['podcategory'];
    $rec->ingridients = $row['ingridients'];
    $rec->cooking     = $row['cooking'];
    $rec->image       = $row['image'];
    $recList[] = $rec;
}
echo json_encode($recList);
//echo $row['name'] . "<br>" ;
$stmt = null;
$pdo = null;
?>