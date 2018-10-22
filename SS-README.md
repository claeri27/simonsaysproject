
Simon Says

Description:
The game I’ll be building is a browser iteration of Simon Says. There will be two players: the computer and the human. Initially, the webpage will display six different circular buttons displayed as red, green, blue, pink, grey, and yellow. There will also be a play game button on the screen.

When the player presses the play game button, the computer will press three random buttons. The player must then press the same buttons in the same order. If the player does this correctly, the computer will go again except adding a random additional button. This cycle will continue until the player loses. The screen will then display what level the player got to, and the start game button will change into a reset game button which will restart the game.

Tech:
I plan to build the game using html, css, and javascript. The buttons will be displayed as a grid of buttons and the grid will use flex. 

Potential Issues:
Making the computer choose randomly may be tough. Have to figure out an effective way for it to choose randomly for the initial 3 buttons, then pick randomly every additional time after that. I also have to add multiple animations for each button to adequately display when and where the computer/player is pressing buttons.

Potential Solutions:
I’ll probably have a function that chooses 3 random buttons and sets its picks as a variable for computer choices. Another function will do something similar except only pick one button then push that button choice to the array of computer choices. Then I’ll have to compare an array of user picks to the array of computer picks and if their the same then the player gets to the next level.

Specs:
1. Webpage loads, six colored buttons and a game start button are displayed as well as text that says the name of the game ‘Simon Says’ , the current level ‘Level 1’, and whoever’s turn it is ‘Simon’s turn’ or ‘Player’s Turn’.

2. Player presses game start and the computer’s turn begins and the computer picks 3 random buttons and the animations display which buttons the computer presses.

3. It is now the user’s turn and they must input the same buttons the computer pressed in the same order. If the player picks a button other than what the computer picked, the player loses.

4. If the player picks correctly, the computer will press the same pattern with an additional random button press at the end. It will then be the players turn again.

5. This cycle will continue until the player loses. When the player loses, text will be displayed that says ‘Congratulations (input player name), you got to Level (input level)’. The game start button will then change into a reset game button.
