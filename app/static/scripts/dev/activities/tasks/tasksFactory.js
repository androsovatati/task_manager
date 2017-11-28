function tasksFactory($http, $q) {
    var factory = {};
    var url = 'http://localhost:3000/api/tasks';

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
        });

        return deferred.promise;
    }

    // создание задачи
    factory.createTask = function(data) {
        var deferred = $q.defer();

        $http.put(url, data).then(function(resp) {
            deferred.resolve(resp.data);
        });

        return deferred.promise;
    }
    
    return factory;
}