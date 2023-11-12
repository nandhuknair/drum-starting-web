
    


document.querySelectorAll("button")[0].addEventListener("click", function(){


    var audio = new Audio('sounds/tom-1.mp3');
    audio.play();


}); 

document.querySelectorAll("button")[1].addEventListener("click", function(){


    var audio = new Audio('sounds/tom-2.mp3');
    audio.play();


}); 

document.querySelectorAll("button")[2].addEventListener("click", function(){


    var audio = new Audio('sounds/tom-3.mp3');
    audio.play();


}); 

document.querySelectorAll("button")[3].addEventListener("click", function(){


    var audio = new Audio('sounds/tom-4.mp3');
    audio.play();


}); 

document.querySelectorAll("button")[4].addEventListener("click", function(){


    var audio = new Audio('sounds/crash.mp3');
    audio.play();


}); 

document.querySelectorAll("button")[5].addEventListener("click", function(){


    var audio = new Audio('sounds/kick-bass.mp3');
    audio.play();


}); 
document.querySelectorAll("button")[6].addEventListener("click", function(){


    var audio = new Audio('sounds/snare.mp3');
    audio.play();


}); 

document.addEventListener('keydown', function (event) {
    // Map keys to button indices (assuming 1 to 7 for buttons 0 to 6)
    var keyMap = {
        'w': 0,
        'a': 1,
        's': 2,
        'd': 3,
        'j': 4,
        'k': 5,
        '': 6
        // Add more mappings if needed
    };

    var buttonIndex = keyMap[event.key];

    if (buttonIndex !== undefined) {
        // Get the corresponding button
        var button = document.querySelectorAll('button')[buttonIndex];

        // Trigger a click event on the button
        button.click();
    }
});









