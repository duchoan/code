<?php
/*
Page:           _config-rating.php
Created:        Aug 2006
Last Mod:       Mar 18 2007
Holds info for connecting to the db, and some other vars
--------------------------------------------------------- 
ryan masuga, masugadesign.com
ryan@masugadesign.com 
Licensed under a Creative Commons Attribution 3.0 License.
http://creativecommons.org/licenses/by/3.0/
See readme.txt for full credit details.
--------------------------------------------------------- */

//Connect to  your rating database
$rating_dbhost = 'nginx';
$rating_dbuser = 'univiva_vn';
$rating_dbpass = '3qp97BU8v';
$rating_dbname = 'univiva_vn';
$rating_tableName = 'bigweb_ratings';
$rating_path_db = ''; // the path to your db.php file (not used yet!)
$rating_path_rpc = ''; // the path to your rpc.php file (not used yet!)

$rating_unitwidth = 30; // the width (in pixels) of each rating unit (star, etc.)
// if you changed your graphic to be 50 pixels wide, you should change the value above

@$rating_conn = mysqli_connect($rating_dbhost, $rating_dbuser, $rating_dbpass,$rating_dbname);
//if (!$rating_conn) {
//    echo "Error: Unable to connect to MySQL." . PHP_EOL;
//    echo "Debugging errno: " . mysqli_connect_errno() . PHP_EOL;
//    echo "Debugging error: " . mysqli_connect_error() . PHP_EOL;
//    exit;
//}else {
//    echo "success" . PHP_EOL;
//}

?>