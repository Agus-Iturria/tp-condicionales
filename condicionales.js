//IF
//1.Crea un bloque de código que compare dos variables numéricas. Si el número A es mayor que el número B, imprimir en consola ‘El número A es mayor a B‘.
let A = 4
let B = 2
if (A > B){
    console.log("El numero A es mayor que B")
}

//2.Crea un bloque de código que tome la edad de un usuario y la compare con un número de referencia. Si la edad es mayor al número de referencia, imprimir en consola un mensaje.
let age = 18
let reference_num = 14
if (age > reference_num){
    console.log("Un mensaje")
}

//3.Crea un bloque de código que compare dos números e imprima en consola un valor booleano.
let number1 = 3
let number2 = 2
let number1_biggest = false
if(number1 > number2){
    number1_biggest = true
    console.log(number1_biggest)
}

//4.Crea un bloque de código que compare dos nombres, y si ambos son iguales imprima en consola el nombre.
let name1 = "Jose"
let name2 = "Jose"
if (name1 == name2){
    console.log(name1)
}

//5.Crea un bloque de código que compare dos nombres, y si ambos son diferentes imprima en consola un mensaje.
let nombre1 = "Andres"
let nombre2 = "Ricardo"
if (nombre1 != nombre2){
    console.log("Los nombres son diferentes")
} 

//6.Crea un bloque de código que imprima en consola un número en caso de que sea un número negativo.
let negative_number = -2
if(negative_number <  0){
    console.log(negative_number)
}

//7.Crea un bloque de código que imprima en consola un número en caso de que NO sea un número negativo.
let positive_number = 2
if(positive_number <  0){
    console.log(positive_number)
}

//IF...ELSE
//8.Crea un bloque de código que compare dos números. Si el número es par, imprimir en consola ‘El número es par’. De lo contrario, imprimir ‘El número es impar’.
let pair_number = 2
if (pair_number%2 == 0){
    console.log("El numero es par");
}else{
    console.log("El numero es impar");
}

//9.Crea un bloque de código que compare dos números y luego imprima en consola si es positivo o negativo.
if (negative_number > 0){
    console.log("numero par")
}else{
    console.log("numero impar")
}

//10.Crea una función que tome de referencia una variable string cuyo valor sea una letra, y luego imprima en consola si es una vocal o una consonante.
letter = "A"
if ((letter == "A") || (letter == "E") || (letter == "I") || (letter =="O") || (letter == "U")){
    console.log("La letra es una vocal")
}else{
    console.log("La letra es una consonante")
}

//11.Crea un bloque de código que tome de referencia un nombre. Si el nombre ingresado es ‘Pedro’ imprimir en consola ‘Hola Pedro, como estás?’. De lo contrario, imprimir ‘Hola! Cómo te llamas?’.
let nombre = "Richard"
if (nombre == "Pedro"){
    console.log("Hola Pedro, ¿Como estas?")
}else{
    console.log("Hola! ¿Como te llamas?")
}

//12.Crea un bloque de código que tome de referencia la nota de un examen y devuelva ‘Estás aprobado’ si la nota es mayor o igual a 7, o ‘Estás desaprobado’ si la nota es menor a 7.
nota = 8
if (nota >= 7){
    console.log("Estas aprobado")
}else{
    console.log("Estas desaprobado")
}

//ELSE IF
//13.Crea un bloque de código que tome de referencia un número e imprima en pantalla si el número es menor a 10, mayor a 50, o si está entre esos dos valores.
let reference_number = 20
if (reference_num < 10){
    console.log("El numero es menor a 10")
}else if(reference_num > 50){
    console.log("El numero es mayor a 50")
}else{
    console.log("El numero se encuntra entre 10 y 50")
}

//14.Crea un bloque de código que compare dos números. Si ambos números son menores a 10, imprimir en consola el múltiplo. Si ambos números son mayores a 50,  imprimir en consola su suma. Sino, imprimir en consola el primer número menos el segundo.
firstNum = 3
secondNum = 13
if(firstNum < 10 && secondNum < 10){
    console.log(firstNum * secondNum)
}else if(firstNum > 50 && secondNum > 50){
    console.log(firstNum + secondNum)
}else{
    console.log(firstNum)
}

//15.Crea un bloque de código que tome de referencia un número del 1 al 7 y devuelva el día de la semana correspondiente. Por ejemplo: 1 = ‘lunes’.
let dayNum = 3

if (dayNum == 1){
    console.log("Lunes")
}else if (dayNum == 2){
    console.log("Martes")
}else if (dayNum == 3){
    console.log("Miercoles")
}else if (dayNum == 4){
    console.log("Jueves")
}else if (dayNum == 5){
    console.log("Viernes")
}else if (dayNum == 6){
    console.log("Sabado")
}else if (dayNum == 7){
    console.log("Domingo")
}

//16.Crea un bloque de código que reciba un número e imprima en pantalla si es divisible por 2, 3, o ninguno.
divisibleNum = 8
if (divisibleNum%2 == 0){
    console.log("Es divisible por 2")
}else if (divisibleNum%3 == 0){
    console.log("Es divisible por 3")
}else{
    console.log("No es divisible por ninguno")
}

//17.Crea un bloque de código que tome de referencia un número del 1 al 12 y devuelva el mes correspondiente. Por ejemplo: 1 = ‘Enero’.
let monthNum = 3
if (monthNum == 1){
    console.log("Enero")
}else if (monthNum == 2){
    console.log("Febrero")
}else if (monthNum == 3){
    console.log("Marzo")
}else if (monthNum == 4){
    console.log("Abril")
}else if (monthNum == 5){
    console.log("Mayo")
}else if (monthNum == 6){
    console.log("Junio")
}else if (monthNum == 7){
    console.log("Julio")
}else if (monthNum == 8){
    console.log("Agosto")
}else if (monthNum == 9){
    console.log("Septiembre")
}else if (monthNum == 10){
    console.log("Octubre")
}else if (monthNum == 11){
    console.log("Noviembre")
}else if (monthNum == 12){
    console.log("Diciembre")
}

//SWITCH
//18.Crea un bloque de código que tome de referencia un número del 1 al 7. Utiliza una sentencia Switch para imprimir en consola el día de la semana correspondiente.
switch (dayNum){
    case 1:
        console.log("Lunes");
        break;
    case 2:
        console.log("Martes");
        break;
    case 3:
        console.log("Miercoles");
        break;
    case 4:
        console.log("Jueves");
        break;
    case 5:
        console.log("Viernes");
        break;
    case 6:
        console.log("Sabado");
        break;
    case 7:
        console.log("Domingo");
        break;
}

//19.Crea un bloque de código que tome de referencia una letra correspondiente al género (‘H’, ‘M’, ‘X’…). Utiliza una sentencia switch para imprimir en consola el género correspondiente.
let gender = "H"
switch(gender){
    case "H":
        console.log("Hombre");
        break;
    case "M":
        console.log("Mujer");
        break;
    case "X":
        console.log("No binario");
        break;
}
//20.Crea un bloque de código que reciba un número del 1 al 10. Utiliza switch para imprimir en consola ‘Uno’, ‘Dos’, ‘Tres’, o ‘Mayor a 3’, según corresponda. 
let tenNumber = 4
switch(tenNumber){
    
}





