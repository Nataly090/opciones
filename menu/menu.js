var operaciones;
operaciones =parseInt(prompt("Menu: \n 1.Suma \n 2.Resta \n 3.Multiplicacion \n 4.Division  \n 5.Raiz cuadrada \n 6.Formula general \n 7.Binomio al cuadrado perfecto \n 8.Salir \n  Ingresar una opcion: "));

switch(operaciones){

    case 1:
var numero1=parseInt(prompt("Introduce un numero"));

var numero2=parseInt(prompt(" Introduce otro numero"));


function suma(a,b){

return a+b;
}
var resultado=suma(numero1,numero2);
console.log(`La suma es ${resultado}`);
        break;
    case 2:
var numero1=parseInt(prompt("Introduce un numero"));

var numero2=parseInt(prompt(" Introduce otro numero"));


function resta(a,b){

return a-b;
}
var resultado=resta(numero1,numero2);
console.log(`La resta es ${resultado}`);
        break;
    case 3:
var numero1=parseInt(prompt("Introduce un numero"));

var numero2=parseInt(prompt(" Introduce otro numero"));


function multiplicacion(a,b){

return a*b;
}
var resultado=multiplicacion(numero1,numero2);
console.log(`La multiplicacion es ${resultado}`);
        break;
    case 4:
var numero1=parseInt(prompt("Introduce un numero"));

var numero2=parseInt(prompt(" Introduce otro numero"));


function divicion(a,b){

return a/b;
}
var resultado=divicion(numero1,numero2);
console.log(`La divicion es ${resultado}`);
        break;
    case 5:
        var numero=parseInt(prompt("Introduce un numero"));
        function Raizcuadrada(num){
            var r;
            r=Math.sqrt(num);
        return r;
        }
        var resultado=Raizcuadrada(numero);
        
        console.log(`La raiz cuadrada es: ${resultado}`);
        break;
    case 6:
        var a=parseInt(prompt("Introduce a"));
        var b=parseInt(prompt("Introduce b"));
        var c=parseInt(prompt("Introduce c"));
        function x1(a, b, c,d){
        if(a !=0)
        {
        d=b*b-4*a*c;
        
        if(d>0){
        return(-b + Math.sqrt(d))/(2*a);
        }
        else{
            console.log("la raiz es un numero complejo");
        }
        }else{
            console.log("No corresponde a una ecuacion de 2do grado");
        }
        
        }
        var resultado=x1(a,b,c);
        console.log(`x1: ${resultado}`);
        
        function x2(a, b, c,d)
        {
        if(a !=0){
        d=b*b- 4*a*c;
        if(d>=0){
        return(-b - Math.sqrt(d))/(2*a);
        }
        else{
        console.log("La raiz es un numero complejo");
        }
        }else{
            console.log("No corresponde a una ecuacion de 2do grado");
        }
        }
        var resultado=x2(a,b,c);
        console.log(`x2: ${resultado}`);
        break;

    case 7:
var numero=parseInt(prompt("Introduce un numero"));

var numero2=parseInt(prompt("Inroduce otro numero"));

function binomio(a,b){
	return(Math.pow(a,2)+(2*a*b)+(Math.pow(b,2)));
}
var resultado=binomio(numero,numero2);
console.log(`(a+b)^2: ${resultado}`);
function binomio2(a,b){
	return(Math.pow(a,2)-(2*a*b)+(Math.pow(b,2)));
}
var resultado=binomio2(numero,numero2);
console.log(`(a-b)^2: ${resultado}`);

         break;
    case 8:
        break;
    default:
        console.log("opcion invalida");
    break;
}

