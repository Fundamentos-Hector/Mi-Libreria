const numeros = [4, 9, 16, 25];
const numeros2 = [6, 11, 18, 27];

//Metodo Foreach
//Metodo que hace una operacion por cada elemento de un arreglo
console.log('Metodo ForEach');

function saludo(){ 
    console.log('hola');
}

const lujan = {};
lujan.each = (array, fn) => {
    for(let i = 0; i < array.length; i++){
        fn();
    }
}

lujan.each(numeros, saludo);       



console.log('Metodo Filter');
//Metodo que devuelve un nuevo arreglo con los numeros que pasen cierta prueba

function customFilter(array, fn) {
    let newArr = [];

    for(let i = 0; i < array.length; i++){
        if(fn(array[i])) {

            newArr.push(array[i]);
        } 
    }
    return newArr;
}

function biggerThan10(element){
    return element > 10;
}

function numPares(element) {
    return element % 2 == 0;
}

const newData = customFilter(numeros, biggerThan10);
const dataTwo = customFilter(numeros, numPares);

console.log(newData);
console.log(dataTwo);



console.log('Metodo FindIndex');
//Metodo que retorna el indice del primer elemento en el arreglo que pase una prueba

function methodFinIndex (array, fn) {
    let ind = 0;
    for(let i=0; i < array.length; i++){
        if(fn(array[i])) {
            ind = i;
        }
    }
    return ind;
}

function indexPar(element) {
    return element % 2 == 0;
}

const dataIndPar = methodFinIndex(numeros, indexPar);
console.log(dataIndPar);



console.log('Metodo Find');

function methodFind(array, fn) {
    let eleme = 0;
    for(let i=0; i < array.length; i++){
        if(fn(array[i])) {
            eleme = array[i];
        }
    }
    return eleme;
}

function findPar(element) {
    return element % 2 == 0;
}

const dataPar = methodFind(numeros, findPar);
console.log(dataPar);



console.log('Metodo Map');

function methodMap(array, fn) {
    let arr = [];
    
    for(let i=0; i < array.length; i++) {
        if(fn(array[i])) {
           //arr[i] = Math.sqrt(array[i]);
            arr.push(Math.sqrt(array[i]));
        }
    }            
    return arr;
}

function raizMap(element) {    
    return element;  
}

const dataMap = methodMap(numeros2, raizMap);
console.log(dataMap);



console.log('Metodo Contains');
//Metodo que devuelve un valor verdadero si el dato que se busca se encuentra en el array
//const numeros = [4, 9, 16, 25];
const numeros3 = [6, 11, 18, 27, 'lujan'];

function methodContains(array, fn) {
    let answer = false;

    for(let i=0; i < array.length; i++) {
         
        if(fn(array[i])) {
            if(array[i] == verifyDate()){
                answer = true;
            }        
        }
    }
    return answer;
}

function verifyDate(element) {
    return element = 'lujan';    
}

const answerCorrect = methodContains(numeros3, verifyDate);
console.log(answerCorrect); 



console.log('Metodo Pluck');

const users = [
    {name: 'moe', age: 40}, 
    {name: 'larry', age: 50}, 
    {name: 'rizado', age: 60}
];

function methodPluck(array, fn) {
    let arrUsers = [];

    
    for(let i=0; i < array.length; i++) {
        if(fn(array[i])){
            arrUsers.push(searchType());
        }
    }
    return arrUsers;
}

function searchType(element, users) {    
    
    return element = users.name;
}

const search = methodPluck(users, searchType);
console.log(search); 


console.log('Metodo without');
//Retorna una copia de el arreglo con todos los valores excepto los removidos 

export const MyWhitOut = {}

MyWhitOut.Wout = (array, callback) => {
    for(let i=0; i < array.length; i++){
        if(callback(array[i]) === true){
            array.splice(i,1);
        }
    }
    return array;
}

const ContainsWhitout = MyWhitOut.Wout(numeros3, element => element === 27);
console.log(ContainsWhitout);