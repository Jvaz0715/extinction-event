// create an array to target all of the top-dinos
const topDinos = document.querySelectorAll('.top-dinos');


//loop through them to add click, strikethrough
for (const dino of topDinos) {
    dino.addEventListener('click', function (event) {
        const dinoClicked = event.target;
        dinoClicked.style.textDecoration = "line-through";  
    })
}

// create an array to target middle-dinos
const middleDinos = document.querySelectorAll('.middle-dinos');

//loop through them to add click, opacity 0;
for (const dino of middleDinos) {
    dino.addEventListener('click', function (event) {
        const dinoClicked = event.target;
            dinoClicked.style.opacity = 0;  
    })
}


// create an array to target dino images
const dinoImages = document.querySelectorAll('img');

// loop through and hide dino images clicked

for (const image of dinoImages) {
    image.addEventListener('click', function(event) {
        const imageClicked = event.target;
        imageClicked.style.width = 0;
    })
}

//===========================================================

// create an array to target all elements?
// click event will effect each loop differently

const button = document.querySelector('button');



function destroyOne() {
    for (const dino of topDinos) {
        dino.style.textDecoration = "line-through";  
    }
}
function destroyTwo(){
    for (const dino of middleDinos) {
        dino.style.opacity = 0;  
    }
}
    
function destroyThree(){
    for (const image of dinoImages) {  
        image.style.width = 0;
    }
}

button.addEventListener('click', function (){
    destroyOne();
    destroyTwo();
    destroyThree();
})

/*function destroyAll() {
    destroyOne();
    destroyTwo();
    destroyThree();
}*/



/*function destroyAll() {
    for (const dino of topDinos) {
        dino.style.textDecoration = "line-through";  
    }
    for (const dino of middleDinos) {
        dino.style.opacity = 0;  
    }
    for (const image of dinoImages) {  
        image.style.width = 0;
    }
}*/

/*button.addEventListener('click', destroyOne)
button.addEventListener('click', destroyTwo)
//the bottom event listener DOES NOT WORK
button.addEventListener('click', destroyThree())*/
