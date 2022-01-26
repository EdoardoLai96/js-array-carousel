// Dispongo gli array 


const items = [
    'img/01.jpg',
    'img/02.jpg',
    'img/03.jpg',
    'img/04.jpg',
    'img/05.jpg'
];

const title = [
    'Svezia',
    'Svizzera',
    'Gran Bretagna',
    'Germania',
    'Paradise'
];


const text = [
    'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis, magnam dolores dolorum corporis.',
    'Lorem ipsum',
    'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
    'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,',
    'Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,',
];

// Definisco delle variabili vuote per poterle usare nell'incremento nel ciclo for 

let slides = "";

let thumbnails = "";

for (let i = 0; i < items.length; i++){
    
    // Creo una variabile per comodità per riferirmi al valore iesimo dell'array 

    const img = items[i];
    
    // Faccio si che a ogni ripetizione del ciclo for, dentro la variabile vuota slides venga aggiunto un div, con dentro un'immagine ordinata (il cui numero aumenta in progressione )
    
    slides += 
    `<div class="pic-box"> 
    <img  src="${img}">
    </div>`

    // Faccio lo stesso per la parte delle thumbnails 

    thumbnails += 
    `<div class="thumbnail"> 
    <img src="${img}">
    </div>`;

    
}

// Mi riferisco al contenitore dovre andrò a inniettare i div tramite variabile che ho creato prima 

const picContainer = document.getElementById("pic-container");

// Inserisco la serie di div creati nell'html

picContainer.innerHTML = slides;

// Ripeto ma per le thumbnails

const thumbContainer = document.getElementById("thumb-container");

thumbContainer.innerHTML += thumbnails;


// Inizializzo una variabile che mi rende visibile solo la prima immagine trovata 

let prova2 = document.querySelector(".pic-box").classList.add("show");

// Creo una variabile per riferirmi alla freccia di su


const arrowUp = document.getElementById("arrow-up");


// Aggiungo l'evento click alla freccia di su 


arrowUp.addEventListener("click", 

function(){
    
    let attiva = document.querySelector(".thumbnail").classList.add("active");

    //  let rimuovi = document.querySelector(".thumbnail").classList.remove("active");
    
    
   
    }
)



