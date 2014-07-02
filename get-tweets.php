<?php
require_once("oauth/twitteroauth.php"); //Path to twitteroauth library

//Content conversion
$postdata = file_get_contents("php://input");
$request = json_decode($postdata);
$usuario = $request->user;
$password = $request->pass;

$twitteruser = "Om4rChH";//Username
$notweets = 10;//number of tweets to get
//Keys provided by twitter account
$consumerkey = "LHkKJItKmJGj9EewF2543SQoY";
$consumersecret = "cVImsvPmHZxrLte2JgCtUqx1JgNJApMvd4RzS99UgFVRB0V4C8";
$accesstoken = "379872175-t4gLqlkgZ5wdP5d3A3AujfRwc8ZMU7Oq3yn9ptZ5";
$accesstokensecret = "SR7GqQOoBJWVS6qmHMIU8iDCjwylgAHHvDVlHWIZ9leno";

//getting conection to twitter
$connection = new TwitterOAuth($consumerkey, $consumersecret, $accesstoken, $accesstokensecret);
//getting tweets
$tweets = $connection->get("https://api.twitter.com/1.1/statuses/user_timeline.json?screen_name=".$twitteruser."&count=".$notweets);
//encoding to JSON
echo json_encode($tweets);
?>
