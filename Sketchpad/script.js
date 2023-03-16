makeGrid(16);

let colorChosen = "black";

function changeColor (color) {
    colorChosen = color;
}

function newGrid(){
    let size = prompt("Enter the number of squares per side (max 100)");
    if(size > 100){
        size = 100;
    } else if(size <= 0){
        size = 1;
    }
    const container = document.querySelector("#gridContainer");
    while(container.hasChildNodes()){
        container.removeChild(container.firstChild);
    }
    makeGrid(size);
}

function makeGrid(sideLength){
    const container = document.querySelector("#gridContainer");
    for(let i = 0; i < sideLength; i++){
        const columnHead = document.createElement("div");
        columnHead.className = "head";
        for(let j = 0; j < sideLength; j++){
            const gridSquare = document.createElement("div");
            gridSquare.className = "normal";
            gridSquare.draggable = false;
            gridSquare.addEventListener("mouseover", () => {
                gridSquare.style.backgroundColor = colorChosen;
            });
            columnHead.appendChild(gridSquare);
        }
        container.appendChild(columnHead);
    }
}
