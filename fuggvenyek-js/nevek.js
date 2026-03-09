function nevekkiir(){
    let nevek_tomb=["Proba Elek","Jane Doe ","John Doe"]
    let kiir=document.getElementById("nevek")
    kiir.innerHTML=""

    for (let i=0;i< nevek_tomb.length;i++){
        if(nevek_tomb[i].length >= 8 && nevek_tomb[i].length <= 50){
        kiir.innerHTML += "<li>" + nevek_tomb[i] + "</li>"
    }

}
}