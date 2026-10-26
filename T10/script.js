// let notes = [12, 15, 8, 17];

// somme = 0 ;

// for ( let i = 0 ; i < notes.length; i ++){
//     somme = somme + notes[i]
// }

// console.log("somme total :" , somme);


// let notes = [12, 15, 8, 17, 10];
// let nombreValidees = 0;


// for(let i = 0 ; i < notes.length ; i ++ ){
//     if(notes[i] >= 10){
//         nombreValidees++
//     }
// }
// console.log("number des notes valide : " , nombreValidees)




// let mots = ["chat", "ordinateur", "table", "programmation", "js"];
// let motsLongs = 0 ;

// for(let i = 0 ; i < mots.length ; i++){
//     if(mots[i].length > 5){
//         motsLongs++
//     }
// }
// console.log("result : " , motsLongs)


// let nombres = [4, 7, 2, 9, 5, 8];
// let sommePairs = 0 ;

// for (let i = 0 ; i < nombres.length ; i ++){
//     if(nombres[i]% 2 === 0){
//         sommePairs ++
//     }
// }
// console.log(sommePairs)

let panier = [15, 42, 5, 89, 12, 50, 8];
let somme = 0 ;
let chers = 0 ;
let somme_chers = 0 ;
for(let i = 0 ; i < panier.length ; i++){

    somme = somme + panier[i];

    if (panier[i] >= 20){
        chers++
        somme_chers = somme_chers+ panier[i]
    }

}
console.log("somme total :" , somme);
console.log("les number article chers : " , chers)
console.log("la somme article chers : " , somme_chers)


/*
La variable somme doit être déclarée à l’extérieur de la boucle for
pour conserver le total à chaque répétition et pouvoir l’utiliser après la boucle.
*/