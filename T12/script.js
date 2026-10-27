// let notes = [12, 15, 8, 17, 10, 14];

// let somme = 0 ;
// let max = notes[0];
// let min = notes[0];
// let nbvalidees = 0 ;
// let sommeValidees = 0;


// for(let i = 0 ; i < notes.length ; i ++){
//     let note = notes[i]

//     somme = somme + note ;
//     if(max < note) max = note ;
//     if(min > note) min = note ;

//     if(note >= 10){
//         nbvalidees ++
//         sommeValidees = sommeValidees + note ;
//     }
// }

// let moyenne = somme / notes.length ;
// let moyennevalidees = sommeValidees / nbvalidees ;


// console.log("moyenne generale :" , moyenne.toFixed(2))
// console.log("max :" , max , "min :" , min)
// console.log("moyenne des validées : " , moyennevalidees)

let ventes = [110, 75, 150, 180, 90, 130, 100, 160];
 let Exceptionnelle = 0 ; 

let somme = 0;
let min = ventes[0];
let max = ventes[0];
let totalExceptionnelle = 0;



 for(let i = 0 ; i < ventes.length ; i ++){
   let vent = ventes[i];
   somme = somme + vent

   if(vent > max)max = vent
   if(vent < min)min = vent

    if(vent >= 130){
        Exceptionnelle ++
        totalExceptionnelle = totalExceptionnelle + vent

    }
 }
 console.log(ventes.length , Exceptionnelle , somme , max , min , totalExceptionnelle)
 