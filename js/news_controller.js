var newsControllers = angular.module('newsControllers', []);

newsControllers.controller('ListController', ['$scope', '$http', '$sce', function ($scope, $http, $sce) {
    $http.get('json/news.json').success(function (data) {
        $scope.news = data;
        $scope.predicate = '-id';
        $scope.yearTitle = "All";
        $scope.yearFilter = "";
        
        $scope.to_trusted = function (html_code) {
            return $sce.trustAsHtml(html_code);
        }
        $scope.articleFilter = function (filter) {
            if (filter == "All") {
                $scope.yearTitle = "All";
                $scope.yearFilter = "";
            } else {
                $scope.yearTitle = filter;
                $scope.yearFilter = filter;
            }
        }

    });
}]);

newsControllers.controller('DetailsController', ['$scope', '$http', '$routeParams', '$sce', function ($scope, $http, $routeParams, $sce) {
    $http.get('json/news.json').success(function (data) {
        $scope.news = data;
        $scope.whichItem = $routeParams.itemId;
        $scope.title = $scope.news[$scope.whichItem].Title;
        $scope.content = $scope.news[$scope.whichItem].Body;

        $scope.to_trusted = function (html_code) {
            return $sce.trustAsHtml(html_code);
        }

        if ($routeParams.itemId > 0) {
            $scope.nextItem = Number($routeParams.itemId) - 1;
        } else {
            $scope.nextItem = $scope.news.length - 1;
        }

        if ($routeParams.itemId < $scope.news.length - 1) {
            $scope.prevItem = Number($routeParams.itemId) + 1;
        } else {
            $scope.prevItem = 0;
        }

    });
}]);