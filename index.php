<?php 
	//if(isset($_SESSION['user'])){
?>
<html ng-app="request">
	<head>
		<title>Requests</title>
		<link rel="stylesheet" type="text/css" href="css/reset_v2.0.css">
		<link rel="stylesheet" type="text/css" href="css/bootstrap.min.css">
	</head>
	<body>
		<div ng-controller="TwitterController as twitter" class="container text-center">
			<div id="twitter">
				<div class="text-center" id="tweets">
					<h2><span><a href="https://twitter.com/Om4rChH" target="_blank">@Om4rChH</a></span></h2>
					<div class="text-center" id="twitter-feed"></div>
				</div>
				<button ng-click="twitter.getTweets(twitter)" class="btn btn-info">Get Tweets from @Om4rChH</button>
				<br>
				<br>
				<div ng-repeat="tweet in twitter.tweets" class="text-left well">
					<h4>
						<img src="{{tweet.user.profile_image_url}}"/>&nbsp;<strong ng-show="tweet.retweeted_status">{{tweet.retweeted_status.user.name}} -></strong>
						{{tweet.user.name}}
					</h4>
					<br>
					{{tweet.text}}
					<br>
					<small>{{tweet.created_at}}</small>
				</div>
			</div>
		</div>
		<script src="js/angular.min.js" type="text/javascript"></script>
		<script src="js/app.js" type="text/javascript"></script>
	</body>
</html>
<?php 
	/*}else{
		header('Location: login.php');		
	}//*/
?>