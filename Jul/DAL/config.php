<?php
$hostname_connect = "localhost";
$database_connect = "datarec";
$username_connect = "root";
$password_connect = "";

$link = mysqli_connect($hostname_connect, $username_connect, $password_connect) or die('Не удалось соединиться: ' . mysqli_error());
echo 'Соединение успешно установлено';
mysqli_select_db($database_connect) or die('Не удалось выбрать базу данных');

@mysqli_query("set character_set_client='utf8'");
@mysqli_query("set character_set_results='utf8'");
@mysqli_query("set collation_connection='utf8_unicode_ci'");
?>