// ========= 1
const txt = document.getElementById('text')
const btn1 = document.getElementById('deteteTxt')
btn1.onclick = () => {
    if (txt.hidden === true){
        txt.hidden = false
        return
    }
    txt.hidden = true
}


// ========= 3
const btn2 = document.getElementById('deteteBtn')
btn2.onclick = () => btn2.style.display = 'none'



// ========= 5
const age = document.getElementById('age')
const btn3 = document.getElementById('enterBtn')
btn3.onclick = () => {
    if(age.value < 18){
        console.log('Ваш вік менший за 18')
        console.log(age.value);
    } else{
        console.log('Ваш вік більший за 18')
        console.log(age.value);
    }
}


// ========= 7
const btn4 = document.getElementById('btnMenu')
const itemMenu = document.getElementById('itemMenu')
btn4.onclick = () => {
    if(itemMenu.style.display == 'block'){
        itemMenu.style.display = 'none'
        return
    }
    itemMenu.style.display = 'block'
}



// ========= 9
let comentArr = [
    {title : 'lorem', body:'lorem ipsum dolo sit ameti'},
    {title : 'lorem', body:'lorem ipsum dolo sit ameti'},
    {title : 'lorem', body:'lorem ipsum dolo sit ameti'}
]
const coment = document.getElementById('coment')
for (value of comentArr){
const div = document.createElement('div')
const h2 = document.createElement('h2')
const p = document.createElement('p')
const button = document.createElement('button')
button.innerText = 'Hide'
h2.innerText = value.title
p.innerText = value.body
button.onclick = () => {
    if(p.style.display == 'block'){
        p.style.display = 'none'
        return
    }
    p.style.display = 'block'
}
div.appendChild(h2)
div.appendChild(p)
div.appendChild(button)
coment.appendChild(div)
}



// ========= 13
const input1 = document.getElementById('input1')
const input2 = document.getElementById('input2')
const input21 = document.getElementById('input21')
const input22 = document.getElementById('input22')
const btnCons = document.getElementById('btnCons')
btnCons.onclick = () => {
    console.log(input1.value);
    console.log(input2.value);
    console.log(input21.value);
    console.log(input22.value);
}



// ========= 17
function createTable(rows, cols, tag){
    const table = document.createElement('table')
    for(let i = 0; i < rows; i++){
        const tr = document.createElement('tr')
        for(let index = 0; index < cols; index++){
            const td = document.createElement('td')
            td.innerHTML = i + '' + index
            tr.appendChild(td)
        }
        table.appendChild(tr)
    }
    tag.appendChild(table)
}
createTable(4, 8, coment)



// ========= 23
const rows = document.getElementById('rows')
const cols = document.getElementById('cols')
const content = document.getElementById('content')
const btnTable = document.getElementById('btnTable')
const divTable = document.getElementById('divTable')
btnTable.onclick = () => {
    const table = document.createElement('table')
    for(let i = 0; i < rows.value; i++){
        const tr = document.createElement('tr')
        for(let index = 0; index < cols.value; index++){
            const td = document.createElement('td')
            td.innerHTML = content.value
            tr.appendChild(td)
        }
        table.appendChild(tr)
    }
    divTable.appendChild(table)
}



// ========= 27
const slideDiv = document.getElementById('slideDiv')
const slideIMG = document.getElementsByClassName('slideIMG')
const btnLeft = document.getElementById('btnLeft')
const btnRight = document.getElementById('btnRight')
btnRight.onclick = () => {
    for(let i = 0; i < slideIMG.length; i++){
        if(slideIMG[i].style.display == 'block'){
            slideIMG[i].style.display = 'none'
            let index = i+1
            if(index >= slideIMG.length){
                index = 0
            }
            slideIMG[index].style.display = 'block'
            return
        }
    }
}
btnLeft.onclick = () => {
    for(let i = 0; i < slideIMG.length; i++){
        if(slideIMG[i].style.display == 'block'){
            slideIMG[i].style.display = 'none'
            let index = i-1
            if(index < 0){
                index = slideIMG.length - 1
            }
            slideIMG[index].style.display = 'block'
            return
        }
    }
}



// ========= 30, 37
const badWords = ['fuck', 'dick', 'shit', 'bitch']
const inputBad = document.getElementById('inputBad')
const btnBad = document.getElementById('btnBad')
btnBad.onclick = () => {
    const inputBadArr = inputBad.value.split(' ')
    for (value of badWords){
        for (index of inputBadArr){
            if (value == index){
                alert('Не цензурна лексика')
            } 
        }
    }
}



// ========= 48
let usersWithAddress = [
    {id:1,name: 'vasya', age: 31, status: false, address: {city: 'Lviv', street: 'Shevchenko', number: 16}},
    {id:2,name: 'petya', age: 30, status: true, address: {city: 'Kyiv', street: 'Shevchenko', number: 1}},
    {id:3,name: 'kolya', age: 29, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 121}},
    {id:4,name: 'olya', age: 28, status: false, address: {city: 'Ternopil', street: 'Shevchenko', number: 90}},
    {id:5,name: 'max', age: 30, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 115}},
    {id:6,name: 'anya', age: 31, status: false, address: {city: 'Kyiv', street: 'Shevchenko', number: 2}},
    {id:7,name: 'oleg', age: 28, status: false, address: {city: 'Ternopil', street: 'Shevchenko', number: 22}},
    {id:8,name: 'andrey', age: 29, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 43}},
    {id:9,name: 'masha', age: 30, status: true, address: {city: 'Kyiv', street: 'Shevchenko', number: 12}},
    {id:10,name: 'olya', age: 31, status: false, address: {city: 'Lviv', street: 'Shevchenko', number: 16}},
    {id:11,name: 'max', age: 31, status: true, address: {city: 'Ternopil', street: 'Shevchenko', number: 121}}
];
const inputFilt1 = document.getElementById('inputFilt1')
const inputFilt2 = document.getElementById('inputFilt2')
const inputFilt3 = document.getElementById('inputFilt3')
const btnFilt = document.getElementById('btnFilt')
const divUsres = document.getElementById('divUsres')
for(value of usersWithAddress){
    let userJSON = JSON.stringify(value)
    let h4 = document.createElement('h4')
    h4.innerText = userJSON
    divUsres.appendChild(h4)
}
btnFilt.onclick = () =>{
    for (value of usersWithAddress){
        let userJSON = JSON.stringify(value)
        let p = document.createElement('p')
        p.innerText = userJSON
        if(inputFilt1.checked == true){
            if(inputFilt2.checked == true){
                if(inputFilt3.checked == true){
                    if(value.status == false && value.age >= 29 && value.address.city == 'Kyiv'){
                        divUsres2.appendChild(p);
                    }
                }
                if(value.status == false && value.age >= 29  && inputFilt3.checked == false){
                    divUsres2.appendChild(p);
                }
            }
            if(inputFilt3.checked == true){
                if(value.status == false && value.address.city == 'Kyiv'  && inputFilt2.checked == false){
                    divUsres2.appendChild(p);
                }
            }
            if(value.status == false && inputFilt2.checked == false && inputFilt3.checked == false){
                divUsres2.appendChild(p);
            }
        }
        if(inputFilt2.checked == true && inputFilt1.checked == false){
            if(inputFilt3.checked == true){
                if(value.age >= 29 && value.address.city == 'Kyiv' && inputFilt1.checked == false){
                    divUsres2.appendChild(p);
                }
            }
            if(value.age >= 29  && inputFilt3.checked == false  && inputFilt1.checked == false){
                divUsres2.appendChild(p);
            }
        }
        if(inputFilt3.checked == true && inputFilt2.checked == false && inputFilt1.checked == false){
            if(value.address.city == 'Kyiv'  && inputFilt1.checked == false && inputFilt2.checked == false){
                divUsres2.appendChild(p);
            }
        }
        if(inputFilt1.checked == false && inputFilt2.checked == false && inputFilt3.checked == false){
            divUsres2.appendChild(p);
        }
    }
}
















































