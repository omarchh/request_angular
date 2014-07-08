<?php
class Token{
	function generate_access_token($user_passed){
		$user = array();
		$user[] = date("d-m-Y");
		$user[] = date("H:i:s");
		$user[] = date("H:i:s", strtotime('+30 minutes'));
		$user[] = $this->encrypt($user_passed);
		return array('accessToken' => implode('|', $user));
	}

	function generate_temporal_token($user, $access_token){
		$temporal_token = $access_token['accessToken'];
		$user_temporal = explode("|", $temporal_token);
		$user_temporal[1] = $user_temporal[2];
		$user_temporal[2] = date("H:i:s", strtotime('+30 minutes'));
		print_r($user_temporal);

		//echo date("d-m-Y H:i:s");
		//return array('accessToken' => implode('|', $user_temporal));
	}

	function encrypt($string){

		$crypted = "";
		$array = [];

		for($i=0;$i<strlen($string);$i++){
			$array[$i]=$string[$i]; 
		}

		$lengthArray = (count($array)-1);

		foreach($array as $pos){
			$crypted = $crypted . ('i%u'.$pos.rand(0,11).'#e?'.$pos.rand(0,13).'@xax'.$pos.'ls==');
		}

		return $crypted;
	}
}
?>