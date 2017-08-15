app.config(function($routeProvider, $locationProvider) {
    //$locationProvider
    //    .html5Mode({
    //        enabled: true,
    //        requireBase: false
    //    });

    $routeProvider
        .when("/", {
            templateUrl: "views/main.html",
            controller: "mainCtrl"
        });
});