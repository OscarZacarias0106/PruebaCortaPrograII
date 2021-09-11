var operacion1;
var operacion2;
var calculo;

function init(){
    var resultado = document.getElementById("resultado");
    var reset = document.getElementById("reset");
    var suma = document.getElementById("suma");
    var resta = document.getElementById("resta");
    var multiplicacion = document.getElementById("multiplicacion");
    var division = document.getElementById("division");
    var igual = document.getElementById("igual");
    var uno = document.getElementById("uno");
    var dos = document.getElementById("dos");
    var tres = document.getElementById("tres");
    var cuatro = document.getElementById("cuatro");
    var cinco = document.getElementById("cinco");
    var seis = document.getElementById("seis");
    var siete = document.getElementById("siete");
    var ocho = document.getElementById("ocho");
    var nueve = document.getElementById("nueve");
    var cero = document.getElementById("cero");
}

//Acciones
uno.onclick = function(e){
    resultado.textContent = resultado.textContent  + "1";
}
dos.onclick = function(e){
    resultado.textContent = resultado.textContent  + "2";
}
tres.onclick = function(e){
    resultado.textContent = resultado.textContent  + "3";
}
cuatro.onclick = function(e){
    resultado.textContent = resultado.textContent  + "4";
}
cinco.onclick = function(e){
    resultado.textContent = resultado.textContent  + "5";
}
seis.onclick = function(e){
    resultado.textContent = resultado.textContent  + "6";
}
siete.onclick = function(e){
    resultado.textContent = resultado.textContent  + "7";
}
ocho.onclick = function(e){
    resultado.textContent = resultado.textContent  + "8";
}
nueve.onclick = function(e){
    resultado.textContent = resultado.textContent  + "9";
}
cero.onclick = function(e){
    resultado.textContent = resultado.textContent  + "0";
}
reset.onclick = function(e){
    resetear();
}
suma.onclick = function(e){
    operacion1 = resultado.textContent;
    calculo = "+";
    limpiar();
}
resta.onclick = function(e){
    operacion1 = resultado.textContent;
    calculo = "-";
    limpiar();
}
multiplicacion.onclick = function(e){
    operacion1 = resultado.textContent;
    calculo = "*";
    limpiar();
}
division.onclick = function(e){
    operacion1 = resultado.textContent;
    calculo = "/";
    limpiar();
}
igual.onclick = function(e){
    operacion2 = resultado.textContent;
    resolver();
}

function limpiar(){
    resultado.textContent = "";
  }
  function resetear(){
    resultado.textContent = "";
    operacion1 = 0;
    operacion2 = 0;
    calculo = "";
  }

  function resolver(){
    var restablecer = 0;
    switch(calculo){
      case "+":
        restablecer = parseFloat(operacion1) + parseFloat(operacion2);
        break;
      case "-":
          restablecer = parseFloat(operacion1) - parseFloat(operacion2);
          break;
      case "*":
        restablecer = parseFloat(operacion1) * parseFloat(operacion2);
        break;
      case "/":
        restablecer = parseFloat(operacion1) / parseFloat(operacion2);
        break;
    }
    resetear();
    resultado.textContent = restablecer;
  }