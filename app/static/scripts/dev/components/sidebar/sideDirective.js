function sidebarDirective() {
    return {
        scope: {},
        bindToController: {
            'toggle': '='
        },
        templateUrl: './static/scripts/dev/components/sidebar/sidebar.tmpl.html',
        controller: function() {
            var self = this;

            self.items = [
                {
                    name: 'Calendar',
                    icon: 'fa-calendar',
                    link: 'calendar'
                },
                {
                    name: 'Task List',
                    icon: 'fa-list',
                    link: 'tasks'
                }
            ];
        },
        controllerAs: 'ctrl'
    }
}