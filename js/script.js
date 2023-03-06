let containerElement = document.getElementById('container');
let playButton = document.getElementById('play-button');
let cellNumber;
let cellPerRow;

const bombNumber = 16;

let clickedCells = [];

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

                newSquareElement.classList.add('blue');

                if (!clickedCells.includes(parseInt(newSquareElement.innerText)))  {

                    clickedCells.push(parseInt(newSquareElement.innerText));

                    //CHECK
                    console.log('cella normale');
                    console.log(clickedCells);
                    //CHECK    

                };

                if (clickedCells.length == (cellNumber - bombNumber)) {

                    alert('Sei riuscito a evitare tutte le bombe! Hai vinto!');
                    
                }

            });
            
        } else {

            newSquareElement.addEventListener('click', function() {

                newSquareElement.classList.add('bomb');
                
                alert('Hai cliccato su una bomba! Hai perso!');

                let cells = document.querySelectorAll('.square');

                    for (let i = 0; i < cells.length; i++) {

                        if (bombs.includes(i +1)) {

                            cells[i].classList.add('bomb');

                        }
                    }

                let outputElement = document.createElement('div');
                outputElement.innerText = "Hai totalizzato " + clickedCells.length + " punto/i.";
                outputElement.classList.add('output');
                containerElement.append(outputElement);

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