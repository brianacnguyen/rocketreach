 angular.module('rocketreach-app.directives', [])

.directive('post', function () {
    return {
        restrict: 'E',
        templateUrl: 'directives/post/post.html',
        replace: true,
        scope: {
            data: '=data'
        }
    }
});
