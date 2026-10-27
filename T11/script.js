// let nombres = [12, 8, 15, 4, 19];
// let recherche = 15;
// let position = -1; // -1 signifie "non trouvé"


// for (let i = 0 ; i < nombres.length ; i++){
//     if(nombres[i] === recherche){
//         position = i 
//         break
//     }
// }
// if (position != -1){
//     console.log("index :" , position)
// }
// else{
//     console.log("valeur introvable")
// }






// let nombres = [12, 8, 15, 4, 19];

// let maximum = nombres[0];
// let positionMax = 0 ;

// for(let i = 1 ; i < nombres.length ; i++){
//     if(nombres[i] > maximum){
//         maximum = nombres[i];
//         positionMax = i ;
//     }
// }

// console.log("le plus grand est :" , maximum);
// console.log("il est a l index :" , positionMax)




// let nombers = [12 , 8 , 15 , 4 , 19];
// let minimum = nombers[0];

// for (let i = 1 ; i< nombers.length ; i++){
//     if(nombers[i] < minimum){
//         minimum = nombers[i] ;
//     }
// }
// console.log("le plus petit est :" , minimum)






// let prenoms = ["Ali", "Sara", "Yassine", "Nadia", "Karim"];

// let recherche = "Nadia"
// let position = -1 ;


// for(let i = 0 ; i < prenoms.length ; i++){
//     if(prenoms[i] === recherche){
//         position = i ;
//         break
//     }
// }
// if( position != -1){
//     console.log(recherche ,"se trouve a l index" , position)

// }
// else{
//     console.log("prenom introuvable")
// }



// let notes = [12, 17, 9, 14, 18, 11];
// let maximum = notes[0];
// for(let i = 1 ; i < notes.length ; i++){
//     if(notes[i] > maximum){
//         maximum = notes[i];
//     }
// }
// let minimum = notes[0]
// for(let a = 0 ; a < notes.length ; a++){
//     if(notes[a] < minimum){
//         minimum = notes[a];
//     }
// }
// console.log("le plus grand est :" , maximum);
// console.log("le plus putit est :" , minimum);




let nombres = [23, 15, 42, 9, 31, 18, 42, 5];

let maximum = nombres[0];
let position = 0 ;

for (let i = 1 ; i < nombres.length ; i ++){
    if(nombres[i] > maximum ){
        maximum = nombres[i]
        position = i ;
    }
}

console.log("nombre maximum :" , maximum , "index :", position) ;

let minimum = nombres[0];
let posiionminimum = 0 ;

for(let a = 0 ; a < nombres.length ; a++){
    if(nombres[a] < minimum ){
        minimum = nombres[a]
        posiionminimum = a ;
    }
}
console.log("nomber minimum c est :" , minimum , "index :" , posiionminimum);



let recherch = 31 ;
let pos = -1 ;


for(let y = 0 ; y < nombres.length ; y ++){
    if(recherch === nombres[y]){
        position = y ;
    }
}
console.log("le nomber " , recherch , " est présente dans le tableau.")


// On initialise position à -1 pour indiquer que l’élément recherché n’a pas encore été trouvé dans le tableau.