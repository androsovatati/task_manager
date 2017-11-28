function tasksFactory($http, $q) {
    var factory = {};
    var url = 'http://localhost:4000/api/tasks';

    // получение списка задач
    factory.getTasks = function() {
        $http.get(url).then(function(resp) {
            factory.tasks = resp.data;
        });
    }

    // получение задачи по id
    factory.getTaskById = function(id) {
        var deferred = $q.defer();
        
        $http.get(url + '/' + id).then(function(resp) {
            deferred.resolve(resp.data);
            factory.getTasks();
        });

        return deferred.promise;
    }

    // редактирование задачи
    factory.updateTask = function(data) {
        var deferred = $q.defer();

        $http.put(url, data).then(function(resp) {
            deferred.resolve(resp.data);
            factory.getTasks();
        });

        return deferred.promise;
    }

    // удаление задачи
    factory.deleteTask = function(id) {
        var deferred = $q.defer();

        $http.delete(url + '/' + id).then(function(resp) {
            deferred.resolve(resp.data);
            factory.getTasks();
        });

        return deferred.promise;
    }

    // создание задачи
    factory.createTask = function(data) {
        var deferred = $q.defer();

        $http.post(url, data).then(function(resp) {
            deferred.resolve(resp.data);
            factory.getTasks();
        });

        return deferred.promise;
    }
    
    return factory;
}