var app = angular.module('app', ['ui.router']);

app.config(function($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise("/");

    $stateProvider
        .state('calendar', {
            url: "/calendar",
            templateUrl: "static/scripts/dev/activities/calendar/calendar.tmpl.html",
            controller: "CalendarController",
            controllerAs: "ctrl"
        })
        .state('tasks', {
            url: "/tasks",
            templateUrl: "static/scripts/dev/activities/tasks/tasks.tmpl.html",
            controller: "TasksController",
            controllerAs: "ctrl"
        })
        .state('task', {
            url: "/tasks/:taskId",
            templateUrl: "static/scripts/dev/activities/task/task.tmpl.html",
            controller: "TaskController",
            controllerAs: "ctrl"
        })
});

app.controller('TasksController', TasksController)
    .controller('TaskController', TaskController)
    .controller('CalendarController', CalendarController);

app.factory('tasksFactory', tasksFactory);

app.directive('taskList', taskListDirective);
app.directive('taskCreate', taskCreateDirective);

