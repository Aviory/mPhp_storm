<?php
require_once 'config.php';
require_once 'objrecipe.php';
$rec = new recipe();
if(isset($_POST['recname'])){
    $rec->rec_name = $_POST['recname'];
}
if(isset($_POST['categoryes'])){
    $rec->category = $_POST['categoryes'];
}
if(isset($_POST['podcategoryes'])){
    $rec->podcategory = $_POST['podcategoryes'];
}
if(isset($_POST['ingridients'])){
    $rec->ingridients = $_POST['ingridients'];
}
if(isset($_POST['cookings'])){
    $rec->cooking = $_POST['cookings'];
}
if(isset($_POST['images'])){
    $rec->image = $_POST['images'];
}
if(is_uploaded_file($_FILES["filename"]["tmp_name"]))// поправить имя
{
    // Если файл загружен успешно, перемещаем его
    // из временной директории в конечную
    move_uploaded_file($_FILES["filename"]["tmp_name"], "/res/".$_FILES["filename"]["name"]);
    $image = "res/"+$_FILES["tmp_name"];
}

$stmt = $pdo->prepare("INSERT into recipes (rec_name, category, podcategory, ingridients, cooking, image) VALUES (:rec_name, :category, :podcategory, :ingridients, :cooking, :image)");
$stmt->execute(array(':rec_name' => $rec->rec_name, ':category'=>$rec->category, ':podcategory' => $rec->podcategory, ':ingridients' =>$rec->ingridients, ':cooking'=>$rec->cooking, ':image' => $rec->image));
$stmt = null;
$pdo = null;
header('Location: http://localhost/git/Jul/index.html'); exit;
?>