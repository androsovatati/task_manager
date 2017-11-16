function taskDirective() {
    return {
        scope: {},
        bindToController: {
            name: "=",
            description: "="
        },
        templateUrl: "./static/scripts/dev/components/task-list/task-list.tmpl.html",
        controller: function() {
            
        },
        controllerAs: "ctrl"
    }
}