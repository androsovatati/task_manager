function taskListDirective(tasksFactory) {
    return {
        scope: {},
        bindToController: {
            tasks: '='
        },
        templateUrl: './static/scripts/dev/components/task-list/task-list.tmpl.html',
        controller: function() {
            var self = this;
            self.storage = tasksFactory;

            self.removeTask = function(id) {
                self.storage.deleteTask(id);
                tasksFactory.getTasks();
            }

        },
        controllerAs: 'ctrl'
    }
}