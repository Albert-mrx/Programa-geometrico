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

// codigo del teacher
console.group("Cuadrados");
function perimetroCuadrado(lado) {
    return lado * 4;
  }
function areaCuadrado(lado) {
    return lado * lado;
  }
console.groupEnd();
//-----------------------------------------------------
console.group("Triángulos");

function perimetroTriangulo(lado1, lado2, base) {
    return lado1 + lado2 + base;
  }
  function areaTriangulo(base, altura) {
    return (base * altura) / 2;
  }
  console.log("El área del triángulo es: " + areaTriangulo + "cmˆ2");
  
  console.groupEnd();
//---------------------------------------------------
  console.group("Círculos");
  function diametroCirculo(radio) {
    return radio * 2;
  }
  
  // PI
  const PI = Math.PI;
  console.log("PI es: " + PI);
  
  // Circunferencia
  function perimetroCirculo(radio) {
    const diametro = diametroCirculo(radio);
    return diametro * PI;
  }
  
  // Área
  function areaCirculo(radio) {
    return (radio * radio) * PI;
  }
  
  console.groupEnd();
  
  

//-----aqui interactuamos con el HTML ------

function calcularPerimetroCuadrado(){
    const input=document.getElementById("Inputcuadrado");
    const Value=input.value;
    const perimetro=perimetroCuadrado(Value);
    alert(`el Perimetro  del Cuadrado es : ${perimetro} cm`);
}
function calcularAreaCuadrado(){
  const input=document.getElementById("Inputcuadrado");
  const Value=input.value;
  const area=areaCuadrado(Value);
  alert(`El Area del Cuadrado es : ${area} cm`);
}

//---aqui interatuamos html triangulo-----------
 function calcularAreaTriangulo(x,y){
    x=document.getElementById("InputAltura");
    y=document.getElementById("InputBase");
    let a=parseInt(x.value);
    let b=parseInt(y.value);
    const Area=areaTriangulo(a,b);
    alert(`el Area del triangulo es : ${Area} cm`);
 }
  function calcularPerimetroTriangulo(l1,l2,l3){
    l1=document.getElementById("InputLado1");
    l2=document.getElementById("InputLado2");
    l3=document.getElementById("InputLado3");
    let lado1=parseInt(l1.value);
    let lado2=parseInt(l2.value);
    let lado3=parseInt(l3.value);

    const perimetro=perimetroTriangulo(lado1,lado2,lado3);
    alert(`el Perimetro del Triangulo es : ${perimetro} cm`);
  }
  //----------HTML con CIRCULO----------------

  function calcularAreaCirculo(){
      const r1=document.getElementById("InputCirculo");
      let radio=parseInt(r1.value);
      const Area=areaCirculo(radio);
      alert(`El Area del circulo es : ${Area}`);
  }
  function calcularDiametroCirculo(){
    const d=document.getElementById("InputCirculo");
     let radio=parseInt(d.value);
     let diametro=diametroCirculo(radio);
    alert(`el Diametro del Circulo es : ${diametro}`);
  }
  function calcularPerimetroCirculo(){
      const p=document.getElementById("InputCirculo");
      let dato=parseInt(p.value);
      let Perimetro=perimetroCirculo(dato);
      alert(`El Perimetro del Circulo es : ${Perimetro}`);
  }