<?php
//include database connection file
include_once("connect.php");

    //sanitize post value, PHP filter FILTER_SANITIZE_STRING, FILTER_FLAG_STRIP_HIGH
    $colname = filter_var($_POST["column_name"],FILTER_SANITIZE_STRING, FILTER_FLAG_STRIP_HIGH);
    $val = filter_var($_POST["value"],FILTER_SANITIZE_STRING, FILTER_FLAG_STRIP_HIGH);
	
    // Insert sanitize string in record
    if(mysql_query("UPDATE arduino SET $colname=$val WHERE id='1'"))
    {     
        mysql_close($connecDB);
        
    }else{
        //output error
         header('HTTP/1.1 500 Looks like mysql error, could not insert record!');
        exit();
    }
    
?>
