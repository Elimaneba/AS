function addTask() {
  let toDoDate = date.value;
  let toDoObject = object.value;
  let toDoCode = code.value;
  let toDoCredit = credit.value;
  let toDoDebit = Debit.value;
  let toDoCode2 = code2.value;
  let toDoCredit2 = credit2.value;
  let toDoDebit2 = Debit2.value;

  if (
    toDoCode < 0 ||
    toDoCode2 < 0 ||
    toDoObject.length < 2 ||
    toDoCredit < 0 ||
    toDoDebit < 0
  ) {
    alert("Revoyez votre saisi");
  } else {
    let table = document.getElementById("myAccount-list");
    var ligne = table.insertRow(-1);

    var tagTr = document.getElementsByTagName("tr");
    var indexTr = toDoCode;
    var indexTr_ = toDoCode2;
    var _indexTr = toDoCredit;
    var index_Tr = toDoCredit2;
    var inde_xTr = toDoDebit;
    var ind_exTr = toDoDebit2;

    var aMountDebit = inde_xTr + ind_exTr;
    var aMountCredit = _indexTr + index_Tr;

    let colonne1 = ligne.insertCell(0);
    colonne1.innerHTML += toDoDate;

    let colonne2 = ligne.insertCell(1);
    colonne2.innerHTML += indexTr;

    let colonne3 = ligne.insertCell(2);
    colonne3.innerHTML += indexTr_;

    let colonne4 = ligne.insertCell(3);
    colonne4.innerHTML += toDoObject;

    let colonne5 = ligne.insertCell(4);
    colonne5.innerHTML += aMountDebit;

    let colonne6 = ligne.insertCell(5);
    colonne6.innerHTML += aMountCredit;
  }
}
