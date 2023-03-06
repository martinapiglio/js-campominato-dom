let containerElement = document.getElementById('container');
let playButton = document.getElementById('play-button');
let cellNumber;
let cellPerRow;
const bombNumber = 16;

playButton.addEventListener('click', function() {

    document.getElementById('click-text').style.display = "none";

    let difficulty = document.getElementById('difficulty-level').value;

    if (difficulty == '1') {

        cellNumber = 100;

    } else if (difficulty == '2') {

        cellNumber = 81;

    } else if (difficulty == '3') {

        cellNumber = 49;

    };
    
    cellPerRow = Math.sqrt(cellNumber);   

    let bombs = randomArray(bombNumber, 1, cellNumber);

    console.log(bombs);
    
    for (i = 1; i <= cellNumber; i++) {

        let newSquareElement = createSquare(i);
        
        if (!bombs.includes(i)) {

            newSquareElement.addEventListener('click', function() {
            
                console.log('Hai cliccato la cella ' + newSquareElement.innerText);
                newSquareElement.classList.add('blue');
            
            }); 
        
        } else {
        
            newSquareElement.addEventListener('click', function() {
            
                console.log('Hai cliccato la cella ' + newSquareElement.innerText);
                newSquareElement.classList.add('bomb');
            
            }); 
        
        };

        containerElement.append(newSquareElement);
    };


});




































//---------function: create a square----------------
function createSquare(squareText) {

    let newElement = document.createElement('div');
    newElement.classList.add("square");
    newElement.style.width= "calc(100% / " + cellPerRow + " )";
    newElement.innerText = squareText;

    return newElement;
};   

//---------function: create an array of random numbers----------------
function randomArray(arrayLenght, min, max) {

    const numbersArray = []; //empty array

    while (numbersArray.length < arrayLenght) {

        let randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
        // check to avoid duplicate numbers
        if (!numbersArray.includes(randomNumber)) {
            numbersArray.push(randomNumber);
        };

    };

    return numbersArray;
};