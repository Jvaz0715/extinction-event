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

const allDestroy = document.querySelectorAll('.to-destroy');

/*function destroyAll() {
    for (const element of allDestroy) {
        if (element.classList.contains('top-dinos')) {
            element.style.textDecoration = "line-through";
        } else if (element.classList.contains('middle-dinos'){
            element.style.opacity = 0;
        } else if (element.classList.contains('row-images'){
            element.style.width = 0;
        }
    }
}*/

function destroyAll() {
    for (const element of allDestroy) {
        if element.hasClass('top-dinos') {
            element.style.textDecoration = "line-through";
        }
    }
}


button.addEventListener('click', destroyAll);
