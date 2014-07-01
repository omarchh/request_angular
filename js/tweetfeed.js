(function(){
    var app = angular.module('request', []);

    app.controller('TwitterController', ['$http', function($http){
        this.tweets = {};

        this.getTweets = function(){
            console.log('Begin getTweets function');

            var request = $http({
                method: "POST",
                url:"get-tweets.php",
                data:{
                    'user':"usuario1234",
                    'pass':"password1234"
                }
            })            
            .success(function(data){
                console.log('success');
                this.tweets = data;
                console.log(this.tweets[0].text);
                console.log(this.tweets[0].created_at);
                console.log(this.tweets[0].user.name);
                console.log(this.tweets[0].source);
            }).error(function(){
                console.log('error');
            });
            console.log('Finish function');
        };
    }]);

})();