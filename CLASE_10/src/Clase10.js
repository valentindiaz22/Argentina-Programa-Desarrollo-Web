// ej 1
let arrayRandom = [];

function random()
{
    let aux = Math.floor(Math.random() * 99) + 1;
    return aux;
}

function rellenarArray(array)
{
    for(i = 0; i<=5; i++)
    {
        array.push(random());
    }
}

function display(array)
{
    let i = 0;
    while(i < array.length)
    {
        $("#random").append(array[i]," ");
        i++;
    }
}

function ordenador(array)
{
    array.sort(function(a,b)
    {
        return a - b;
    });
}

function creadorDes(array)
{
    let i = 0;
    for(i; i < array.length; i++)
    {
        $("ul").append("<li>",array[i]);
    }
}

rellenarArray(arrayRandom);
display(arrayRandom);
ordenador(arrayRandom);
creadorDes(arrayRandom);

// ej 2
let ej2 = [1,2,3,4,5,6];
let arrayCopia = [];

function ej2While(array)
{
    let i = 0;
    while(i < array.length)
    {
        $("#ej2While").append(array[i]," ");
        i++;
    }
}

function ej2For(array)
{
    for(i = 0; i < array.length; i++)
    {
        $("#ej2For").append(array[i]," ");
    }
}

function ej2ForEach(array)
{
    array.forEach(element => $("#ej2ForEach").append(array[element-1]," "));
}

function ej2Mostrar(array)
{
    let i = 0;
    while(i < array.length)
    {
        $("#ej2Mostrar").append((array[i]+1)," ");
        i++;
    }
}

function ej2Copia(array, copia)
{
    let i = 0;
    while(i < array.length)
    {
        copia.push(array[i]+1);
        $("#ej2Copia").append((copia[i])," ");
        i++;
    }
}

function ej2PromedioOg(array)
{
    let largo = array.length;
    let valorArray = (acumulador, cValue) => acumulador + cValue;
    let promedio = array.reduce(valorArray);
    promedio = promedio / largo;
    $("#ej2Promedio").append(promedio);
}

function ej2Promedio(array)
{
    let largo = array.length;
    let valorArray = (acumulador, cValue) => acumulador + cValue;
    let promedio = array.reduce(valorArray);
    promedio = promedio / largo;
    $("#ej2PromedioUno").append(promedio);
}

ej2While(ej2);
ej2For(ej2);
ej2ForEach(ej2);
ej2Mostrar(ej2);
ej2Copia(ej2,arrayCopia);
ej2PromedioOg(ej2);
ej2Promedio(arrayCopia);

// ej 3
let ej3 = [1,2,3,4,5,6];

function ejer3(array)
{
    for(i = 0; i < array.length; i++)
    {
        array[i] = Math.pow(array[i], 2);
        $("#ej3").append(array[i]," ");
    }
}
ejer3(ej3);

// ej 4
let ej4 = [1,-4,12,0,-3,29,-15];

function ejer4(array)
{
    let aux = 0;
    for(i = 0; i < array.length; i++)
    {
        if(array[i]>0)
        {
            aux += array[i];
        }
    } 
    $("#ej4").append(aux);
}
ejer4(ej4);

// ej 5
let nombres = ["Florencia","Lucas","Ezequiel","Matias","Bruno","Gustavo","Martin"];
let seisLetras = nombres.filter(nombre => nombre.length >= 6);
$("#ej5").text("Array cuyos elementos tienen almenos 6 letras: ["+seisLetras+"]");
let empiezaM = nombres.filter(nombre => nombre[0] =="M");
$("#empiezaM").text("Array cuyos elementos comienzan con M: ["+empiezaM+"]");
let alfa = nombres.sort();
console.log(" 5) c) Array ordenado alfabeticamente: ["+alfa+"]");
let iniciales = []

function inicial(array, iniciales)
{
    for(i = 0; i < array.length; i++)
    {
        let aux = array[i]
        iniciales.push(aux[0])
    }
}

inicial(nombres,iniciales);
$("#iniciales").text("Array con las iniciales en orden alfabetico: ["+iniciales+"]");

arrayMayus = []

function aMayuscula(array,arrayMayus)
{
    for(i = 0; i < array.length; i++)
    {
        let stringNormal = array[i].toString();
        let stringMayus = stringNormal.toUpperCase()
        arrayMayus.push(stringMayus)
    }
}
aMayuscula(nombres,arrayMayus);
$("#aMayus").text("Array con las letras en mayuscula: ["+arrayMayus+"]");

function comJ(array)
{
    let aux = array.some(l => l[0] == "J");
    $("#comienzaJ").text("¿Algún elemento del array comienza con J?: "+aux);
}

comJ(nombres);

// ej 6
let colores = ["azul","amarillo","rojo","verde","café","rosa"];

function btnColor()
{
    let color = prompt("Ingrese un color, en minusculas y con las tildes correspondientes");
    let aux = colores.some(c => c == color);
    return alert("¿El color se encuentra en el array?: "+aux);
}

// ej 7
let pares = [1,3,4,10,12,31,23,16];
let arrayPar = [];

function pasarPar(arrayPar)
{
    arrayPar = pares.filter(n => n % 2 === 0);
    $("#arrayPar").text("Array con solo los números par: ["+arrayPar+"]");
}

pasarPar(arrayPar);

// ej 8
let palabras = ["hola","manolo","uña","honda","aire"];
let palabrasVocal = [];

function comprobarVocal(palabras,palabrasVocal)
{
    palabrasVocal = palabras.filter(p => p[0] == "a" || p[0] == "e" || p[0] == "i" || p[0] == "o" || p[0] == "u");
    $("#arrayVocales").text("Array solo con las palabras que empiezan por una vocal: ["+palabrasVocal+"]");
}

comprobarVocal(palabras,palabrasVocal);

// ej 9
let arrayPosiciones = ["yoni",3,"pepe",5,"10"];

function intercambioPos(array,elem1,elem2)
{
    let aux = array[elem1];
    let aux2 = array[elem2];
    array[elem2] = aux;
    array[elem1] = aux2;
    $("#arrayCambio").text("Array con el elemento de la posición [0](yoni) y el elemento de la posición [3](5) intercambiados: ["+array+"]");
}

intercambioPos(arrayPosiciones,0,3);

//ej 10
$("#primParrafo").click(function()
{
    alert("Tocaste el primer parrafo")
});
