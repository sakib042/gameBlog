var app = angular.module("myApp", ["ngRoute", "angularUtils.directives.dirPagination"]);

// app.factory('ApiService', function($http) {
//     return {
//         getAll: function(api) {
//             return $http.get(api)
//                 .then(function(data) {
//                     return data.data;
//                 });

//         },
//         getOne: function(api, id) {
//             return $http.get(api + id)
//                 .then(function(data) {
//                     return data.data;
//                 });
//         },
//         update: function(api, id, data) {
//             //console.log(data);
//             return $http.put(api + id, data)
//                 .then(function(data) {
//                     //console.log(data.data);
//                     return data.data;
//                 });
//         },
//         save: function(api, data) {
//             //console.log(data);
//             return $http.post(api, data)
//                 .then(function(data) {
//                     //console.log(data.data);
//                     return data.data;
//                 });
//         }
//     }
// });

// app.controller('RepeatController', function RepeatController($scope) {
//     $scope.pageSize = 5;
//     $scope.currentPage = 1;

//     alert($scope.currentPage);

//     $scope.number = ($scope.$index + 1) + ($scope.currentPage - 1) * $scope.pageSize;

// });