app.controller('addCtrl', function($rootScope, $http, $location, $scope, $timeout) {
    $scope.success = false;
    $scope.typeOptions = [
        { name: 'Unavailable', value: 'unavail' },
        { name: 'Available', value: 'avail' },
    ];
    $rootScope.adminName = "added by sakib";

    $scope.game = { availability: $scope.typeOptions[0].value };

    var api = "https://web-developer-exam.firebaseio.com/sakib-Kr57W_b-YVvc52AJdps.json";

    $scope.addGame = function() {

        var data = JSON.stringify($scope.game);
        //console.log(data);

        $http.post(api, data).then(function(response) {
            //console.log(response.data);
            //alert("Added Successfully");
            $scope.success = true;
            $rootScope.getAll();
            $timeout(_reset, 2000);
        });
    };

    $scope.refresh = function(){
        $rootScope.getAll();
        location.reload();
    }

    $scope.add = function(number, game) {
        //alert(number);
        var rating;
        switch (number) {
            case 1:
                rating = 1;
                break;
            case 2:
                rating = 2;
                break;
            case 3:
                rating = 3;
                break;
            case 4:
                rating = 4;
                break;
            case 5:
                rating = 5;
                break;
        }
        $scope.game = game;
        $scope.game.rating = rating;
    };

    var _reset = function() {
        $scope.game.name = '';
        $scope.game.owner = '';
        $scope.game.description = '';
        $scope.game.rating = '';
        $scope.game.platform = '';
        $scope.game.image_url = '';
        $scope.game = { availability: $scope.typeOptions[0].value };
        $scope.success = false;
    };
});