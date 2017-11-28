function taskListDirective() {
    return {
        scope: {},
        bindToController: {
            tasks: '='
        },
        templateUrl: "./static/scripts/dev/components/task-list/task-list.tmpl.html",
        controller: function() {
            var self = this;

        },
        controllerAs: "ctrl"
    }
}