function TasksController(tasksFactory) {
    var self = this;

    self.storage = tasksFactory;
    
    tasksFactory.getTasks();
}