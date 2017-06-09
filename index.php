<?php

$jsonFile = 'games.json';
$gamesJson = getDataFromJson($jsonFile);

//return json file with specific category game
if ($_SERVER['REQUEST_METHOD'] === 'GET') {
	 $id= $_GET['gameId'];
	 $json= json_encode($gamesJson[$id]);
	 echo $json;
}

function getDataFromJson($jsonFile){
	$str = file_get_contents($jsonFile);
	$dataArr = json_decode($str, true); // decode the JSON 
	return $dataArr;
}


?>
