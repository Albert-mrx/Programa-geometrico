/*
console.group("-CUADRADO-"); //damos inicio a un grupo de codigo (encapsula a los console)
//----------------------codigo del cuadrado----------------------------------------
const ladoCuadrado=5;
console.log(`los lados del cuadrado miden: ${ladoCuadrado}cm`);

const perimetroCuadrado=ladoCuadrado*4;
console.log(`el perimetro del cuadrado es : ${perimetroCuadrado}cm`);

const areaCuadrado=ladoCuadrado*ladoCuadrado;
console.log(`el area del cuadro es: ${areaCuadrado}cm^2`);
console.groupEnd();//damos final a un grupo de codigo

//------------------------codigo del triangulo----------------------------
console.group("--TRIANGULO--");
const lado1=3;
const lado2=5;
const lado3=8;
const altura=10;
const perimetroTriangulo=lado1+lado2+lado3;
console.log(`los lados de un triangulo miden ${lado1}cm,${lado2}cm,${lado3}cm`);
console.log(`el perimetro de un triangulo es : ${perimetroTriangulo}cm`);

const areaTriangulo=(lado2*altura)/2;
console.log(`el area de un triangulo es: ${areaTriangulo}cm^3`);
console.groupEnd();

// ----------------------codigo de Circulo------------------------- 
console.group("CIRCULO");

//radio es la mitad de la linea de un circulo (-.)
const radioCirculo=8;
console.log(`el radio  es: ${radioCirculo}`);

//diametro es la linea del centro en todo el  circulo(---)
 const diametroCirculo=radioCirculo*2;
 console.log(`el diametro del circulo es : ${diametroCirculo}`);

 //pi
 const Pi=Math.PI;
 console.log(`el valor de PI es : ${Pi} cm`);

 //area
 const areaCirculo=(radioCirculo*radioCirculo)*Pi;
 console.log(`el area de un circulo es :  ${areaCirculo}`);

 //perimetro es el contorno del circulo (circunferencia)
const perimetroCirculo=diametroCirculo*Pi;
console.log(`el perimetro de un circulo es : ${perimetroCirculo}`);

console.groupEnd();
*/
//---------------------------------encapsulando codigo en funciones--------------------------

/*
console.group("CUADRADO");
//-------------------------cuadrado

function cuadrado(lado){
  console.log(`el perimetro de un circulo es : ${lado*4}`);
  console.log(`el area de un cuadrado es: ${lado*lado}`);
}
cuadrado(prompt("ingrese dato del cuadrado"));

//-------------------------triangulo------------
  
  function triangulo(l1,l2,l3,h,b){
       l1=prompt(`ingrese lado 1 del triangulo: `);
       l2=prompt(`ingrese lado 2 del triangulo:`);
       l3=prompt(`ingrese lado 3 del triangulo:`);
       h=prompt(`ingrese la altura del triangulo:`);
       b=prompt(`ingrese la base del triangulo`);

       let p=parseInt(l1)+parseInt(l2)+parseInt(l3);
       let a=(parseInt(b)*parseInt(h))/2;
       console.log(`el perimetro del triangulo es :${parseInt(p)}`);
       console.log(`el area del triangulo es : ${a}`);
  }
  triangulo();

//--------------------------CIRCULO---------------------------


let Pi=Math.PI;
function circulo(radio){
    radio=prompt("ingrese el radio del circulo: ");
    let a=(radio*radio)*Pi;
    let d=radio*2;
    let p=d*Pi;
    
    console.log(`el area de un circulo es : ${a}`);
    console.log(`el diametro de un circulo es : ${d}`);
    console.log(`el perimetro de un cirulo es : ${p}`);
}
circulo();
*/
//-----aqui interactuamos con el HTML ------

function calcularPerimetroCuadrado(){
    const input=document.getElementById("Inputcuadrado");
    const Value=input.value;
}
function calcularAreaCuadrado(){

}