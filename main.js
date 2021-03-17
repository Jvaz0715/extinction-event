// create an array to target all of the top-dinos
const topDinos = document.querySelectorAll('.top-dinos');


//loop through them to add click, strikethrough
for (const dino of topDinos) {
    dino.addEventListener('click', function (event) {
        const dinoClicked = event.target;
        dinoClicked.style.textDecoration = "line-through";  
    })
}

// create an array to target middle-dinps
const middleDinos = document.querySelectorAll('.middle-dinos');

//loop through them to add click, opacity 0;
for (const dino of middleDinos) {
    dino.addEventListener('click', function (event) {
        const dinoClicked = event.target;
            dinoClicked.style.opacity = 0;  
    })
}


// create an array to target dino images
const dinoImages = document.querySelectorAll('#row');

// loop through and hide dino images clicked

for (const image of dinoImages) {
    image.addEventListener('click', function(event) {
        const imageClicked = event.target;
        imageClicked.style.width = 0;
    })
}

// create an array to target all elements?

const button = document.querySelector('button');

function destroyAll() {
    for (const dino of topDinos) {
        dino.style.textDecoration = "line-through";  
    }

    for (const dino of middleDinos) {
        dino.style.opacity = 0;  
    }

    for (const image of dinoImages) {  
        image.style.width = 0;
    }
}

button.addEventListener('click', destroyAll);
