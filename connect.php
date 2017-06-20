<?php
########## MySql details (Replace with yours) #############
$username = "root"; //mysql username
$password = "appieh4ck"; //mysql password
$hostname = "localhost:3306"; //hostname
$databasename = "control"; //databasename

$connecDB = mysql_connect($hostname, $username, $password)or die('could not connect to database');
mysql_select_db($databasename,$connecDB);

?>
