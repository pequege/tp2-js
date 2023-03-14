function ejercicio1() {
  let edad;
  do {
    edad = parseInt(prompt("Ingrese su edad"));
  }
  while (isNaN(edad) || edad < 1);
  if (edad >= 18) {
    document.getElementById("ejercicio1paragraph").innerHTML = "Puede conducir 😎";
  } else {
    document.getElementById("ejercicio1paragraph").innerHTML = "No puede 😢";
  }
}

function ejercicio2() {
  let nota = parseInt(prompt("🤓 Ingrese su nota:"));
  if (nota < 0 || nota > 10) {
    alert("Número erroneo 🤨");
  } else if (isNaN(nota)) {
    alert("Introduce un número válido")
  } else {
    //console.log(`nota: ${nota}`)
    switch (nota) {
      case 0:
      case 1:
      case 2:
        alert("Muy deficiente");
        break;
      case 3:
      case 4:
        alert("Insuficiente");
        break;
      case 5:
      case 6:
        alert("Suficiente");
        break;
      case 7:
        alert("Bien");
        break;
      case 8:
      case 9:
        alert("Notable");
        break;
      case 10:
        alert("Sobresaliente");
        break;
      default:
        alert("🤷‍♂️");
    }
  }
}

function ejercicio3() {
  let opc = true;
  let cadenas = prompt("Ingrese una cadena de texto");
  do {
    cadenas += "-" + prompt();
    opc = confirm("¿Continuar?");
  } while (opc == true);
  document.getElementById("ejercicio3paragraph").innerHTML = cadenas;
}

function ejercicio4() {
  let opc = true;
  let suma = 0;
  do {
    numero = parseInt(prompt("Ingrese un número a sumar"));
    if (isNaN(numero)) {
      alert(`${numero} no es un número`);
    } else {
      suma += numero;
      opc = confirm("¿Continuar?");
    }
  } while (opc == true);
  document.getElementById("ejercicio4paragraph").innerHTML = suma;
}

function ejercicio5() {
  let dni = prompt("Ingrese su dni");
  let letras_dni = ["T", "R", "W", "A", "G", "M", "Y", "F", "P", "D", "X", "B", "N", "J", "Z", "S", "Q", "V", "H", "L", "C", "K", "E"];
  if (dni > 0 && dni < 99999999) {
    resto = dni % 23;
    document.getElementById("ejercicio5paragraph").innerHTML = (`Letra del documento ${dni}: ${letras_dni[resto]}`);
  } else {
    document.getElementById("ejercicio5paragraph").innerHTML = ("Número de DNI inválido");
  }
}

function ejercicio6() {
  document.getElementById("ejercicio6paragraph").innerHTML = ("Piramide:<br>");
  for (let i = 1; i <= 30; i++) {
    document.getElementById("ejercicio6paragraph").innerHTML += ("<br>");
    for (let j = 1; j <= i; j++) {
      document.getElementById("ejercicio6paragraph").innerHTML += (`${i}`);
    }
  }
}

function ejercicio7() {
  let alturaPiramide = parseInt(prompt("Ingrese altura de la pirámide:"));
  if (isNaN(alturaPiramide) || alturaPiramide > 50 || alturaPiramide <= 0) {
    do {
      alturaPiramide = parseInt(prompt("Ponga un numeró válido 😠"));
    }
    while (isNaN(alturaPiramide) || alturaPiramide > 50 || alturaPiramide <= 0);
  }
  document.getElementById("ejercicio7paragraph").innerHTML += "Piramide:<br>";
  for (let k = alturaPiramide; k >= 0; k--) {
    document.getElementById("ejercicio7paragraph").innerHTML += ("<br>");
    for (let l = 1; l <= k; l++) {
      document.getElementById("ejercicio7paragraph").innerHTML += (`${k}`);
    }
  }
}

function ejercicio8() {
  let alturaPiramide = parseInt(prompt("Ingrese altura de la pirámide:"));
  if (isNaN(alturaPiramide) || alturaPiramide > 50 || alturaPiramide <= 0) {
    do {
      alturaPiramide = parseInt(prompt("Ponga un numeró válido 😠"));
    }
    while (isNaN(alturaPiramide) || alturaPiramide > 50 || alturaPiramide <= 0);
  }
  document.getElementById("ejercicio8paragraph").innerHTML += ("Piramide:<br>");
  document.getElementById("ejercicio8paragraph").innerHTML += (`<div style="text-align: center;">`)
  for (let m = 1; m <= alturaPiramide; m++) {
    document.getElementById("ejercicio8paragraph").innerHTML += ("<br>");
    for (let n = 1; n <= m; n++) {
      document.getElementById("ejercicio8paragraph").innerHTML += (`${n}`);
    }
  }
  document.getElementById("ejercicio8paragraph").innerHTML += (`</div>`);
}

function ejercicio9() {
  for (let o = 1; o <= 500; o++) {
    document.getElementById("ejercicio9paragraph").innerHTML += (`${o}`);
    if (o % 4 === 0) {
      document.getElementById("ejercicio9paragraph").innerHTML += (" (Múltiplo de 4)");
    }
    if (o % 9 === 0) {
      document.getElementById("ejercicio9paragraph").innerHTML += (" (Múltiplo de 9)");
    }
    if (o % 5 === 0) {
      document.getElementById("ejercicio9paragraph").innerHTML += (`<hr>`);
    }
    document.getElementById("ejercicio9paragraph").innerHTML += (`<br>`);
  }
}

function ejercicio10() {
  let filas = parseInt(prompt("Ingrese el número de filas"));
  let columnas = parseInt(prompt("Ingrese el número de columnas"));
  let indice = 1;
  let html_partial;
  html_partial = (`<table class="table table-striped-columns">
	<tbody>`);
  for (let i = 0; i < filas; i++) {
    html_partial += (`<tr>`);
    for (let j = 0; j < columnas; j++) {
      html_partial += (`<td>${indice++}</td>`);
    }
    html_partial += (`</tr>`);
  }
  html_partial += (`</tbody>
    </table>`);
  document.getElementById("ejercicio10paragraph").innerHTML = html_partial;
}

function ejercicio11() {
  let nombre1 = prompt("Ingrese el nombre de la primera persona: ");
  let edad1 = parseInt(prompt(`Ingrese la edad de ${nombre1}: `));
  let nombre2 = prompt("Ingrese el nombre de la segunda persona: ");
  let edad2 = parseInt(prompt(`Ingrese la edad de ${nombre2}: `));
  let nombre3 = prompt("Ingrese el nombre de la tercera persona: ");
  let edad3 = parseInt(prompt(`Ingrese la edad de ${nombre3}: `));
  let edadMaxima = Math.max(edad1, edad2, edad3);
  let mayor;
  if (edadMaxima === edad1) {
    mayor = nombre1;
  } else if (edadMaxima === edad2) {
    mayor = nombre2;
  } else {
    mayor = nombre3;
  }
  document.getElementById("ejercicio11paragraph").innerHTML = (`La persona más vieja es <strong>${mayor}</strong> con ${edadMaxima} años`);
}

function ejercicio12() {
  let enteroRandom = Math.floor(Math.random() * 99); //acotado entre 1 y 100
  document.getElementById("ejercicio12paragraph").innerHTML = (enteroRandom + "<br>");
}

function ejercicio13() {
  let texto = prompt("Ingrese un texto");
  document.getElementById("ejercicio13paragraph").innerHTML = (texto.toUpperCase());
}

function ejercicio14() {
  let texto = prompt("Ingrese un texto");
  let texto2 = "";
  let texto3 = texto.split("");
  console.log(texto3)
  for (let i = 0; i < texto.length; i++) {
    texto2 += texto.charAt(i) + "-";
  }
  document.getElementById("ejercicio14paragraph").innerHTML = (texto2);
}

function ejercicio15() {
  let frase = prompt("Ingrese un texto").toLocaleLowerCase();
  let cantidad_vocales = 0;
  for (let i = 0; i < frase.length; i++) {
    switch (frase.charAt(i)) {
      case 'a':
      case 'e':
      case 'i':
      case 'o':
      case 'u':
        cantidad_vocales++;
        break;
      default:
    }
  }
  document.getElementById("ejercicio15paragraph").innerHTML = (`cantidad de vocales en " ${frase} ": <strong>${cantidad_vocales}</strong>`)
}

function ejercicio16() {
  let frase = prompt("Ingrese un texto");
  let frase_reversa = frase.split("");
  frase_reversa = frase_reversa.reverse();
  frase_reversa = frase_reversa.join("");
  document.getElementById("ejercicio16paragraph").innerHTML = (`${frase} 🔁 ${frase_reversa}`);
}

function ejercicio17() {
  let frase = prompt("Ingrese un texto").toLocaleLowerCase();
  let vocales = ["a", "á", "e", "é", "i", "í", "o", "u", "ú"];
  let vocal_encontrada = false;
  let vocal_posicion = -1;
  for (let i = 0; i < frase.length; i++) {
    if (vocales.includes(frase.charAt(i))) {
      vocal_encontrada = true;
      vocal_posicion = i;
      break;
    }
  }
  vocal_encontrada ? 
  document.getElementById("ejercicio17paragraph").innerHTML = (`Posición de vocal: ${vocal_posicion + 1}`) :
  document.getElementById("ejercicio17paragraph").innerHTML = (`${frase} no contiene vocales`);
}
