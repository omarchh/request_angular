<?php

class Conexion{
	//datos servidor
	var $localhost="localhost";
	var $usuario="root";
	var $contraseña="";
	var $basedatos="webService";

	function getConection(){
		$mysqli=new mysqli($this->localhost, $this->usuario, $this->contraseña, $this->basedatos);
	  	if($mysqli->connect_errno){
			echo "Fallo en la conexi&oacute;n"; 
			return false;
		}else{
			return $mysqli;
		}
	}
  
	function closeConection($mysqli){
		$mysqli->close();
	}
}
?>