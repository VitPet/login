<?php
	$login = "krab";
	$password = "ultra";

	if ($login == $_POST['login'] && $password == $_POST['password']) {
		echo("true");
	}
	else {
		echo("false");
	}
?>