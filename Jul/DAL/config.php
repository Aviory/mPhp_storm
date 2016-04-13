<?php
$hostname_connect = "localhost";
$database_connect = "recdata";
$username_connect = "root";
$password_connect = "";

$link = mysql_connect($hostname_connect, $username_connect, $password_connect) or die('Не удалось соединиться: ' . mysql_error());
echo 'Соединение успешно установлено';
mysql_select_db($database_connect) or die('Не удалось выбрать базу данных');

@mysql_query("set character_set_client='utf8'");
@mysql_query("set character_set_results='utf8'");
@mysql_query("set collation_connection='utf8_unicode_ci'");


?>