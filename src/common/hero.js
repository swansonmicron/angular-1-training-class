angular
  .module('hero', [])
  .factory('heroService', heroService);

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
    
function heroService() {
  var service = {
    getAll: getAll
  };



  function getAll() {
     
    return heroes;
  }

  return service;
}
