function taskDirective() {
    return {
        scope: {},
        bindToController: {
            name: "=",
            description: "="
        },
        templateUrl: "./static/scripts/dev/components/task/task.tmpl.html",
        controller: function() {
            
        },
        controllerAs: "ctrl"
    }
}