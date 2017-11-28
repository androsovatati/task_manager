function taskCreateDirective(tasksFactory) {
    return {
        scope: {},
        bindToController: {},
        templateUrl: "./static/scripts/dev/components/task-create/task-create.tmpl.html",
        controller: function() {
            var self = this;
            self.storage = tasksFactory;
            self.task = {};

            self.createTask = function() {
                self.storage.createTask(self.task);
            }
        },
        controllerAs: "ctrl"
    }
}