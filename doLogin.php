<?php 
	session_start();

	header("Content-type: application/json");

	require("conexion.php");
	require("token.php");

	$data = json_decode(file_get_contents('php://input'));
	$user = $data->username;
	$pass = $data->password;

	$error = array();
	$found=false;

	$query = "SELECT json FROM users;";
	//Autoloader
	$conection = new Conexion();

	$mysqli = $conection->getConection();

	if($result = $mysqli->query($query)){

		while($row = $result->fetch_assoc()){
			
			$decoded = json_decode($row['json'], true);

			if($decoded['user']===$user && $decoded['password']===$pass){
				$found = true;
			}
		}
	}

	if($found){
		//calling function access token
		$token = new Token();
		$_SESSION['AccessToken'] = $token->generate_access_token($user);
		//$_SESSION['TemporalToken'] = $token->generate_temporal_token($user, $_SESSION['AccessToken']);
		$_SESSION['user'] = $user;

		print_r($_SESSION['AccessToken']); //localStorage
		//header("Location: index.php");
	}else{
		$error['code'] = 404;
		$error['msg'] = 'Error';


		//header("Location: login/error");
	}
?>