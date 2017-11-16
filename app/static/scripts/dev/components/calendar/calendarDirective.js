function taskDirective() {
    return {
        scope: {},
        bindToController: {
            name: "=",
            description: "="
        },
        templateUrl: "./static/scripts/dev/components/calendar/calendar.tmpl.html",
        controller: function() {
            
        },
        controllerAs: "ctrl"
    }
}