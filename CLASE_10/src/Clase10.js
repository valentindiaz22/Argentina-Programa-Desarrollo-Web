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
        array[i] = Math.pow(array[i], 2)
        console.log(array[i])
        $("#ej3").append(array[i]," ");
    }
}
ejer3(ej3);