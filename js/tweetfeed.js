(function(){
    var app = angular.module('request', []);

    this.tweets = {};

    app.controller('TwitterController', ['$http', function($http){
        this.getTweets = function(tweetsCtrl){
            console.log('Begin getTweets function');
            var request = $http({
                method: "POST",
                url:"get-tweets.php",
                data:{
                    'user':"omarchh",
                    'pass':"strongestPasswordOfTheWorld"
                }
            })
            .success(function(data){
                console.log('Success, se ha realizado el procedimiento con exito');
                tweetsCtrl.tweets = data;
                console.log(tweetsCtrl.tweets);
            }).error(function(){
                console.log('error');
            });
            console.log('Finish function');
        };
    }]);

})();