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
                },
                headers: {'Accept':'application/json'}
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

    app.controller('LoginController', ['$http', function($http){
        this.username="";
        this.password="";

        this.error="No has podido iniciar sesi&oacute;n";

        this.doLogin = function(loginCtrl){
            console.log('Begin login');
            //Necesito terminar este metodo para el login de la pagina
        };
    }]);

})();