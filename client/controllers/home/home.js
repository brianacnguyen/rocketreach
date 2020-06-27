angular.module('rocketreach-app.home', [])

.controller('HomeController', function ($scope, $location, $route, Services) {
    $scope.blogId = '';
    $scope.posts = [];
    $scope.loading = false;
    $scope.error = false;
    $scope.getPosts = () => {
        $scope.loading = true;
        $scope.posts = [];
        Services.getPosts($scope.blogId)
        .then(function(posts) {
            $scope.posts = posts;
            $scope.clearErrorAndLoading();
        })
        .catch(function(error) {
            $scope.loading = false;
            $scope.error = true;
        });
    };
    $scope.clearErrorAndLoading = () => {
        $scope.error = false;
        $scope.loading = false;
    }
});
