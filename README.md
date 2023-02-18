# Chen_C_DND

# Puzzle Game Project

The JavaScript code for the project is responsible for handling the game logic, including:

    Loading and displaying the puzzle pieces on the board
    Allowing users to drag and drop puzzle pieces onto the board
    Preventing users from dragging more than one puzzle piece into a drop zone at a time
    Allowing users to choose from different background images for the puzzle
    Shuffling the puzzle pieces and resetting the game when the user clicks the reset button

# Bug-1 : Shoudn`t drag and drop more than one puzzle piece into a drop zone:
To fix the issue of being able to drag and drop more than one puzzle piece into a drop zone, we need to update the handleDrop function to check if the drop zone already has a puzzle piece before appending the dragged piece. If the drop zone already has a puzzle piece, we should return without doing anything.

# Bug-2 : Problem with pieces appearing in the drop zones on reset/choosing a new puzzle:
To fix the issue of puzzle pieces remaining in the drop zones after resetting or choosing a new puzzle, we need to update the code to remove or reparent the puzzle pieces in the drop zones.

One way to achieve this is to loop through the drop zones and remove any child nodes (puzzle pieces) they contain when resetting or choosing a new puzzle. We can do this by updating the changeBGImage function to include the following code.