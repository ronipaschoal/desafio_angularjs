<?php

	// print_r($_POST);

	// return all our data to an AJAX call
	//echo json_encode($data);

include_once 'database.php';

try{
	$dbh = new PDO($servername, $username, $password);
	
	$sql = 'SELECT *
	    FROM cursos';
	$sth = $dbh->prepare($sql, array(PDO::ATTR_CURSOR => PDO::CURSOR_FWDONLY));
	$sth->execute();

	// print_r($sth->fetchAll());
	
	echo json_encode($sth->fetchAll());
} catch(PDOException $e) {
	// echo 'Error: ' . $e->getMessage();
}
?>
