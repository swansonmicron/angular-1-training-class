angular
  .module('heroService', [
  ])
  .factory('heroService', heroService);

function heroService($http, $q) {
  
  var heroes = [];

  var service = {
    getAll: getAll,
    get: get
  };

  function getAll() {
    console.log('hero::heroService::getAll');
    if (heroes.length === 0) {
      // get heroes from data/heroes.json
      // and set heroes to the value returned in the resonse
      return $http.get('data/heroes.json').then(function(res) {
        heroes = res.data;
        return heroes;
      });
    } else {
      // return heroes in a promise
      return $q.when(heroes);
    }
  }

  function get(id) {
    return service.getAll().then(function(heroes) {
      // move filtering here
      var h = heroes.filter(function(hero) {
        return hero.id === id;
      });
      return h[0];
    }); 
  }

  return service;
}
