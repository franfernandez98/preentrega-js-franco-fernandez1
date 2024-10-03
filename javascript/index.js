function mostrarProductos(){

const producto1= 700000;
const producto2= 800000;
const producto3= 700000;
const producto4= 500000;
const producto5= 800000;
const producto6= 800000;
const producto7= 1000000;
const producto8= 900000;

console.log("producto 1:" + producto1);
console.log("producto 2:" + producto2);
console.log("producto 3:" + producto3);
console.log("producto 4:" + producto4);
console.log("producto 5:" + producto5);
console.log("producto 6:" + producto6);
console.log("producto 7:" + producto7);
console.log("producto 8:" + producto8);
}

let multiplicacion, producto, suma, total;
total=0;

let seguir;

while(true){
mostrarProductos();
producto= parseInt(prompt("cual notbook queres: 1, 2, 3, 4, 5, 6, 7, o 8"));
multiplicacion= function(precio, cantidad){
    return precio*cantidad;
}


switch(producto){
case 1:
cantidad= parseInt(prompt("cuantas unidades vas a querer: "));
console.log("total producto 1: " + multiplicacion(producto1,cantidad));
total= total + multiplicacion (producto1,cantidad);
break;
case 2:
cantidad= parseInt(prompt("cuantas unidades 1vas a querer: "));
console.log("total producto 2: " + multiplicacion(producto2,cantidad));
total= total + multiplicacion (producto2,cantidad);
break;
case 3:
cantidad= parseInt(prompt("cuantas unidades vas a querer: "));
console.log("total producto 3: " + multiplicacion(producto3,cantidad));
total= total + multiplicacion (producto3,cantidad);
break;
case 4:
cantidad= parseInt(prompt("cuantas unidades vas a querer: "));
console.log("total producto 4: " + multiplicacion(producto4,cantidad));
total= total + multiplicacion (producto4,cantidad);
break;
case 5:
cantidad= parseInt(prompt("cuantas unidades vas a querer: "));
console.log("total producto 5: " + multiplicacion(producto5,cantidad));
total= total + multiplicacion (producto5,cantidad);
break;
case 6:
cantidad= parseInt(prompt("cuantas unidades vas a querer: "));
console.log("total producto 6: " + multiplicacion(producto6,cantidad));
total= total + multiplicacion (producto6,cantidad);
break;
case 7:
cantidad= parseInt(prompt("cuantas unidades vas a querer: "));
console.log("total producto 7: " + multiplicacion(producto7,cantidad));
total= total + multiplicacion (producto7,cantidad);
break;
case 8:
cantidad= parseInt(prompt("cuantas unidades vas a querer: "));
console.log("total producto 8: " + multiplicacion(producto8,cantidad));
total= total + multiplicacion (producto8,cantidad);
break;   

default:
    alert("no ingresaste una opción correcta, la compra sigue, recorda seguir los pasos");
}

seguir= prompt("si deseas continuar comprando pone si o para seguir comprando pone no");
 
if(seguir.toLowerCase()==="no"){
    break;
}
else if(seguir.toLowerCase() !== "si" && seguir.toLowerCase() !== "no"){
    console.log("no ingresaste opción correcta, continua la compra")
}
 }

console.log("el valor final es:" + total);

