angular
  .module('hero', [])
  .factory('heroService', heroService);

function heroService() {
  var service = {
    getAll: getAll
  };

  function getAll() {
    console.log('hero::heroService::getAll');
    return [];
  }

  return service;
}
