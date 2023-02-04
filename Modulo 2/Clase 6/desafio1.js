let electrodomesticos = ["televisor", "licuadora", "cafetera", "computador", "calentador", "estufa"];



console.log(electrodomesticos[Math.floor(Math.random() * electrodomesticos.length)]);
let extraer = electrodomesticos.shift();
console.log(electrodomesticos);
electrodomesticos.push(extraer);
console.log(electrodomesticos);
(electrodomesticos.push("calefacción"));
(electrodomesticos.push("nevera"));
console.log(electrodomesticos);

if (electrodomesticos.indexOf("tetevisor") == -1){
    console.log("El producto no existe");
}

let cadena = electrodomesticos.join(" ");
console.log(cadena);
console.log(cadena.length);
let nuevaCadena = cadena.replace("televisor", "nuevotelevisor");
console.log(nuevaCadena);

let nuevoArray = nuevaCadena.split(" ");
console.log(nuevoArray);