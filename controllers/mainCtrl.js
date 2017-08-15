app.controller('mainCtrl', function($rootScope, $scope, $http, $location, $timeout) {
    $scope.currentPage = 1;
    $scope.itemsPerPage = 5;
    $scope.games = [];
    $scope.keyArray = [];
    $scope.parsedData = [];
    $scope.adminName = $rootScope.adminName;

    $scope.listMessage = null;
    $scope.deleting = null;

    $rootScope.getAll = function() {
        var api = "https://web-developer-exam.firebaseio.com/sakib-Kr57W_b-YVvc52AJdps.json";
        $http.get(api).then(function(response) {
            var stringfyData = JSON.stringify(response.data);

            //getKey(response.data);
            //console.log(stringfyData);
            //console.log($scope.keyArray);

            var parsedData = JSON.parse(stringfyData);
            //console.log(parsedData);
            var arr = [];
            for (var x in parsedData) {
                $scope.keyArray.push(x);
                arr.push(parsedData[x]);
            }
            //console.log(arr);
            $scope.games = arr;

            $scope.parsedData = parsedData;
        }, function(reason){
            $scope.listMessage = reason.statusText;
        });
    };

    $scope.doReset = function() {
        $scope.query = '';
    };

    // var getKey = function(data) {
    //     $scope.keyArray = [];
    //     for (var key in data) {
    //         $scope.keyArray.push(key);
    //     }
    // };

    $rootScope.getAll();

    $scope.deleteConfirmation = 0;
    $scope.confirmDelete = function(id){
        //alert(id);
        if($scope.deleteConfirmation == 0){
            $scope.deleteConfirmation = id;
        }else{
            $scope.deleteConfirmation = 0;
        }
    }

    $scope.delete = function(id) {
        var key = $scope.keyArray[id - 1];
        //alert($scope.keyArray[id]);

        var api2 = "https://web-developer-exam.firebaseio.com/sakib-Kr57W_b-YVvc52AJdps/" + key + ".json";
        $http.delete(api2).then(function(response) {
            //console.log(response.status);
            $timeout(load, 1000);
            $scope.deleting = "Deleting..";
        });
    };

    var load = function(){

        $scope.deleteConfirmation = 0;
        $scope.deleting = null;
        $rootScope.getAll();
    }

    $scope.detail = function(id) {
        //alert(id);
        $rootScope.getAll();
        var key = $scope.keyArray[id - 1];
        $scope.oneGame = $scope.parsedData[key];

        // var key = $scope.keyArray[id - 1];
        // var api2 = "https://web-developer-exam.firebaseio.com/sakib-Kr57W_b-YVvc52AJdps/" + key + ".json";
        // $http.get(api2).then(function(response) {
        //     //console.log(response.data);
        //     $scope.oneGame = response.data;
        // });
    };
});