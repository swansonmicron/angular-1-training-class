angular.module('squadService', [])
.factory('squadService', squadService);

function squadService() {
    var heroes = [];
    var numMaxHeroes = 4;

    var service = {
        getAll: getAll,
        clearAll: clearAll,
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
        return heroes;
    }

    /**
     * Clear the list of heroes
     */
    function clearAll() {
        heroes = [];
    }

    /**
     * Add a hero to the squad
     * 
     * @param {any} hero
     */
    function addHero(hero) {
        heroes.push(hero);
    }

    /**
     * Remove a hero from the squad
     * 
     * @param {any} hero
     */
    function removeHero(hero) {
        heroes = heroes.filter(function(squadHero) {
            return !(squadHero === hero);
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
        return (heroes.length === numMaxHeroes);
    }

    return service;
}