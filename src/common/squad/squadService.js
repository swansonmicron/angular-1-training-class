angular.module('squadService', [])
.factory('squadService', squadService);

function squadService() {

    var numMaxHeroes = 4;

    var service = {
        heroes: [], // Immutable array
        getAll: getAll,
        clearAll: clearAll,
        contains: contains,
        addHero: addHero,
        removeHero: removeHero,
        getMaxHeroes: getMaxHeroes,
        setMaxHeroes: setMaxHeroes,
        isFull: isFull
    };

    /**
     * Return an array of heroes
     */
    function getAll() {
        return service.heroes;
    }

    /**
     * Clear the list of heroes
     */
    function clearAll() {
        service.heroes = [];
    }

    /**
     * Does the squad contain this hero
     * 
     * @param {any} hero
     * @returns {boolean} True if hero in squad, otherwise false
     */
    function contains(hero) {
        for (var i = 0; i < service.heroes.length; i++) {
            if (service.heroes[i] === hero) {
                return true;
            }
        }
        return false;
    }

    /**
     * Add a hero to the squad
     * 
     * @param {any} hero
     */
    function addHero(hero) {
        // make sure hero is not already in squad
        if (!service.contains(hero) && !service.isFull()) {
            service.heroes = service.heroes.concat(hero);
        }
    }

    /**
     * Remove a hero from the squad
     * 
     * @param {any} hero
     */
    function removeHero(hero) {
        // find hero and remove from array
        service.heroes = service.heroes.filter(function(heroItem) {
            return !(heroItem === hero);
        });
    }

    /**
     * Get the maximum number of heroes in a squad
     * 
     * @returns {integer} Number of maximum heroes in a squad
     */
    function getMaxHeroes() {
        return numMaxHeroes;
    }

    /**
     * Set the maximum number of heroes
     * 
     * @param {integer} numHeroes
     */
    function setMaxHeroes(numHeroes) {
        numMaxHeroes = numHeroes;
    }

    /**
     * Return true if squad is full
     * 
     * @returns {boolean} True if squad is full, false if not
     */
    function isFull() {
        return (service.heroes.length === numMaxHeroes);
    }

    return service;
}