function addTask() {
  let toDoLabel = label.value;
  let toDoCode = code.value;
  let toDoSelection = selection.value;

  if (toDoCode < 0) {
    alert("Le code ne doit pas etre négatif");
  } else {
    let table = document.getElementById("myAccount-list");
    var ligne = table.insertRow(-1);

    var tagTr = document.getElementsByTagName("tr");
    var indexTr = tagTr.length - 1;

    let colonne1 = ligne.insertCell(0);
    colonne1.innerHTML += indexTr;

    let colonne2 = ligne.insertCell(1);
    colonne2.innerHTML += toDoLabel;
  }
}
