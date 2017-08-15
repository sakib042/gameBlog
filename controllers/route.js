app.config(function($routeProvider) {
    $routeProvider
        .when("/", {
            templateUrl: "views/main.html",
            controller: "mainCtrl"
        })
        .when("/detail/:id", {
            templateUrl: "views/detail.html",
            controller: "detailCtrl"
        })
});