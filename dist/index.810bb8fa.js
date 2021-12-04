function addTask() {
    let toDoLabel = label.value;
    let toDoCode = code.value;
    let toDoClasse = classe.value;
    if (toDoCode < 0 || toDoCode.length < 3 || toDoLabel.length < 3 || toDoClasse == "") alert("Revoir votre saisi");
    else {
        let table = document.getElementById("myAccount-list");
        var ligne = table.insertRow(-1);
        var tagTr = document.getElementsByTagName("tr");
        var indexTr = toDoCode;
        let colonne1 = ligne.insertCell(0);
        colonne1.innerHTML += indexTr;
        let colonne2 = ligne.insertCell(1);
        colonne2.innerHTML += toDoLabel;
        let colonne3 = ligne.insertCell(2);
        colonne3.innerHTML += toDoClasse;
    }
}

//# sourceMappingURL=index.810bb8fa.js.map
