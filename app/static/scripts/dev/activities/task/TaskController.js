function TaskController(tasksFactory, $stateParams) {
    var self = this;

    self.storage = tasksFactory;
    self.id = $stateParams.taskId;

    self.storage.getTaskById(self.id).then(function(task) {
        self.task = task;
    });

    self.saveChanges = function() {
        console.log(self.task);
    }
}