let dog = {
    color: 'black',
    breed: 'shepherd',
    weight: 35,
}

let human = {
    age: 20,
    height: 172,
    name: 'Andrew'
}

let car = {
    brand: 'BMW',
    model: 525,
    fuel: 'diesel',
}

let guitar = {
    material: "tree",
    strings: 6,
    mediator: true
}

let sweet = {
    sugar: true,
    maker: 'roshen',
    price: '100 uan'
}

let dev = { 
    secondName: 'Andrew', 
    skills: ['java','js'] , 
    laptop: {brand: 'dell', processor: 'CORE i5'}
};

let pasha = {
    cars: ['opel', 'mazda'],
    wife: { name: 'Tanya' }
}

let house = {
    rooms: ['bathroom', 'kitchen'],
    square: {firstFloor: 55, secondFloor: 45},
    location: 'Lviv',
    garage: true
}

// for (let value in dog){
//     console.log(value);
// }
// for (let value in human){
//     console.log(value);
// }
// for (let value in car){
//     console.log(value);
// }
// for (let value in guitar){
//     console.log(value);
// }
// for (let value in sweet){
//     console.log(value);
// }
// for (let value in dev){
//     console.log(value);
// }
// for (let value in pasha){
//     console.log(value);
// }
// for (let value in house){
//     console.log(value);
// }

// let q1 = Object.keys(dog)
// console.log(q1);
// let q2 = Object.keys(human)
// console.log(q2);
// let q3 = Object.keys(car)
// console.log(q3);
// let q4 = Object.keys(guitar)
// console.log(q4);
// let q5 = Object.keys(sweet)
// console.log(q5);
// let q6 = Object.keys(dev)
// console.log(q6);
// let q7 = Object.keys(pasha)
// console.log(q7);
// let q8 = Object.keys(house)
// console.log(q8);

let cars = [
    lada ={
        model: '5',
        year: 1998,
        power: 80,
        collor: 'blue'
    },
    mersedess = {
        model: 'c250',
        year: 2014,
        power: 200,
        collor: 'white'
    },
    bmw = {
        model: '328',
        year: 2012,
        power: 180,
        collor: 'black'
    },
    dewo ={
        model: 'lanos',
        year: 2006,
        power: 100,
        collor: 'green'
    },
    toyota ={
        model: 'camry',
        year: 2015,
        power: 270,
        collor: 'gold'
    },
    lambo ={
        model: 'huracan',
        year: 2020,
        power: 850,
        collor: 'carbon'
    },
    vw ={
        model: 'golf',
        year: 2009,
        power: 70,
        collor: 'red'
    },
    porshe ={
        model: 'panamera',
        year: 2013,
        power: 460,
        collor: 'white'
    },
    vitsubishi ={
        model: 'pagero',
        year: 2005,
        power: 130,
        collor: 'silver'
    },
    reno ={
        model: 'megane',
        year: 2010,
        power: 110,
        collor: 'green'
    },
]


let cities = [
    sambir = {
        name:'sambir',
        country: 'Ukraine',
        region: 'lviv'
    },
    tyachiv = {
        name:'tyachiv',
        country: 'Ukraine',
        region: 'transcarpatia'
    }
]

// let i = 0;
// while (i < cars.length){
//     console.log(cars[i]);
//     i++
// }
// let i1 = 0;
// while (i1 < cities.length){
//     console.log(cities[i1]);
//     i1++
// }

// for(let i = 0; i < cars.length; i++){
//     console.log(cars[i]);
// }
// for(let i = 0; i < cities.length; i++){
//     console.log(cities[i]);
// }

// for (let value of cars){
//     console.log(value);
// }
// for (let value of cities){
//     console.log(value);
// }

// let dog1 =JSON.stringify(dog)
// let human1 =JSON.stringify(human)
// let car1 =JSON.stringify(car)
// let guitar1 =JSON.stringify(guitar)
// let sweet1 =JSON.stringify(sweet)

// let dog2 = JSON.parse(dog1)
// let human2 = JSON.parse(human1)
// let car2 = JSON.parse(car1)
// let guitar2 = JSON.parse(guitar1)
// let sweet2 = JSON.parse(sweet1)

// for (let value of cars){
//     let json = JSON.stringify(value)
//     console.log(json)
// }
// for (let value of cities){
//     let json = JSON.stringify(value)
//     console.log(json)
// }

// let arr =[]
// for (let value of cars){
//     let json = JSON.stringify(value)
//     arr.push(json)
// }
// console.log(arr)


// let users = [
//     {name: 'vasya', age: 31, status: false, skills: ['java', 'js']}, 
//     {name: 'petya', age: 30, status: true, skills: ['java', 'js', 'html']}, 
//     {name: 'kolya', age: 29, status: true, skills: ['mysql', ',mongo']}, 
//     {name: 'olya', age: 28, status: false, skills: ['java', 'js']}, 
//     {name: 'max', age: 30, status: true, skills: ['mysql', ',mongo']}
// ];

// let arr = []
// let user = null
// for (let value of users){
//     user = value
//     for (let value2 of user.skills){
//         arr.push(value2)
//     }
// }
// console.log(arr);




// let users = [{
//     name: 'vasya',
//     age: 31,
//     status: false,
//     address: {city: 'Lviv', country: 'Ukraine', street: 'Shevchenko', houseNumber: 1}
// }, {
//     name: 'petya',
//     age: 30,
//     status: true,
//     address: {city: 'New York', country: 'USA', street: 'East str', houseNumber: 21}
// }, {
//     name: 'kolya',
//     age: 29,
//     status: true,
//     address: {city: 'Budapest', country: 'Hungary', street: 'Kuraku', houseNumber: 78}
// }, {
//     name: 'olya',
//     age: 28,
//     status: false,
//     address: {city: 'Prague', country: 'Czech', street: 'Paster', houseNumber: 56}
// }, {
//     name: 'max',
//     age: 30,
//     status: true,
//     address: {city: 'Istanbul', country: 'Turkey', street: 'Mikar', houseNumber: 39}
// }, {
//     name: 'anya',
//     age: 31,
//     status: false,
//     address: {city: 'Rio', country: 'Brasil', street: 'Ronaldi', houseNumber: 5}
// }, {
//     name: 'oleg',
//     age: 28,
//     status: false,
//     address: {city: 'Montreal', country: 'Canada', street: 'Acusto', houseNumber: 90}
// }, {
//     name: 'andrey',
//     age: 29,
//     status: true,
//     address: {city: 'Quebeck', country: 'Canada', street: 'Binaro', houseNumber: 33}
// }, {
//     name: 'masha',
//     age: 30,
//     status: true,
//     address: {city: 'Moscow', country: 'Russia', street: 'Gogolia', houseNumber: 1}
// }, {
//     name: 'olya',
//     age: 31,
//     status: false,
//     address: {city: 'Portland', country: 'USA', street: 'Forest str', houseNumber: 4}
// }, {
//     name: 'max',
//     age: 31,
//     status: true,
//     address: {city: 'Cairo', country: 'Egypt', street: 'Seashore', houseNumber: 45}
// }];
// let arr = []
// let user = null
// for (value of users){
//     arr.push(value.address) 
// }
// console.log(arr);




// let usersWithId = [{id: 1, name: 'vasya', age: 31, status: false}, {id: 2, name: 'petya', age: 30, status: true}, {id: 3, name: 'kolya', age: 29, status: true}, {id: 4, name: 'olya', age: 28, status: false},];
// let citiesWithId = [{user_id: 3, country: 'USA', city: 'Portland'}, {user_id: 1, country: 'Ukraine', city: 'Ternopil'}, {user_id: 2, country: 'Poland', city: 'Krakow'}, {user_id: 4, country: 'USA', city: 'Miami'},];
// for(value of usersWithId){
//     for(value2 of citiesWithId){
//         if(value.id == value2.user_id){
//             value.address = value2
//         }
//     }
// }
// console.log(usersWithId);



























