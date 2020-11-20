// // ========= 4
// function Tags(titleOfTag, action, attrs){
//     this.titleOfTag = titleOfTag,
//     this.action = action,
//     this.attrs = attrs
// }
// let title = '<a>'
// let action = `Каждый элемент <area> определяет активные области изображения, которые являются ссылками...`
// let attrs = [
//     {titleOfAttr: 'accesskey', actionOfAttr: 'Переход к области с помощью комбинации клавиш'},
//     {titleOfAttr: 'coords', actionOfAttr: 'Устанавливает координаты активной области'}
// ]
// let a = new Tags(title, action, attrs)
// console.log(a);

// title = '<div>'
// action = `Элемент <div> является блочным элементом и предназначен для выделения фрагмента документа с целью изменения вида содержимого.`
// attrs = [
//     {titleOfAttr: 'align', actionOfAttr: 'Задает выравнивание содержимого тега <div>.'},
//     {titleOfAttr: 'title', actionOfAttr: 'Добавляет всплывающую подсказку к содержимому.'}
// ]
// let div = new Tags(title, action, attrs)
// console.log(div);

// title = '<h1>'
// action = `Так, тег <h1> представляет собой наиболее важный заголовок первого уровня`
// attrs = [
//     {titleOfAttr: 'align', actionOfAttr: 'Определяет выравнивание заголовка'},
// ]
// let h1 = new Tags(title, action, attrs)
// console.log(h1);

// // ========= 39
// class Tag{
//     constructor(titleOfTag, action, attrs){
//         this.titleOfTag = titleOfTag,
//         this.action = action,
//         this.attrs = attrs
//     }
// }
// let titleClass = '<a>'
// let actionClass = `Каждый элемент <area> определяет активные области изображения, которые являются ссылками...`
// let attrsClass = [
//     {titleOfAttr: 'accesskey', actionOfAttr: 'Переход к области с помощью комбинации клавиш'},
//     {titleOfAttr: 'coords', actionOfAttr: 'Устанавливает координаты активной области'}
// ]
// let aClass = new Tags(titleClass, actionClass, attrsClass)
// console.log(aClass);

// titleClass = '<div>'
// actionClass = `Элемент <div> является блочным элементом и предназначен для выделения фрагмента документа с целью изменения вида содержимого.`
// attrsClass = [
//     {titleOfAttr: 'align', actionOfAttr: 'Задает выравнивание содержимого тега <div>.'},
//     {titleOfAttr: 'title', actionOfAttr: 'Добавляет всплывающую подсказку к содержимому.'}
// ]
// let divClass = new Tags(titleClass, actionClass, attrsClass)
// console.log(divClass);

// titleClass = '<h1>'
// actionClass = `Так, тег <h1> представляет собой наиболее важный заголовок первого уровня`
// attrsClass = [
//     {titleOfAttr: 'align', actionOfAttr: 'Определяет выравнивание заголовка'},
// ]
// let h1Class = new Tags(titleClass, actionClass, attrsClass)
// console.log(h1Class);


// ========== 75
// let car = {
//     model: 328,
//     maker: 'BMW',
//     year: 2012,
//     maxSpeed: 250,
//     motor: 2.0,
// }
// function drive(){
//     console.log("їдемо зі швидкістю " + car.maxSpeed + " km на годину");
// }
// function info(){
//     console.log(car);
// }
// function increaseMaxSpeed (newSpeed){
//     car.maxSpeed += newSpeed
//     console.log(car.maxSpeed);
// }
// function changeYear (newValue){
//     car.year = newValue
//     console.log(car.year);
// }
// function addDriver (driver){
//     car.driver = driver
//     console.log(car);
// }
// drive()
// info()
// increaseMaxSpeed(40)
// changeYear (2014)
// addDriver ('Andrew')



// ========= 85/94
// function CarConstr (model, maker, year, maxSpeed, motor){
//     this.model = model,
//     this.maker = maker,
//     this.year = year,
//     this.maxSpeed = maxSpeed,
//     this.motor = motor
// }

// class CarClass{
//     constructor (model, maker, year, maxSpeed, motor){
//         this.model = model,
//         this.maker = maker,
//         this.year = year,
//         this.maxSpeed = maxSpeed,
//         this.motor = motor
//     }
// }


// ========= 104
// class Popelushka {
//     constructor(name, age, size){
//         this.name = name,
//         this.age = age,
//         this.size = size
//     }
// }
// let yana = new Popelushka('yana', 21, 38)
// let nastya = new Popelushka('nastya', 18, 37)
// let vika = new Popelushka('vika', 19, 39)
// let anya = new Popelushka('anya', 26, 35)
// let sasha = new Popelushka('sasha', 24, 37)
// let nelya = new Popelushka('nelya', 21, 40)
// let olya = new Popelushka('olya', 18, 36)
// let nina = new Popelushka('nina', 19, 39)
// let bogdana = new Popelushka('bogdana', 26, 35)
// let maryana = new Popelushka('maryana', 24, 37)
// let girls = []
// girls.push(yana, nastya, vika, anya, sasha, nelya, olya, nina, bogdana, maryana)
// class Princ {
//     constructor(name, age, sizeOfShoe){
//         this.name = name,
//         this.age = age,
//         this.sizeOfShoe = sizeOfShoe
//     }
// }
// let vasya = new Princ('vasya', 25, 36)
// for(value of girls){
//     if(value.size === vasya.sizeOfShoe){
//         console.log('Наша попелюшка ' + value.name);
//     }
// }


// ========= 113
function Popelushka (name, age, size){
    this.name = name,
    this.age = age,
    this.size = size
}
let yana = new Popelushka('yana', 21, 38)
let nastya = new Popelushka('nastya', 18, 37)
let vika = new Popelushka('vika', 19, 39)
let anya = new Popelushka('anya', 26, 35)
let sasha = new Popelushka('sasha', 24, 37)
let nelya = new Popelushka('nelya', 21, 40)
let olya = new Popelushka('olya', 18, 36)
let nina = new Popelushka('nina', 19, 39)
let bogdana = new Popelushka('bogdana', 26, 35)
let maryana = new Popelushka('maryana', 24, 37)
let girls = []
girls.push(yana, nastya, vika, anya, sasha, nelya, olya, nina, bogdana, maryana)
function Princ (name, age, sizeOfShoe){
    this.name = name,
    this.age = age,
    this.sizeOfShoe = sizeOfShoe
}
let vasya = new Princ('vasya', 25, 36)
function search(arr){
    for(value of arr){
        if(value.size === vasya.sizeOfShoe){
            console.log('Наша попелюшка ' + value.name);
        }
    }
}
search(girls)



























