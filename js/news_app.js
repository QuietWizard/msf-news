var myApp = angular.module('myApp', [
  'ngRoute',
  'newsControllers'
]);

myApp.filter('reverse', function () {
    return function (items) {
        return items.reverse();
    };
});

myApp.config(['$routeProvider', function ($routeProvider) {
    $routeProvider.
    when('/list', {
        templateUrl: 'partials/_newsList.html',
        controller: 'ListController'
    }).
    when('/details/:itemId', {
        templateUrl: 'partials/_newsDetails.html',
        controller: 'DetailsController'
    }).
    otherwise({
        redirectTo: '/list'
    });
}]);
