<?php
	$file = fopen("img/img.png", "rb");
	$image = fread($file, filesize("img/img.png"));
	fclose($file);

	$coded_image = base64_encode($image);
?>