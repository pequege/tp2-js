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
    console.log(`nota: ${nota}`)
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
  let cadenas = prompt();
  do {
    cadenas += "-" + prompt();
    opc = confirm("¿Continuar?");
  } while (opc == true);
  document.write(cadenas);
}

function ejercicio4() {
  let opc = true;
  let suma = 0;
  do {
    numero = parseInt(prompt());
    if (isNaN(numero)) {
      alert(`${numero} no es un número`);
    } else {
      suma += numero;
      opc = confirm("¿Continuar?");
    }
  } while (opc == true);
  document.write(suma);
}

function ejercicio5() {
  let dni = prompt("Ingrese su dni");
  let letras_dni = ["T", "R", "W", "A", "G", "M", "Y", "F", "P", "D", "X", "B", "N", "J", "Z", "S", "Q", "V", "H", "L", "C", "K", "E"];
  if (dni > 0 && dni < 99999999) {
    resto = dni % 23;
    document.write(`Letra del documento ${dni}: ${letras_dni[resto]}`);
  } else {
    document.write("Número de DNI inválido");
  }
}

function ejercicio6() {
  document.write("Piramide:<br>");
  for (let i = 1; i <= 30; i++) {
    document.write("<br>");
    for (let j = 1; j <= i; j++) {
      document.write(`${i}`);
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
  document.write("Piramide:<br>");
  for (let k = alturaPiramide; k >= 0; k--) {
    document.write("<br>");
    for (let l = 1; l <= k; l++) {
      document.write(`${k}`);
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
  document.write("Piramide:<br>");
  document.write(`<div style="text-align: center;">`)
  for (let m = 1; m <= alturaPiramide; m++) {
    document.write("<br>");
    for (let n = 1; n <= m; n++) {
      document.write(`${n}`);
    }
  }
  document.write(`</div>`)
}

function ejercicio9() {
  for (let o = 1; o <= 500; o++) {
    document.write(`${o}`);
    if (o % 4 === 0) {
      document.write(" (Múltiplo de 4)");
    }
    if (o % 9 === 0) {
      document.write(" (Múltiplo de 9)");
    }
    if (o % 5 === 0) {
      document.write(`<hr>`);
    }
    document.write(`<br>`);
  }
}

function ejercicio10() {
  let filas = parseInt(prompt("Ingrese el número de filas"));
  let columnas = parseInt(prompt("Ingrese el número de columnas"));
  let indice = 1;
  document.write(`<table class="table table-striped-columns">
	<tbody>`)
  for (let i = 0; i < filas; i++) {
    document.write(`<tr>`)
    for (let j = 0; j < columnas; j++) {
      document.write(`<td>${indice++}</td>`)
    }
    document.write(`</tr>`)
  }
  document.write(`</tbody>
    </table>`)
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

  document.write(`La persona más vieja es <strong>${mayor}</strong> con ${edadMaxima} años`);
}

function ejercicio12() {
  let enteroRandom = Math.floor(Math.random() * 99);
  document.write(enteroRandom + "<br>");
}

function ejercicio13() {
  let texto = prompt("Ingrese un texto");
  document.write(texto.toUpperCase());
}

function ejercicio14() {
  let texto = prompt("Ingrese un texto");
  let texto2 = "";
  let texto3 = texto.split("");
  console.log(texto3)
  for (let i = 0; i < texto.length; i++) {
    texto2 += texto.charAt(i) + "-";
  }
  document.write(texto2);
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
  document.write(`cantidad de vocales en " ${frase} ": <strong>${cantidad_vocales}</strong>`)
}

function ejercicio16() {
  let frase = prompt("Ingrese un texto");
  let frase_reversa = frase.split("");
  frase_reversa = frase_reversa.reverse();
  frase_reversa = frase_reversa.join("");
  document.write(`${frase} 🔁 ${frase_reversa}`);
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
  vocal_encontrada ? document.write(`Posición de vocal: ${vocal_posicion + 1}`) : document.write(`${frase} no contiene vocales`);
}
