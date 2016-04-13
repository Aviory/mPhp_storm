<html>
<head>
<meta charset="utf-8">
</head>
<body>
<?php
require_once 'config.php';
require_once 'objrecipe.php';

	$query='SELECT * FROM recipes';
		$result = mysql_query($query) or die('Запрос не удался: ' . mysql_error());
		echo "<table>\n";
		while ($line = mysql_fetch_array($result, MYSQL_ASSOC)) {
			echo "\t<tr>\n";
			foreach ($line as $col_value) {
				echo "\t\t<td>$col_value</td>\n";
			}
			echo "\t</tr>\n";
		}
		echo "</table>\n";

		mysql_free_result($result);

		mysql_close($link);
	function read()
	{
		
	}
	function create()
	{
		
	}
	function update()
	{
		
	}
	function delite()
	{
		
	}

?>
</body>
</html>