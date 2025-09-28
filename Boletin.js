//1. Escribe un comentario en una linea
// comentario

//2. Escribe un comentario en varias lineas
/*
  comentario
  en
  varias
  lineas
*/

//3. Declara variables con valores asociados a todos los tipos de datos y imprimelos en la consola
let num = 42;                      
let com = "Hola JS";               
let bool = true;                                                                        
let nums = 9007199254740991n;       
let obj = { a: 1, b: "dos" };    
let arr = [1, 2, 3];               
console.log(num, com, bool, nums, obj, arr);

//4.Modifica los valores de las variables por otros valores y vuelve a imprimirlos en la consola.
num = 3.14;
com = "Adiós JS";
bool = false;
obj.c = 3;
arr.push(4);
console.log(num, com, bool, obj, arr);

//5. Declara constantes con valores asociados a todos los tipos de datos y imprimelos en la consola.
const CNUM = 7;
const CSTR = "Constante";
const CBOOL = true;
const CNULL = null;
const CUNDEF = undefined;
const CSYM = Symbol("const");
const CBIG = 123n;
const COBJ = { nombre: "Eva" };
const CARR = ["a", "b"];
const CFN = () => "función constante";
console.log(CNUM, CSTR, CBOOL, CNULL, CUNDEF, CSYM, CBIG, COBJ, CARR, CFN());

//6. Crea una variable para cada operador aritmetico y muestra su resultado en la consola.
let a = 10, b = 3;
let suma = a + b;
let resta = a - b;
let producto = a * b;
let division = a / b;
let modulo = a % b;
let potencia = a ** b;
console.log({ suma, resta, producto, division, modulo, potencia });

//7. Crea una variable para cada operador de asignacion y muestra su resultado en la consola.
let x = 5;
x += 2;  // 7
let asigMas = x;
x -= 1;  // 6
let asigMenos = x;
x *= 3;  // 18
let asigPor = x;
x /= 2;  // 9
let asigDiv = x;
x %= 4;  // 1
let asigMod = x;
x **= 3; // 1
let asigPow = x;
console.log({ asigMas, asigMenos, asigPor, asigDiv, asigMod, asigPow });

//8. Crea una variable para cada operador de comparacion y muestra su resultado en la consola.
let c1 = (5 == "5");    
let c2 = (5 === "5");   
let c3 = (5 != "5");
let c4 = (5 !== "5");
let c5 = (7 > 5);
let c6 = (7 >= 7);
let c7 = (3 < 4);
let c8 = (3 <= 2);
console.log({ c1, c2, c3, c4, c5, c6, c7, c8 });

//9. Crea una variable con un operador lógico y muestra su resultado en la consola.(AND y OR)
let andRes = true && false; 
let orRes = false || true;  
console.log({ andRes, orRes });

//10. Crea una variable con un operador ternario y muestra su resultado en la consola.
let edad = 19;
let puedeConducir = (edad >= 18) ? "Sí puede conducir" : "No puede conducir";
console.log(puedeConducir);

//11. Concatena dos cadenas de texto y muestra el resultado en la consola.
let nombre = "Manu";
let saludo = "Hola, " + nombre + "!";
console.log(saludo);

//12. Transforma una cadena de texto en mayúsculas y muestra el resultado en la consola.
let frase = "javascript es genial";
console.log(frase.toUpperCase());

//13. Muestra la longitud de una cadena de texto en la consola.
console.log("Longitud:", frase.length);

//14. Remplaza un el espacio de una cadena por un guión y muestra el resultado en la consola.
let conGuiones = frase.replace(/ /g, "-"); // o .replaceAll(" ", "-") en entornos modernos
console.log(conGuiones);

//15. Comprueba si un String contiene una palabra en concreto y muestra el resultado en la consola.
console.log("¿Contiene 'genial'?:", frase.includes("genial"));

//17. Investiga algun metodo mas utilizado con String y muestra el resultado en la consola.
console.log("Empieza por 'java'?:", frase.startsWith("java"));
console.log("Termina en 'genial'?:", frase.endsWith("genial"));
console.log("Partir por espacios:", frase.split(" "));

//18. Imprime tu nombre si una varibale tiene su valor
let posibleNombre = "Manuel";
if (posibleNombre) {
  console.log("Mi nombre es:", posibleNombre);
}

//19. Imprime acceso permitido si un variable nombre y su contraseña son correctos
let user = "admin";
let pass = "1234";
if (user === "admin" && pass === "1234") {
  console.log("Acceso permitido");
} else {
  console.log("Acceso denegado");
}

//20. Imprime en que estacion del año estamos a partir de una variable que indique el mes
// (Supongamos hemisferio norte; mes 1=enero, 12=diciembre)
let mes = 9;
let estacion;
if (mes === 12 || mes === 1 || mes === 2) estacion = "Invierno";
else if (mes >= 3 && mes <= 5) estacion = "Primavera";
else if (mes >= 6 && mes <= 8) estacion = "Verano";
else if (mes >= 9 && mes <= 11) estacion = "Otoño";
else estacion = "Mes inválido";
console.log("Estación (if/else):", estacion);

//21. Usa switch rehaciendo el ejercicio 20
switch (mes) {
  case 12: case 1: case 2:
    console.log("Estación (switch): Invierno");
    break;
  case 3: case 4: case 5:
    console.log("Estación (switch): Primavera");
    break;
  case 6: case 7: case 8:
    console.log("Estación (switch): Verano");
    break;
  case 9: case 10: case 11:
    console.log("Estación (switch): Otoño");
    break;
  default:
    console.log("Estación (switch): Mes inválido");
}

//22. Crea un listado que almacene cinco elementos.
let lista = ["Sevilla", "Cádiz", "Huelva", "Córdoba", "Málaga"];
console.log(lista);

//23. A ese listado incluye uno al principio y uno al final.
lista.unshift("Jaén");
lista.push("Granada");
console.log(lista);

//24. Elimina el último elemento del listado.
let eliminado = lista.pop();
console.log("Eliminado:", eliminado, "Lista:", lista);

//24. Crea un Set que guarde cinco elementos.
let conjunto = new Set([1, 2, 3, 3, 4, 5]); // el 3 duplicado se ignora
console.log(conjunto);

//26.Crea un mapa que como clave tenga un numero y como valor el mes.
let meses = new Map([
  [1, "Enero"], [2, "Febrero"], [3, "Marzo"], [4, "Abril"],
  [5, "Mayo"], [6, "Junio"], [7, "Julio"], [8, "Agosto"],
  [9, "Septiembre"], [10, "Octubre"], [11, "Noviembre"], [12, "Diciembre"]
]);
console.log(meses.get(9)); // Septiembre

//27. Crea un bucle que imprima numero del 1 al 10
for (let i = 1; i <= 10; i++) {
  console.log(i);
}

//28. Crea un bucle que cuente las vocales de una cadena de texto
let texto = "Programación en JavaScript";
let contadorVocales = 0;
for (let char of texto.toLowerCase()) {
  if ("aeiouáéíóúü".includes(char)) contadorVocales++;
}
console.log("Vocales:", contadorVocales);

//29. Usa un bucle para invertir una cadena de texto
let original = "Hola mundo";
let invertida = "";
for (let i = original.length - 1; i >= 0; i--) {
  invertida += original[i];
}
console.log("Invertida:", invertida);

//30. Crea un funcion que reciba dos numeros y los sume
function sumar(a, b) {
  return a + b;
}
console.log("Suma 5 + 7 =", sumar(5, 7));

//31. Crea una funcion que reciba un Array de Strings y devuelve un nuevo array solo con las letras mayusculas del Array original
function aMayusculas(arrStr) {
  return arrStr.map(s => s.toUpperCase());
}
console.log(aMayusculas(["hola", "que", "tal"]));

//32. Crea una funcion que reciba un String y devuelva la candena al reves
function alReves(cadena) {
  let res = "";
  for (let i = cadena.length - 1; i >= 0; i--) res += cadena[i];
  return res;
}
console.log(alReves("JavaScript"));
