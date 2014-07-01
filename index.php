<html ng-app="request">
	<head>
		<title>Requests</title>
	</head>
	<body>

		<div class="section-page-landing" id="twitter">
			<div class="inner-section">
				<div class="container text-center" id="tweets">
					<h2><span><a href="https://twitter.com/FutApp" target="_blank">@FutApp</a></span></h2>
					<div class="text-center" id="twitter-feed"></div>
				</div>
			</div>
		</div>

		<div ng-controller="TwitterController as twitter">
			<div>
				<button ng-click="twitter.getTweets()">Get getTweets</button>
			</div>
			<div ng-repeat="tweet in twitter.tweets">
				hola
			</div>
		</div>

		<script src="js/angular.min.js" type="text/javascript"></script>
		<script src="js/tweetfeed.js" type="text/javascript"></script>
	</body>
</html>