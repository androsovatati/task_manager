var app = angular.module('app', ['ui.router']);

app.controller('AppController', function($scope) {
    var self = this;

    self.name = 'Tanya';
});

app.config(function($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise("/");

    $stateProvider
        .state('calendar', {
            url: "/calendar",
            templateUrl: "static/scripts/dev/components/calendar/calendar.tmpl.html"
        })
        .state('task-list', {
            url: "/task-list",
            templateUrl: "static/scripts/dev/components/task-list/task-list.tmpl.html"
        })
        .state('task', {
            url: "/task",
            templateUrl: "static/scripts/dev/components/task/task.tmpl.html"
        })
});

app.directive('task', taskDirective);