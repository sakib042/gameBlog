app.controller('mainCtrl', function($scope, $http, $location, $timeout) {
    var getAll = function() {
        $scope.games = [];
        var api = "https://web-developer-exam.firebaseio.com/sakib-Kr57W_b-YVvc52AJdps.json";
        $http.get(api).then(function(response) {
            $scope.games = response.data;
            //console.log($scope.games);
        });
    }

    getAll();

    $scope.delete = function(id) {
        var api2 = "https://web-developer-exam.firebaseio.com/sakib-Kr57W_b-YVvc52AJdps/" + id + ".json";
        $http.delete(api2).then(function(response) {
            //console.log(response.status);
            getAll();
        });
    }

    $scope.detail = function(id) {
        var api2 = "https://web-developer-exam.firebaseio.com/sakib-Kr57W_b-YVvc52AJdps/" + id + ".json";
        $http.get(api2).then(function(response) {
            //console.log(response.data);
            $scope.oneGame = response.data;
        });
    }
});