function addTask() {
    let toDate = date.value;
    let toObjet = object.value;
    let toDoCode = code.value;
    let toDocod2 = code2.value;
    let toDodebit = debit.value;
    let toDocredit2 = credit2.value;
    let toDodebit2 = debit2.value;
    let toDocredit = credit.value;
    if (toObjet < 0 || toObjet.length < 3 || toDoCode.length < 3) alert("Revoir votre saisi");
    else if (toDocredit2 !== toDodebit || toDocredit !== toDodebit2) alert("Attention ! Le montant débité doit etre le meme crédité");
    else {
        let table = document.getElementById("myAccount-list");
        var ligne = table.insertRow(-1);
        var tagTr = document.getElementsByTagName("tr");
        var indexTr = toDoCode;
        let colonne2 = ligne.insertCell(0);
        colonne2.innerHTML += toDate;
        let colonne1 = ligne.insertCell(1);
        colonne1.innerHTML += indexTr;
        let colonne3 = ligne.insertCell(2);
        colonne3.innerHTML += toDocod2;
        let colonne4 = ligne.insertCell(3);
        colonne4.innerHTML += toObjet;
        let colonne5 = ligne.insertCell(4);
        colonne5.innerHTML += toDodebit;
        let colonne6 = ligne.insertCell(5);
        colonne6.innerHTML += toDocredit2;
    }
}

//# sourceMappingURL=index1.b4efe127.js.map
