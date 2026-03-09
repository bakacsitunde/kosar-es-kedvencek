// function szamokatmegad(){
//     let numbers=[]

//     while(numbers.length !=4 ){
//         let szam=prompt("Adj meg egy számot")
//         numbers.push(szam)
//     }
    
//     return numbers
// }

// let szamok=szamokatmegad()
// console.log(szamok);

// function duplazas(tomb){
//     let ujtomb=[]
//     for (let i=0; i < tomb.length;i++){
//         let szam=Number(tomb[i])*2
//         ujtomb.push(szam)
//     }
//     return ujtomb

// }
// let newarray= duplazas(szamok)
// console.log(newarray);

// function szamokatmegad(){
//     let szavak=[]

//     while(szavak.length !=3 ){
//         let szo=prompt("Adj meg egy szót")
//         szavak.push(szo)
//     }
//     return szavak
// }
// let szavaktomb=szamokatmegad()
// function leghosszabbszo(sztomb){
//     let lhosszabb=0
//     let lhszo=""

//     for (let i=0;i<sztomb.length;i++){
//         if(sztomb[i].length>lhosszabb){
//             lhosszabb=sztomb[i].length
//             lhszo=sztomb[i]
//         }
//     }
//     return lhosszabb,lhszo

// }
// let leghosszabb=leghosszabbszo(szavaktomb)

// function kiir(lszo,lszh){
//     console.log("Leghosszabb szó: " + lszo + )
// }
// kiir(leghosszabb)