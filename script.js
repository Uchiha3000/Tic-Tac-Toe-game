console.log("Welcome to Tic tac toe")
let music=new Audio("background.mp3");
let audioTurn=new Audio("turn.wav");
let gameover=new Audio("gameover.wav")
let turn="X"
let wongame=false
// music.play()


// Function to change turn

const changeTurn=()=>{
    return turn==="X"?"0": "X"
}
// Function to check for win

const checkWin = () => {
    let boxtext = document.getElementsByClassName('boxtext');
    let win = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];

    win.forEach(e => {
        if ((boxtext[e[0]].innerText === boxtext[e[1]].innerText) &&
            (boxtext[e[1]].innerText === boxtext[e[2]].innerText) &&
            (boxtext[e[0]].innerText !== "")) {
                
            document.querySelector('.info').innerText = boxtext[e[0]].innerText + " Won ";
            wongame = true;

            // ✅ Change winning boxes to green
            e.forEach(index => {
                document.getElementsByClassName("box")[index].style.backgroundColor = "rgb(52, 235, 204)";
            });

            document.querySelector('.imageBox').getElementsByTagName('img')[0].style.width = "200px";
        }
    });
     // If no winner, check for a draw
     if (!wongame) {
        checkDraw();
    }
};

// Function to check for a draw
const checkDraw = () => {
    let boxtext = document.getElementsByClassName("boxtext");
    let isDraw = true;

    for (let i = 0; i < boxtext.length; i++) {
        if (boxtext[i].innerText === "") {
            isDraw = false;
            break;
        }
    }

    if (isDraw) {
        document.querySelector(".info").innerText = "It's a Draw!";
        wongame = true; // Stops further moves
    }
};


//Game Logic
let boxes=document.getElementsByClassName("box");
Array.from(boxes).forEach(element => {
    let boxtext = element.querySelector('.boxtext');
    element.addEventListener('click', () => {
        if (boxtext.innerText === '' && !wongame) {
            boxtext.innerText = turn;
            
            // ✅ Apply color: X = Blue, O = Red
            boxtext.style.color = (turn === "X") ? "blue" : "red";

            turn = changeTurn();
            audioTurn.play();
            checkWin();  
            
            if (!wongame) {
                document.querySelector(".info").innerText = "Turn for " + turn;
            }
        }
    });
});






//Reset game logic

// document.querySelector('.reset').addEventListener('click', () => { 
//     let boxtexts = document.querySelectorAll('.boxtext');
    
//     boxtexts.forEach(element => {
//         element.innerText = "";
//         element.style.color = ""; // Resetting color
//     });
//     boxes.forEach(box => {
//         box.style.backgroundColor = ""; // ✅ Reset box background color
//     });

//     turn = "X";
//     wongame = false;

//     document.querySelector(".info").innerText = "Turn for " + turn;
//     document.querySelector('.imageBox img').style.width = "0px";
// });


document.querySelector('.reset').addEventListener('click', () => { 
    let boxtexts = document.querySelectorAll('.boxtext');
    let boxes = document.querySelectorAll('.box'); 

    boxtexts.forEach(element => {
        element.innerText = "";
        element.style.color = ""; // ✅ Reset text color
    });

    boxes.forEach(box => {
        box.style.backgroundColor = ""; // ✅ Reset box background color
    });

    turn = "X";
    wongame = false;

    document.querySelector(".info").innerText = "Turn for " + turn;
    document.querySelector('.imageBox img').style.width = "0px";
});
