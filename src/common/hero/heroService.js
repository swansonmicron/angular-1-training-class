angular
  .module('heroService', [
  ])
  .factory('heroService', heroService);

function heroService() {
  
  var heroes = [
    {
      id: 0,
      name: 'Luke Skywalker',
      imageUrl: 'images/luke.png',
      power: 9000,
      affiliations: ['Jedi', 'Rebel'],
      light: true
    },
    {
      id: 1,
      name: 'R2D2',
      imageUrl: 'images/r2d2.png',
      power: 2000,
      affiliations: ['Droid', 'Rebel'],
      light: true
    },
    {
      id: 2,
      name: 'Chewie',
      imageUrl: 'images/chewie.png',
      power: 6000,
      affiliations: ['Scoundrel', 'Rebel'],
      light: true
    },
    {
      id: 3,
      name: 'Darth Maul',
      imageUrl: 'images/darthMaul.png',
      power: 8000,
      affiliations: ['Sith'],
      light: false
    },
    {
      id: 4,
      name: 'Darth Vader',
      imageUrl: 'images/darthVader.png',
      power: 10000,
      affiliations: ['Sith', 'Empire'],
      light: false
    },
    {
      id: 5,
      name: 'Jango Fett',
      imageUrl: 'images/jangoFett.png',
      power: 7000,
      affiliations: ['Bounty Hunter', 'Mandalorian'],
      light: false
    },
  ];

  var service = {
    getAll: getAll,
    get: get,
  };

  function getAll() {
    console.log('hero::heroService::getAll');
    return heroes;
  }

  function get(id) {
    var h = heroes.filter(function(hero) {
      return hero.id === id;
    });
    return h[0];
  }

  return service;
}
