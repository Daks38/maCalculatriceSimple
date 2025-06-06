function val(res) {
  document.querySelector(".info").innerHTML += res;
}
function valSup() {
  document.querySelector(".info").innerHTML = "";
}
function valPlus() {
  document.querySelector(".info").innerHTML += "+";
}
function valMoins() {
  document.querySelector(".info").innerHTML += "-";
}
function valMulti() {
  document.querySelector(".info").innerHTML += "*";
}
function valDiv() {
  document.querySelector(".info").innerHTML += "/";
}
function valPoint() {
  document.querySelector(".info").innerHTML += ".";
}
function resultat() {
  let egal = eval(document.querySelector(".info").innerHTML);
  document.querySelector(".info").innerHTML = egal;
}
