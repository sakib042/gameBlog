app.controller('detailCtrl', function($scope, $http, $location, $routeParams) {

    // $scope.detail = function() {
    //alert(id);
    var api = "https://web-developer-exam.firebaseio.com/sakib-Kr57W_b-YVvc52AJdps/" + $routeParams.id + ".json";
    $http.get(api).then(function(response) {
        console.log(response);
        $scope.oneGame = response;
        //console.log($scope.oneGame);
        // $location.url('/detail/' + $routeParams.id);
    });
    // }
});