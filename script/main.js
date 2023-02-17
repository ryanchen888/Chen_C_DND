let theButtons = document.querySelectorAll("#buttonHolder img"),
    theHeading = document.querySelector("#headLine h1"),
    puzzleBoard = document.querySelector(".puzzle-board"),
    puzzlePieces = document.querySelectorAll(".puzzle-pieces img"),
    dropZones = document.querySelectorAll('.drop-zone'),
    draggedPiece;

function changeBGImage() {
    puzzleBoard.style.backgroundImage = `url(images/backGround${this.id}.jpg)`;
    
    // Remove puzzle pieces from drop zones
    dropZones.forEach(zone => {
        while (zone.children.length > 0) {
            puzzleBoard.appendChild(zone.children[0]);
        }
    });
}

function handleStartDrag() { 
    console.log('started dragging this piece:', this);
    draggedPiece = this;
}

function handleDragOver(e) { 
    e.preventDefault(); 
    console.log('dragged over me'); 
}

function handleDrop(e) { 
    e.preventDefault();
    console.log('dropped something on me');
    
    if (this.children.length > 0) {
        // if the drop zone already has a puzzle piece, return without doing anything
        return;
    }
    
    this.appendChild(draggedPiece);
}

theButtons.forEach(button => button.addEventListener("click", changeBGImage));
puzzlePieces.forEach(piece => piece.addEventListener("dragstart", handleStartDrag));
dropZones.forEach(zone => zone.addEventListener("dragover", handleDragOver));
dropZones.forEach(zone => zone.addEventListener("drop", handleDrop));
