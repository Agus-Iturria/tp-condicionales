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
let number1_bigest = false
if(number1 > number2){
    number1_bigest = true
    console.log(number1_bigest)
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
let negativeNumber = -2
if (negativeNumber > 0){
    console.log("numero positivo")
}else{
    console.log("numero negativo")
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
let nota = 8
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
    case 1:
        console.log("Uno");
        break;
    case 2:
        console.log("Dos");
        break;
    case 3:
        console.log("Tres");
        break;
    case 4:
    case 5:
    case 6:
    case 7:
    case 8:
    case 9:
    case 10:
        console.log("Mayor a 3");
        break;
}

//21.Crea un bloque de código que tome de referencia una letra. Utiliza switch para imprimir en consola si es una vocal, una consonante, o un caracter especial.
let selectLetter = "A"
switch(selectLetter){
    case "A":
    case "E":
    case "I":
    case "O":
    case "U":
        console.log("Vocal");
        break;
    
    case "Q":
    case "W":
    case "R":
    case "T":
    case "Y":
    case "P":
    case "S":
    case "D":
    case "F":
    case "G":
    case "H":
    case "J":
    case "K":
    case "L":
    case "Ñ":
    case "Z":
    case "X":
    case "C":
    case "V":
    case "B":
    case "N":
    case "M":
        console.log("Consonante");
        break;
    
    default:
        console.log("Caracter especial")
        break;
}

//22.Crea un bloque de código que tome de referencia un número del 1 al 4. Utiliza switch para imprimir en consola la estación del año correspondiente.
estacionAnio = 2
switch(estacionAnio){
    case 1:
        console.log("Verano");
        break;
    case 2:
        console.log("Otoño");
        break;
    case 3:
        console.log("Invierno");
        break;
    case 4:
        console.log("Primavera");
        break;
}

//OPERADOR TERNARIO
//23.Crea un bloque de código que tome de referencia una variable ‘edad’. Utiliza el operador ternario para imprimir en consola si es o no mayor de edad.
let edad = 26;
console.log(edad >= 18 ? "Mayor" : "Menor");

//24.Crea un bloque de código que tome de referencia un número. Utiliza el operador ternario para determinar si es par o impar y muestra el resultado en consola.
let number24 = 15;
console.log(number24%2 == 0 ? "Par" : "Impar");

//25.Crea un bloque de código que tome de referencia dos números y utilice el operador ternario para determinar cual de los dos es el mayor. Luego imprime en consola el resultado.
let reference_number1 = 4
let reference_number2 = 44
console.log(reference_number1 > reference_number2 ? "Primer numero es mayor" : "Segundo numero es mayor");

//26.Crea un bloque de código que tome de referencia un número del 1 al 7 y utilice el operador ternario para imprimir en consola el día de la semana correspondiente.
let weeknum = 4
let week = weeknum == 1 ? "lunes" : 
weeknum == 2 ? "martes": 
weeknum == 3 ? "miercoles": 
weeknum == 4 ? "jueves":
weeknum == 5 ? "viernes":
weeknum == 6 ? "sabado" :
weeknum == 7 ? "domingo" : "no"
console.log(week)

//27.Crea un bloque de código que tome de referencia un número. Utiliza el operador ternario para determinar si es positivo, negativo o cero e imprime el resultado en consola.
let reference_number3 = -3
let positiveOrNegative = reference_number3 < 0 ? "negativo": 
reference_number3 > 0 ? "positivo" : "cero" 
console.log(positiveOrNegative)

//28.Crea un bloque de código que tome de referencia un número del 1 al 100 y utilice el operador ternario para determinar si es múltiplo de 3 y 5 para imprimir el resultado en consola.
let multiplo3y5 = (reference_number2%3 == 0 && reference_number2%5 == 0) ? "Es multiplo de 3 y 5": "No es multiplo de 3 y 5"
console.log(multiplo3y5)

//PRACTICAS
//29.Crea un bloque de código que tome de referencia un número del 1 al 100 y, utilizando el tipo de condicional que prefieras, imprimir si es múltiplo de 2, 3 o 5 incluyendo las diferentes combinaciones posibles.
let reference_number4 = 30
if (reference_number4%2 == 0  || reference_number4%3 == 0 || reference_number4%5 == 0){
    if (reference_number4%2 == 0){
        if (reference_number4%2 == 0 && reference_number4%3 == 0 && reference_number4%5 == 0){
            console.log("El numero es multiplo de 2, 3 y 5")
        }
        else if (reference_number4%2 == 0 && reference_number4%3 == 0){
            console.log("El numero es multiplo de 2 y 3")
        }
        else if (reference_number4%2 == 0 && reference_number4%5 == 0){
            console.log("El numero es multiplo de 2 y de 5")
        }
        else {
            console.log("El numero es multiplo de 2")
        }
    }
    else if (reference_number4%3 == 0){
        if (reference_number4%3 == 0 && reference_number4%5 == 0){
            console.log("El numero es multiplo de 3 y 5")
        }

    }
    else if  (reference_number4%5 ==  0){
        console.log("El numero es multiplo de 5")
    }

    else{
        console.log("El numero no es multiplo ni de 2, 3 ni 5")
    }

}

//30.Crea un bloque de código que reciba un numero del 1 al 1000. Utiliza el tipo de condicional que prefieras para imprimir en consola si el numero es par o impar, si es divisible por 2, por 3 o por 5, y si es mayor o menor a 50.
let reference_number5 = 55
let oddEven = ""
let divisible = ""
let fifty = ""
if (reference_number5%2 == 0){
    oddEven = "Par"
    if (reference_number5 > 50){
        fifty = "mayor a 50"
        if (reference_number5%2 == 0){
            divisible = "2"
        }
        else if (reference_number5%3 == 0){
            divisible = "3"
        }
        else if (reference_number5%5 == 0){
            divisible = "5"
        }
    }
    else{
        fifty = "menor a 50"
        if (reference_number5%2 == 0){
            divisible = "2"
        }
        else if (reference_number5%3 == 0){
            divisible = "3"
        }
        else if (reference_number5%5 == 0){
            divisible = "5"
        }
    }
}
else{
    oddEven = "Impar"
    if (reference_number5 > 50){
        fifty = "mayor a 50"
        if (reference_number5%2 == 0){
            divisible = "2"
        }
        else if (reference_number5%3 == 0){
            divisible = "3"
        }
        else if (reference_number5%5 == 0){
            divisible = "5"
        }
    }
    else{
        fifty = "menor a 50"
        if (reference_number5%2 == 0){
            divisible = "2"
        }
        else if (reference_number5%3 == 0){
            divisible = "3"
        }
        else if (reference_number5%5 == 0){
            divisible = "5"
        }
    }
}
console.log("El numero es " + oddEven + " es divisible por " + divisible + " y es " + fifty)

//31.Desarrolla 10 nuevas situaciones en donde requieras de utilizar condicionales para su resolución.
//1) Pedir un numero, devolver si es par o impar y si es mayor o menor a 32
let num = 12
if (num%2 == 0){
    if(num > 32){
        console.log("El numero es par y mayor a 32")
    }
    else{
        console.log("El numero es par y menor a 32")
    }
}
else{
    if(num > 32){
        console.log("El numero es impar y mayor a 32")
    }
    else{
        console.log("El numero es impar y menor a 32")
    }
}
//2) Definir una variable que sea "Bicicleta", "Tren", "Colectivo"  o "Auto". Si se va en "Tren" o "Colectivo" que devuelva un mensaje recorndado llevar la Sube
let travel = "colectivo"
switch(travel){
    case "colectivo":
    case "tren":
        console.log("Recordà llevar la Sube!");
        break;
    default:
        console.log("Buen viaje!");
        break;
}
//3) Definir dos variables con dos numeros y devolver la diferencia entre el mayor y el menor
let numA = 8
let numB = 5
if (numA > numB){
    console.log(numA - numB)
}
else{
    console.log(numB - numA)
}
//4) Se piden dos numeros enteros y devolver la multiplicaciòn de ambos. Si alguno de los numeros es 0 que devuelva "ERROR"
if (numA == 0 || numB == 0){
    console.log("ERROR")
}
else{
    console.log(numA * numB)
}
//5) Crear un script que solicite un numero y diga si es negaivo, positivo o igual a 0
if (numA < 0){
    console.log("El numero es negativo")
}
else if (numA > 0){
    console.log("El  numero es positivo")
}
else{
    console.log("El numero es igual a 0")
}

