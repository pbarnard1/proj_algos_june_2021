class Game(): # Define a game class
    def __init__(self, game_title, genre_name, list_chars):
        self.title = game_title
        self.genre = genre_name
        self.characters = list_chars

    # Methods for the Game class go here.
    def printTitle(self): 
        print(self.title)
        return self

# Create two instances of a game
my_game = Game("Breath of the Wild", "RPG", ["Link","Zelda","Ganon"])
my_game2 = Game("Randomness","Void",["Chicken", "Mr. Null", "Narrator"])

my_game.printTitle()


