<?php
require_once 'config.php';
require_once 'objrecipe.php';

	$query='SELECT * FROM recipes';
		$result = mysqli_query($query) or die('������ �� ������: ' . mysqli_error());
		echo "<table>\n";
		while ($line = mysqli_fetch_array($result, MYSQLI_ASSOC)) {
            echo "\t<tr>\n";
            foreach ($line as $col_value) {
                echo "\t\t<td>$col_value</td>\n";
            }
            echo "\t</tr>\n";
        }
		echo "</table>\n";

		mysqli_free_result($result);

		mysqli_close($link);
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