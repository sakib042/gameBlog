app.controller('addCtrl', function($http, $location, $scope, $timeout) {
    $scope.success = false;
    $scope.typeOptions = [
        { name: 'Unavailable', value: 'u' },
        { name: 'Available', value: 'a' },
    ];

    $scope.game = { availability: $scope.typeOptions[0].value };

    var api = "https://web-developer-exam.firebaseio.com/sakib-Kr57W_b-YVvc52AJdps.json";

    $scope.addGame = function() {

        var data = JSON.stringify($scope.game);
        console.log(data);

        $http.post(api, data).then(function(response) {
            console.log(response);
            alert("Added Successfully");
            $scope.success = true;
            refresh();
        });
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
    }


    var refresh = function() {
        $http.get(api).then(function(response) {
            //console.log(response.data);
            $scope.games = response.data;
        });
    }
});