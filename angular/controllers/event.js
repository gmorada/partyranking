angular.module('event', ['ngRoute', 'facebook', 'resources']).config(function ($routeProvider) {
    'use strict';

    $routeProvider.when('/', {'templateUrl' : 'views/event/list.html', 'controller' : 'EventListController'});
    $routeProvider.when('/evento/:eventId', {'templateUrl' : 'views/event/details.html', 'controller' : 'EventDetailsController'});
}).controller('EventListController', function ($scope, event) {
    'use strict';

    $scope.events = event.query();
}).controller('EventDetailsController', function ($scope, $routeParams, event) {
    'use strict';

    $scope.event = event.get({'eventId' : $routeParams.eventId});
    $scope.people = event.attending({'eventId' : $routeParams.eventId});
});