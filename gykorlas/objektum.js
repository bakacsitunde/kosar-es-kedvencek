// let users = []

// function register(){
// let nev=document.getElementById("nev").value
// let pass=document.getElementById("pass").value

// let user={
//     nev_key:nev,
//     pass_key:pass
// }

// users.push(user)
// console.log(users);

// }
//--------------------------------------------------------------------------

let termekek = []

let bevetel = 0;

function termekMegad(){

    let kategoria = document.getElementById("kategoria").value
    let nev = document.getElementById("termek_nev").value
    let ar = Number(document.getElementById("ar").value)
    let eladott_db = Number(document.getElementById("eladott_db").value)
    let raktar_db = Number(document.getElementById("raktar_db").value)

    let termek = {
        kategoria_key: kategoria,
        nev_key: nev,
        ar_key: ar,
        eladott_db_key: eladott_db,
        raktar_db_key: raktar_db
    }

    termekek.push(termek)
    console.log(termekek);


    const table = document.getElementById("adatok");
    
    let html = `<tr>
        <th>Kategória</th>
        <th>Név</th>
        <th>Ár</th>
        <th>Eladott db</th>
        <th>Raktár db</th>
    </tr>`;
    
let bevetel = 0;
let tenylegesRaktar=[]

let t_raktar_db ={
    termeknev:
}

    termekek.forEach(termek => {
        html += `<tr>
            <td>${termek.kategoria_key}</td>
            <td>${termek.nev_key}</td>
            <td>${termek.ar_key}</td>
            <td>${termek.eladott_db_key}</td>
            <td>${termek.raktar_db_key}</td>
        </tr>`;
        
        let osszeg = termek.ar_key * termek.eladott_db_key;
        bevetel += osszeg;

        let tenyleges_db =raktar_db - eladott_db;
        console.log("Termék: " + termek.nev_key + " Tenyleges db: " + tenyleges_db);
    });
    
    table.innerHTML = html;
console.log("A bevetel: " + bevetel);
}

