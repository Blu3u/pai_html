function Osoba(imie = "default", nazwisko = "default", wiek = 18, plec = "M"){
  this.imie = imie;
  this.nazwisko = nazwisko;
  this.wiek = wiek;
  this.plec = plec;
  this.narodowosc = "polska";
}

var janusz = new Osoba("Janusz", "Tracz");
console.log(janusz.imie);

//utworz konstruktor o nazwie pies i parametrach imie rasa waga, oraz ulubione zajecia (tabl) utworz 3 obiekty

function Pies(imie = "Pies", rasa = "York", waga = 5, ulubione = []){
  this.imie = imie;
  this.rasa = rasa;
  this.waga = waga;
  this.ulubione = ulubione;
}

var azor = new Pies("Azor");
var ebi = new Pies("Ebi");
var saba = new Pies("Saba");
