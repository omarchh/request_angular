// JQuery Twitter Feed. Coded by www.webdevdoor.com (2012) and modified from https://twitter.com/javascripts/blogger.js
$(document).ready(function () {
 
    var displaylimit = 50;
    var twitterprofile = "FutApp";
    var screenname = "Twitter";
    var showdirecttweets = false;
    var showretweets = true;
    var showtweetlinks = true;
    var showprofilepic = true;
 
    var headerHTML = '';
    var loadingHTML = '';
   
    loadingHTML += '<div id="loading-container"><img src="images/ajax-loader.gif" width="32" height="32" alt="tweet loader" /></div>';
 
    $('#twitter-feed').html(loadingHTML);
 
    $.getJSON('twitter/get-tweets.php',
        function(feeds) {
            //alert(feeds);
            var feedHTML = '';
            var displayCounter = 1;
            for (var i=0; i<feeds.length; i++) {
                var tweetscreenname = feeds[i].user.name;
                var tweetusername = feeds[i].user.screen_name;
                var profileimage = feeds[i].user.profile_image_url_https;
                var status = feeds[i].text;
                var isaretweet = false;
                var isdirect = false;
                var tweetid = feeds[i].id_str;
 
                //If the tweet has been retweeted, get the profile pic of the tweeter
                if(typeof feeds[i].retweeted_status != 'undefined'){
                   profileimage = feeds[i].retweeted_status.user.profile_image_url_https;
                   tweetscreenname = feeds[i].retweeted_status.user.name;
                   tweetusername = feeds[i].retweeted_status.user.screen_name;
                   tweetid = feeds[i].retweeted_status.id_str
                   isaretweet = true;
                 };
 
                 //Check to see if the tweet is a direct message
                 if (feeds[i].text.substr(0,1) == "@") {
                     isdirect = true;
                 }
 
                //console.log(feeds[i]);
 
                 if (((showretweets == true) || ((isaretweet == false) && (showretweets == false))) && ((showdirecttweets == true) || ((showdirecttweets == false) && (isdirect == false)))) {
                    if ((feeds[i].text.length > 1) && (displayCounter <= displaylimit)) {
                        if (showtweetlinks == true) {
                            status = addlinks(status);
                        }
 
                        if (displayCounter == 1) {
                            feedHTML += headerHTML;
                        }
 
                        feedHTML += '<div class="row feed">';
                        feedHTML += '<div class="col-sm-1">'
										+'<a href="https://twitter.com/'+tweetusername+'" target="_blank" >'
											+'<img src="'+profileimage+'"images/twitter-feed-icon.png" width="42" height="42" alt="twitter icon" />'
										+'</a>'
									+'</div>';
                        feedHTML += '<fieldset class="col-sm-11 text-left">'
											+'<strong>'
												+'<a href="https://twitter.com/'+tweetusername+'" class="black">'+tweetscreenname+'</a>'
											+'</strong>&nbsp;&nbsp;&nbsp;'
											+'<a href="https://twitter.com/'+tweetusername+'" target="_blank">@'+tweetusername+'</a>'
										+'<p clas="row">'
											+'<span class="col-sm-11">'
												+status
											+'</span>'
											+'<wbr>Publicado:&nbsp;<a href="https://twitter.com/'+tweetusername+'/status/'+tweetid+'" target="_blank">'
												+relative_time(feeds[i].created_at)
											+'</a>'
										+'</p>'
									+'</fieldset>';
                        feedHTML += '</div><br>';
                        displayCounter++;
                    }
                 }
            }
 
            $('#twitter-feed').html(feedHTML);
    });
 
    //Function modified from Stack Overflow
    function addlinks(data) {
        //Add link to all http:// links within tweets
        data = data.replace(/((https?|s?ftp|ssh)\:\/\/[^"\s\<\>]*[^.,;'">\:\s\<\>\)\]\!])/g, function(url) {
            return '<a href="'+url+'" target="_blank" >'+url+'</a>';
        });
 
        //Add link to @usernames used within tweets
        data = data.replace(/\B@([_a-z0-9]+)/ig, function(reply) {
            return '<a href="http://twitter.com/'+reply.substring(1)+'" style="font-weight:lighter;" target="_blank" >'+reply.charAt(0)+reply.substring(1)+'</a>';
        });
        return data;
    }
 
    function relative_time(time_value) {
      var values = time_value.split(" ");
      time_value = values[1] + " " + values[2] + ", " + values[5] + " " + values[3];
      var parsed_date = Date.parse(time_value);
      var relative_to = (arguments.length > 1) ? arguments[1] : new Date();
      var delta = parseInt((relative_to.getTime() - parsed_date) / 1000);
      var shortdate = time_value.substr(4,2) + " " + time_value.substr(0,3);
      delta = delta + (relative_to.getTimezoneOffset() * 60);
 
      if (delta < 60) {
        return '1m';
      } else if(delta < 120) {
        return '1m';
      } else if(delta < (60*60)) {
        return (parseInt(delta / 60)).toString() + 'm';
      } else if(delta < (120*60)) {
        return '1h';
      } else if(delta < (24*60*60)) {
        return (parseInt(delta / 3600)).toString() + 'h';
      } else if(delta < (48*60*60)) {
        //return '1 day';
        return shortdate;
      } else {
        return shortdate;
      }
    }
 
});