var li1 = document.getElementById("1");
var li2 = document.getElementById("2");

var przyciski = new Array();

for(var i = 1; i <= 5; i++){
  przyciski.push(document.getElementById(("x" + i)));
}

var wynik = document.getElementById("wynik");

function sprawdzenie(){
    if(li1.value == "" || li2.value == "" ){
      wynik.textContent = "XD uzupełnij obie liczby XD."
      return false;
    }
    else if(isNaN(parseFloat(li1.value)) || isNaN(parseFloat(li2.value))){
      wynik.textContent = "Podane wartości nie są liczbami."
      return false;
    }
    return true;
}

przyciski[0].onclick = function(){
    if(sprawdzenie()) wynik.textContent = parseFloat(li1.value) + parseFloat(li2.value);
}
przyciski[1].onclick = function(){
    if(sprawdzenie()) wynik.textContent = parseFloat(li1.value) - parseFloat(li2.value);
}
przyciski[2].onclick = function(){
    if(sprawdzenie()) wynik.textContent = parseFloat(li1.value) * parseFloat(li2.value);
}
przyciski[3].onclick = function(){
    if(li2.value == "0"){ wynik.textContent = "Nie dziel przez zero XD"; return; }
    if(sprawdzenie())  wynik.textContent = parseFloat(li1.value) / parseFloat(li2.value);
}
przyciski[4].onclick = function(){
    if(parseInt(li2.value) == 0){  wynik.textContent = 1;  return;  }
    if(parseInt(li2.value) < 0){ wynik.textContent = "Niepoprawny wykładnik XDDD"; return; }
    if(sprawdzenie()) wynik.textContent = Math.pow(parseFloat(li1.value), parseFloat(li2.value));
}
