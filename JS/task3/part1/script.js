
// ========= 1-20
// let dog = {
//     age: 3,
//     color: 'black',
//     breed: 'shepherd',
//     price: '50 usd',
//     weight: 35,
// }

// let human = {
//     age: 20,
//     height: 172,
//     gender: 'male',
//     nationality: 'Ukrainian',
//     name: 'Andrew'
// }

// let car = {
//     brand: 'BMW',
//     model: 525,
//     VIN: 'QWERTY12014HA12345',
//     fuel: 'diesel',
//     volume: 2.5
// }

// let dogs = ['Rex', 'Mukhtar', 'Teddy', 'Bary', 'Rocky']
// let humans = ['Andrew', 'Misha', 'Pasha', 'Ruslan', 'Serhii']
// let cars = ['BMW', 'Toyota', 'Ford', 'Lada', 'Reno']
// console.log(dogs)
// console.log(humans);
// console.log(cars);

// let house = {
//     rooms: ['bathroom', 'kitchen'],
//     square: {firstFloor: 55, secondFloor: 45},
//     location: 'Lviv',
//     price: 55000,
//     garage: true
// }


// let users = [
//     {name: 'vasya', age: 31, status: false},
//     {name: 'petya', age: 30, status: true},
//     {name: 'kolya', age: 29, status: true},
//     {name: 'olya', age: 28, status: false},
//     {name: 'max', age: 30, status: true},
//     {name: 'anya', age: 31, status: false},
//     {name: 'oleg', age: 28, status: false},
//     {name: 'andrey', age: 29, status: true},
//     {name: 'masha', age: 30, status: true},
//     {name: 'olya', age: 31, status: false},
//     {name: 'max', age: 31, status: true}
// ];
// console.log(users[7].status);
// console.log(users[10].status);
// console.log(users[9].name);
// console.log(users[2].name);
// console.log(users[6].age);
// console.log(users[9].age);
// console.log(users[4].age);
// console.log(users[4].name);
// console.log(users[5].age);
// console.log(users[5].status);



let content = document.getElementById('content')
let rules = document.getElementById('rules')

content.innerText = 'QWERTY'
rules.innerText = 'ytrewq'

content.style.backgroundColor = 'red'
rules.style.backgroundColor = 'red'

content.style.color = 'blue'
rules.style.color = 'blue'

console.log(rules);

let fc = document.getElementsByClassName('fc_rules')
for (const i of fc){
    i.style.color = 'red'
}














