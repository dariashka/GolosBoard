<?php
	$myServer = "sql.golos.cloud";
	$myDB = "DBGolos"; 
	$myUser = "golos";
	$myPass = "golos";
	
	$name = $_GET['name'];
	
	//define connection string, specify database driver
	$DSN = "Driver={SQL Server};SERVER=".$myServer.";DATABASE=".$myDB; 

	//Open the connection to the database
	$con = odbc_connect($DSN, $myUser, $myPass) or die (odbc_errormsg());
	//declare the SQL statement that will update the database
	$query = "exec sp_getaccounts '" . $name  . "%'";
	// print $query;

	// Execute the  SQL statement
	$rows = odbc_exec($con, $query) or die (odbc_errormsg());
	
	$outp = "";
	while (odbc_fetch_row($rows)) // while there are rows
	{
		if ($outp != "") {$outp .= ",";}
		$outp .= '{"name":"' . odbc_result($rows, "name") . '"}';	   
	}
	$outp ='{"records":['.$outp.']}';

	odbc_free_result($row);
	odbc_close($conn);

	echo($outp);
?>