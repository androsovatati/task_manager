function TasksController(tasksFactory) {
    var self = this;

    self.storage = tasksFactory;
    self.createTask = false;
    
    tasksFactory.getTasks();
}