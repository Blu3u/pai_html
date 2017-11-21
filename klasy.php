<?php
  class User{
    public $imie, $nazwisko;

    public function ustawImie($wartosc){
      $this->imie = $wartosc;
    }

    public function pobierzImie(){
      return $this->imie;
    }

    public function ustawNazwisko(){

    }
  }

  $uczen1 = new User();
  $uczen2 = new User();

  $uczen1->imie = "Janusz";
  $uczen1->nazwisko = "Nowak";
?>
