class Game {
    // Creating an instance of a Game
    constructor(gameTitle, gameGenre, gameCharacters = false) { // Using a default value for gameCharacters if none specified
        this.title = gameTitle;
        this.genre = gameGenre;
        this.characters = gameCharacters;
    }

    // Define methods for the Game class here.
    getTitle() {
        return this.title;
    }
}

// Creating instances of Games:
var myGame1 = new Game("Breath of the Wild","RPG",["Link","Zelda","Ganon","Urbosa"]);
var myGame2 = new Game("Tetris","Puzzle",["Mr. Tetronimo", "T block"]);

console.log(myGame1.getTitle());
console.log(myGame1.genre); // Can access a property of this game directly