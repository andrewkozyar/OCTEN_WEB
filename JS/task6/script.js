// // ========= 1
let num = [24,694,23,10,403,230,43,6,12,86,5,12,7,3,86,45320,64,65,34,938]
// let sortNum = num.sort( (a, b) => a - b )
// console.log(sortNum);
// let sortNumb = num.sort ((a,b) => b - a)
// console.log(sortNumb);
// let filter3 = num.filter((number) => number % 3 == 0)
// console.log(filter3);
// let filter10 = num.filter((number) => number % 10 == 0)
// console.log(filter10);
// num.forEach( value => {
//     return
// })
// let numb = num.map( (value, index) => {
//     return value * 3
// })
// console.log(numb);



// ========= 10
let str = ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'spider', 'pig', 'string', 'what', 'array']
// let sortStr = str.sort()
// console.log(sortStr);
// let sortString = str.sort()
// sortString.reverse()
// console.log(sortString);
// let filtStr = str.filter(string => string.length < 4 )
// console.log(filtStr);
// let notStr = str.map ((value) => value + '!')
// console.log(notStr);


// ========= 18
// let users = [ {name: 'vasya', age: 31, status: false}, {name: 'petya', age: 30, status: true}, {name: 'kolya', age: 29, status: true}, {name: 'olya', age: 28, status: false}, {name: 'max', age: 30, status: true}, {name: 'anya', age: 31, status: false}, {name: 'oleg', age: 28, status: false}, {name: 'andrey', age: 29, status: true}, {name: 'masha', age: 30, status: true}, {name: 'olya', age: 31, status: false}, {name: 'max', age: 31, status: true} ];
// users.sort((a, b) => a.age - b.age)
// users.sort((a, b) => b.age - a.age)
// users.sort((a, b) => a.name.length - b.name.length)
// users.sort((a, b) => b.name.length - a.name.length)
// console.log(users); 
// let usersWithID = []
// users.map((value, index) => {
//     value.id = index
//     usersWithID.push(value)
//     return
// })
// console.log(usersWithID);



// ========= 25
// function calculator (a, b, callback){
//     return callback(a, b)
// }
// let sum = calculator(29, 43, (a, b) => a + b)
// console.log(sum);

// ========= 26
// function calculator (a, b, c, callback){
//     return callback(a, b, c)
// }
// let sum = calculator(29, 43, 11, (a, b, c) => a + b - c)
// console.log(sum);







// ========= 74

// let lada ={
//     model: '5',
//     year: 1998,
//     power: 80,
//     driver: {
//         name: 'Vasya',
//         age: 54,
//         experience: 25,
//     },
//     price: 1100
// }
// let mersedess = {
//     model: 'c250',
//     year: 2014,
//     power: 200,
//     driver: {
//         name: 'Masha',
//         age: 25,
//         experience: 5,
//     },
//     price: 34000
// }
// let bmw = {
//     model: '328',
//     year: 2012,
//     power: 180,
//     driver: {
//         name: 'Andrew',
//         age: 20,
//         experience: 2,
//     },
//     price: 12000
// }
// let devo ={
//     model: 'lanos',
//     year: 2006,
//     power: 100,
//     driver: {
//         name: 'Misha',
//         age: 31,
//         experience: 10,
//     },
//     price: 3450
// }
// let toyota ={
//     model: 'camry',
//     year: 2015,
//     power: 270,
//     driver: {
//         name: 'Sasha',
//         age: 40,
//         experience: 21,
//     },
//     price: 18000
// }
// let lambo ={
//     model: 'huracan',
//     year: 2020,
//     power: 850,
//     driver: {
//         name: 'Pablitto',
//         age: 38,
//         experience: 20,
//     },
//     price: 350000
// }
// let vw ={
//     model: 'golf',
//     year: 2009,
//     power: 70,
//     driver: {
//         name: 'Rusik',
//         age: 27,
//         experience: 1,
//     },
//     price: 7050
// }
// let porshe ={
//     model: 'panamera',
//     year: 2013,
//     power: 460,
//     driver: {
//         name: 'Borys',
//         age: 62,
//         experience: 35,
//     },
//     price: 38000
// }
// let mitsubishi ={
//     model: 'pagero',
//     year: 2005,
//     power: 130,
//     driver: {
//         name: 'Yura',
//         age: 51,
//         experience: 21,
//     },
//     price: 9000
// }
// let reno ={
//     model: 'megane',
//     year: 2010,
//     power: 110,
//     driver: {
//         name: 'Valya',
//         age: 24,
//         experience: 3,
//     },
//     price: 8000
// }   
// function fix(obj){
//     obj.power += (obj.power * 0.1)
// }
// fix(bmw)
// fix(devo)
// fix(lambo)
// fix(reno)
// fix(mitsubishi)
// bmw.driver = {
//     name: 'Yura',
//     age: 51,
//     experience: 21,
// }
// devo.driver = {
//     name: 'Andrew',
//     age: 20,
//     experience: 2,
// }
// lambo.driver = {
//     name: 'Misha',
//     age: 31,
//     experience: 10,
// }
// reno.driver = {
//     name: 'Pablitto',
//     age: 38,
//     experience: 20,
// }
// mitsubishi.driver = {
//         name: 'Valya',
//     age: 24,
//     experience: 3,
// }
// let cars = []
// cars.push(lada, mersedess, bmw, toyota, lambo, devo, porshe, vw, mitsubishi, reno)
// for (let i = 0; i < cars.length; i += 2){
//     cars[i].power += (cars[i].power * 0.1)
//     cars[i].price += (cars[i].price * 0.05)
// }
// for (value of cars){
//     if(value.driver.experience < 5 && value.driver.age > 25){
//         value.driver.experience += 1
//     }
// }
// let sumOfCars = 0
// for (value of cars){
//     sumOfCars += value.price
// }
// console.log(sumOfCars);
// console.log(cars);







// ========= 87

let arr = [1, 2, 3, 4, 4, 4, 4, 7, 7, 9, 14]
function minMaxI (array, number){
    arrayI = []
    for(let i = 0; i < array.length; i++){
        if(array[i] == number){
            arrayI.push(i);
        }
    }
    let minI = arrayI[0]
    arrayI.reverse()
    let maxI = arrayI[0]
    if (minI === undefined && maxI === undefined){
        return -1
    }
    return 'MinIndex = ' + minI + ', MaxIndex = ' + maxI
}
console.log(minMaxI(arr, 7))
































