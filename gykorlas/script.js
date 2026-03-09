//1.feladat 
//homerseklet nevű tömb, kerj bele 5 adatot a felhasználótól, konzolra ugy kell kiirni hogy ami paros volt ahhoz hozza kell adni 3 fokot

// let homerseklet = []; //tomb

// for (let i = 0; i < 5; i++){
//     let szam = Number(prompt("Adj meg egy szamot:"));   //bekeres
//     homerseklet.push(szam);
// }

// let ujhomersekletek = []
// for (let h=0; h < homerseklet.length; h++){
//     if (homerseklet[h] % 2 == 0){
//         let ujhomersekletek= homerseklet[h] + 3;
//         ujhomersekletek.push(ujhomersekletek);
//     }
//     else{
//         ujhomersekletek.push(homerseklet[h]);
//     }
// }
// console.log(homerseklet);
// console.log(ujhomersekletek);


//2.feladat
//kerj be a felhasznalotol szavakat add hozza egy tombhoz, ird ki hogy az adott szo milyen hosszu, vizsgald meg a szavak hosszat es add ossze oket 

// let szavak = [];

// for (let i = 0; i < 3; i++){
//     let szo = prompt("Adj meg egy szót:");
//     szavak.push(szo);
// }

// let szavakHossza = [];
// let osszeg = 0;

// for (let j = 0; j < szavak.length; j++){
//     let hossz = szavak[j].length;
//     szavakHossza.push(hossz);
//     osszeg += hossz;

// }

// console.log("Szavak: " + szavak);
// console.log("Szavak hossza: " + szavakHossza);
// console.log("Szavak hossza összesen: " + osszeg);


// function veletlenSzamok(min,max){
//     return Math.floor(Math.random() * (max - min + 1) + min)
// }
// let szam = veletlenSzamok(1,100);

// let szamok = [];

// while(szamok.length!=szam){
//     let veletlenszam=Math.floor(Math.random()*50)
//     szamok.push(veletlenszam);
// }
// console.log(szamok);

// //melyik a legnagyobb es melyik a legkisebb szam
// let maximum=Math.max(...szamok)
// console.log("A legnagyobb szam: " + szamok.maximum);

// let minimum=Math.min(...szamok)
// console.log("A legkisebb szam: " + szamok.minimum);

//----------------------------------------------------------------------------//