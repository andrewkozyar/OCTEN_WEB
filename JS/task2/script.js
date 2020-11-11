// ========= 1-5
/*
let msf1 = [1, 2, 3, 4, 5];
let msf2 = ['one', 'two', 'three', 'four', 'five'];
let msf3 = [1, 'one', 'two', true, false];
let msf4 = [];

msf4.push(1, 'one', true);

console.log(msf1, msf2, msf3, msf4);
*/


// ======== 7-10
/*
let msf1 = ['<div>one</div>', '<div>two</div>', '<div>three</div>', '<div>four</div>', '<div>five</div>', '<div>six</div>', '<div>seven</div>', '<div>eight</div>', '<div>nine</div>', '<div>ten</div>']
let msf2 = ['<div>1 one</div>', '<div>2 two</div>', '<div>3 three</div>', '<div>4 four</div>', '<div>5 five</div>', '<div>6 six</div>', '<div>7 seven</div>', '<div>8 eight</div>', '<div>9 nine</div>', '<div>10 ten</div>']

for (let i = 0; i < 10; i++){
    document.write(msf1[i])
}
for (let i = 0; i < 10; i++){
    document.write(msf2[i])
}

let msf3 = ['<h1>one</h1>', '<h1>two</h1>', '<h1>three</h1>', '<h1>four</h1>', '<h1>five</h1>', '<h1>six</h1>', '<h1>seven</h1>', '<h1>eight</h1>', '<h1>nine</h1>', '<h1>ten</h1>', '<h1>eleven</h1>', '<h1>twelve</h1>', '<h1>thirteen</h1>', '<h1>fourteen</h1>', '<h1>fiveteen</h1>', '<h1>sixteen</h1>', '<h1>seventeen</h1>', '<h1>eighteen</h1>', '<h1>nineteen</h1>', '<h1>twenty</h1>']
let msf4 = ['<h1>1 one</h1>', '<h1>2 two</h1>', '<h1>3 three</h1>', '<h1>4 four</h1>', '<h1>5 five</h1>', '<h1>6 six</h1>', '<h1>7 seven</h1>', '<h1>8 eight</h1>', '<h1>9 nine</h1>', '<h1>10 ten</h1>', '<h1>eleven 11</h1>', '<h1>twelve 12</h1>', '<h1>thirteen 13</h1>', '<h1>fourteen 14</h1>', '<h1>fiveteen 15</h1>', '<h1>sixteen 16</h1>', '<h1>seventeen 17</h1>', '<h1>eighteen 18</h1>', '<h1>nineteen 19</h1>', '<h1>twenty 20</h1>']

let i = 0
while (i < 20){
    document.write(msf3[i])
    i++
}
let i1 = 0
while (i1 < 20){
    document.write(msf4[i1])
    i1++
}
*/


// ========= 11-13
/*
let msf1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let msf2 = ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten'];
let msf3 = [1, 2, 3, 4, 'one', 'two', 'three', 'four', true, false];

for (let i = 0; i < msf1.length; i++){
    console.log(msf1[i])
}
for (let i = 0; i < msf2.length; i++){
    console.log(msf2[i])
}
for (let i = 0; i < msf3.length; i++){
    console.log(msf3[i])
}
*/


// ========= 14-16
/*
let msf = [4, 'two', 3, 1, 'three', true, 'four', 2, false, 'one'];

for (let i = 0; i < msf.length; i++){
    if (typeof msf[i] == 'boolean'){
        console.log(msf[i])
    }
}
for (let i = 0; i < msf.length; i++){
    if (typeof msf[i] == 'number'){
        console.log(msf[i])
    }
}
for (let i = 0; i < msf.length; i++){
    if (typeof msf[i] == 'string'){
        console.log(msf[i])
    }
}
*/


// ========= 17
/*
let msf = []
msf[0] = 0
msf[1] = 1
msf[2] = 2
msf[3] = 3
msf[4] = 'four'
msf[5] = 'five'
msf[6] = 'six'
msf[7] = 'seven'
msf[8] = true
msf[9] = false
console.log(msf)
*/


// ========= 18-23
/*
for (let i = 0; i < 10; i++){
    console.log(i)
    document.write(i)
}
console.log('_________________')
document.write('<br>')
for (let i = 0; i < 100; i++){
    console.log(i)
    document.write(i)
}
console.log('_________________')
document.write('<br>')
for (let i = 0; i < 100; i += 2){
    console.log(i)
    document.write(i)
}
console.log('_________________')
document.write('<br>')
for (let i = 1; i < 100; i += 2){
    console.log(i)
    document.write(i)
}
console.log('_________________')
document.write('<br>')
for (let i = 0; i < 100; i += 2){
    console.log(i)
    document.write(i)
}
*/


// ========= 24
/*
for (let i = 0; i < 60; i++){
    console.log('00:' + i)
}
for (let i = 0; i < 60; i++){
    console.log('01:' + i)
}
console.log('02:00')
*/


// ========= 25
/*
for (let i = 0; i < 60; i++){
    console.log( '00:' + i + ':00')
}
for (let i = 0; i < 60; i++){
    console.log('01:' + i + ':00') 
}
for (let i = 0; i <= 20; i++){
    console.log('02:' + i + ':00') 
}
*/


// // ========= 37

// let arr = [ 'a', 'b', 'c'];
// for (let i = 1; i < 4; i++) {
//    arr.push(i)
// }
// console.log(arr)


// // ========= 38

// let arr = [1, 2, 3]
// arr[0] = 3
// arr[1] = 2
// arr[2] = 1
// console.log(arr)


// // ========= 39

// let arr = [1, 2, 3]
// arr.push(4)
// arr.push(5)
// arr.push(6)
// console.log(arr)


// // ========= 40
 
// let arr = [1, 2, 3]
// arr.unshift(6)
// arr.unshift(5)
// arr.unshift(4)
// console.log(arr)


// // ========= 41, 42

// let arr=['js', 'css', 'jq']

// let a = arr.shift()
// let b = arr.pop()
// console.log(a);
// console.log(b);


// ======== 43-45

// let arr = [1, 2, 3, 4, 5]

// console.log(arr.slice(3));
// console.log(arr.slice(0, 2));

// arr.splice(1,2)
// console.log(arr);

// arr.splice(3, 0, 'a', 'b', 'c')
// console.log(arr)

// arr.splice(1, 0, 'a', 'b')
// arr.splice(6, 0, 'c')
// arr.splice(8, 0, 'e')
// console.log(arr)


// // ========= 48

// let arr = [2,17,13,6,22,31,45,66,100,-18]

// for (let i = 0; i < arr.length; i++){
//     if (arr[i] % 2 == 0) {
//         console.log(arr[i])
//     }
// }


// ========= 49

// let arr = [2,17,13,6,22,31,45,66,100,-18]
// let arr2 = []
// for (let i = 0; i < arr.length; i++){
//     arr2.push(arr[i])
// }
// console.log(arr2)


// ========= 55-68

let arr = [2,17,13,6,22,31,45,66,100,-18]

let i = 0
// while (i < arr.length){
//     console.log(arr[i])
//     i++
// }

// for (let i = 0; i<arr.length; i++){
//     console.log(arr[i])
// }

// while (i < arr.length){
//     console.log(arr[i])
//     i+=2
// }

// for (let i = 0; i<arr.length; i+=2){
//     console.log(arr[i])
// }

// while (i < arr.length){
//     if (arr[i] % 2 == 0){
//         console.log(arr[i])
//     }
//     i++
// }

// for (let i = 0; i<arr.length; i++){
//     if (arr[i] % 2 == 0){
//         console.log(arr[i])
//     }
// }

// for (let i = 0; i<arr.length; i++){
//     if (arr[i] % 3 == 0){
//         arr[i] = 'okten'
//     }
// }
// console.log(arr)

// for (let i = 9; i >= 0; i--){
//     console.log(arr[i])
// }

//     let i2 = 9
//     while (i2 >= 0){
//         console.log(arr[i2])
//         i2--
//     }
    
//     for (let i = 9; i >= 0; i--){
//         console.log(arr[i])
//     }
    
//     while (i2 >= 0){
//         console.log(arr[i2])
//         i2-=2
//     }
    
//     for (let i = 9; i >= 0; i-=2){
//         console.log(arr[i])
//     }
    
//     while (i2 >= 0){
//         if (arr[i2] % 2 == 0){
//             console.log(arr[i2])
//         }
//         i2--
//     }
    
//     for (let i = 9; i >= 0; i--){
//         if (arr[i] % 2 == 0){
//             console.log(arr[i])
//         }
//     }
    
//     for (let i = 9; i >= 0; i--){
//         if (arr[i] % 3 == 0){
//             arr[i] = 'okten'
//         }
//     console.log(arr[i])
//     }
   

let arr2 = []

// for (let i = 0; i < 10; i++) {
//     for (let i2 = 0; i2 < arr.length; i2++){
//         if(arr[i2] % 2 == 0) {
//             arr2.push(arr[i2])
//         }
//         if(arr2.length == 50){
//             break
//         }
//     } 
//     if(arr2.length == 50){
//         break
//     }
// }
// console.log(arr2)

for (let i = 0; i < 15; i++) {
    for (let i2 = 0; i2 < arr.length; i2++){
        if(arr[i2] % 2 == 1) {
            arr2.push(arr[i2])
        }
        if(arr2.length == 50){
            break
        }
    } 
    if(arr2.length == 50){
        break
    }
}
console.log(arr2)


























