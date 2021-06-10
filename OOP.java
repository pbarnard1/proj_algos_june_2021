public class Game { // This code would be in a file called Game.java (so don't compile this as is due to the name not matching)
    private String title;
    private String genre;

    public Game() { // Empty constructor, so we'll use default values
        this.title = "Untitled Goose Game";
        this.genre = "Random nothingness";
    }

    public Game(String myTitle, String myGenre) { // Supply our own titles and genres
        this.title = myTitle;
        this.genre = myGenre;
    }
}

/* Inside the main method in another file:
Game my_game = new Game();
Game my_game2 = new Game("Mario Party","Chaos");
*/