//document.write("<h2 style='color: #0000FF'>"+ imie[0].toUpperCase() + imie.slice(1).toLowerCase() +'</h2>');
//var imie = prompt();

//console.log(imie.substr(1, imie.length - 2));

/*
var imie = new Array();

for(var i = 0; i<50; i++){
  imie.push(i.toString());
}

for (var element in imie) {
  if (imie.hasOwnProperty(element)) {
    console.log(element);
  }
}
*/

Array.prototype.sortInt = function(){
  return this.sort(function(a,b){return a - b});
}

var kolory = new Array('blue', 'red', 'green', 'cyan');

for (var index in kolory) {
  if (kolory.hasOwnProperty(index)) {
    document.write("<h2 style='color: " + kolory[index] + ";'> test </h2>");
  }
}

var auta = new Array('BMW', 'Audi');

//auta.unshift(prompt());

document.write(auta + '<br>');

var tablx = new Array(
  new Array('Xd','kek'),
  new Array('Xd1','kek1'),
  new Array('Xd2','kek2')
);

//test

document.write(tablx + '<br>');
document.write(tablx[1][1] + '<br>');

var imiona = new Array("Janusz","Andrzej");
console.log(imiona.sort());
console.log(imiona.reverse());

var cyfry = new Array(1,2,3,45,656,7678,67655, 13);

console.log(cyfry.sortInt());

//utwórz formularz z loginem i hasłem, zapisz dane w tablicy





//function pole(a,b) {
//  return a*b;
//}

//console.log( pole( parseFloat(prompt("A")) , parseFloat(prompt("B")) ));
