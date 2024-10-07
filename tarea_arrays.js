// 1. Qué son los Arrays
// 1.1 Crea una función llamada `procesarPedido` que recibe un array `pedido`.
// Debes sacar el primer elemento (nombre del cliente), añadir "bebida" al inicio del array y añadir el nombre del cliente al final.
function procesarPedido(pedido) {
    // Tu código aquí
    let name=pedido.shift();
    pedido.unshift("bebida");
    pedido.push(name);
    return pedido;
}
// 2. Iteración de Arrays en Javascript
// 2.1 Crea una función llamada `sumarPares` que reciba un array de números.
// Debes iterar sobre el array, sumar todos los números pares y devolver la suma.
function sumarPares(numeros) {
    let suma = 0
    for (let numero of numeros){
        if (numero%2===0) {
            suma+=numero
        }
    }
    return suma
}

// 3. Buscar en Arrays
// 3.1 Escribe una función llamada `palabrasTerminanConA` que reciba un array de palabras y devuelva `true` si todas terminan con "a", o `false` si al menos una no lo hace.
function palabrasTerminanConA(palabras) {
    // Tu código aquí
    for (let i of palabras){
        if (i.charAt(i.length-1)!=="a") {
            return false
        }
    }
    return true    
    
}


const palabras = ['casa', 'silla', 'mesa']
console.log(palabrasTerminanConA(palabras)) // -> true

// 4. Transformar Arrays
// 4.1 Crea una función llamada `buscaPalabras` que reciba dos parámetros: un array `words` y una palabra `word`.
// Busca el índice de la palabra en el array y devuelve todas las palabras más largas que ese índice.
function buscaPalabras(words, word) {
    // Tu código aquí
    let lista=[]
    let indexWord=words.indexOf(word);
    if (indexWord === -1) {
        return lista;
    }
    for (let i = indexWord + 1; i < words.length; i++) {
        lista.push(words[i]);
    }
    return lista
}


// 5. Matrices
// 5.1 Crea una función llamada `findJavaScript` que reciba una matriz de cadenas y devuelva la posición de "JavaScript".
// Si no la encuentra, devuelve [-1, -1].
function findJavaScript(matrix) {
    // Tu código aquí
    let indice=[-1,-1];
    for (let i1 of matrix){
        for (let i2 of i1){
            if (i2==="JavaScript") {
                let lugar=i2.indexOf("JavaScript");
                let lugar2=i1.indexOf(i2)
                indice=[lugar,lugar2];
            }
        }
    }
    return indice
}

const matrix = [
    ['HTML', 'CSS', 'JavaScript'],
    ['Java', 'C++', 'Python'],
    ['Ruby', 'Go', 'Swift']
  ]
  
  const position = findJavaScript(matrix);
  console.log(position); // -> [0, 2]

// 6. Algoritmos con Arrays
// 6.1 Crea una función llamada `findMinMaxPages` que reciba un array de números (representando el número de páginas de libros).
// La función debe devolver un array con dos posiciones: el índice del libro con menos páginas y el índice del libro con más páginas.
function findMinMaxPages(books) {
    // Tu código aquí
    let max=books[0];
    let min=books[0];
    for (book of books){
        if (book>max) {
            max=book
        }
        if (book<min) {
            min=book
        }
    }
    max=books.indexOf(max);
    min=books.indexOf(min);
    return [min,max]
}

const libros = [350, 120, 540, 275, 390, 130, 670];
const resultado = findMinMaxPages(libros);
console.log(resultado); // -> [1, 6]

// Exportar las funciones para que puedan ser completadas y probadas
module.exports = {
    procesarPedido,
    sumarPares,
    palabrasTerminanConA,
    buscaPalabras,
    findJavaScript,
    findMinMaxPages
};
