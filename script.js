// Making button opacity to change  
var mouseonbut = document.getElementsByTagName("button");  

for (var i = 0; i < mouseonbut.length; i++) {  
    mouseonbut[i].onmouseover = function () {  
        this.style.opacity = "1";  
    };  

    mouseonbut[i].onmouseout = function () {  
        this.style.opacity = "0.5";  
    };  
}  

// Making images to change  
var userImageChange = document.getElementsByClassName("user")[0];  
var cpuImageChange = document.getElementsByClassName("CPU")[0];  
var buttons = document.querySelectorAll(".selection button");  
var resultDisplay = document.getElementById("result"); // Get the result display element  

buttons[0].onclick = function () {  
    playGame("rock");  
};  

buttons[1].onclick = function () {  
    playGame("paper");  
};  

buttons[2].onclick = function () {  
    playGame("scissors");  
};  

function playGame(userChoice) {  
    // Set both images to the "rock" image for 3 seconds  
    userImageChange.setAttribute("src", "./images/rock.png");  
    cpuImageChange.setAttribute("src", "./images/rock.png"); // Same initial image  

    // Start rotating both images for 3 seconds  
    let rotationInterval = setInterval(() => {  
        rotateImages(); // rotate function  
    }, 500); // Rotate every 500ms  

    // Set timeout for 3 seconds to stop rotation and show results  
    setTimeout(() => {  
        clearInterval(rotationInterval); // Stop the rotation  
        var cpuChoice = setRandomCPUImage(); // Get CPU choice  
        userImageChange.setAttribute("src", `./images/${userChoice}.png`); // Set user final choice  
        determineWinner(userChoice, cpuChoice); // Determine the winner  
    }, 2000); // 2 seconds  
}  

function rotateImages() {  
    // Get the current rotation value  
    let currentRotation = userImageChange.style.transform || 'rotate(0deg)';  
    let newRotation = currentRotation === 'rotate(30deg)' ? 'rotate(0deg)' : 'rotate(30deg)'; // Toggle rotation  
    userImageChange.style.transform = newRotation; // Apply rotation to the user image  
    cpuImageChange.style.transform = newRotation; // Apply rotation to the CPU image  
}  

function setRandomCPUImage() {  
    var images = ["./images/rock.png", "./images/paper.png", "./images/scissors.png"];  
    var choices = ["rock", "paper", "scissors"]; // Corresponding choices  
    var randomNum = Math.floor(Math.random() * images.length);  
    cpuImageChange.setAttribute("src", images[randomNum]);  
    return choices[randomNum];  
}  

// Set text to the winner  
function determineWinner(userChoice, cpuChoice) {  
    console.log(userChoice, cpuChoice);  
    if (userChoice === cpuChoice) {  
        resultDisplay.textContent = "It's a tie!";  
    } else if (  
        (userChoice === "rock" && cpuChoice === "scissors") ||  
        (userChoice === "paper" && cpuChoice === "rock") ||  
        (userChoice === "scissors" && cpuChoice === "paper")  
    ) {  
        resultDisplay.textContent = "You win!";  
    } else {  
        resultDisplay.textContent = "CPU wins!";  
    }  
}