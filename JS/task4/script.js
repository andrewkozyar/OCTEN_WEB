// ========= 1-2

// function logArr(arr){
// return [arr]
// }
// logArr(Math.random() * (10 - 0) + 0)


// ========= 3-5

// function min (one, two, three){
//     if (one < two && one < three){
//         console.log(one);
//         return one
//     }
//     if (two < one && two < three){
//         console.log(two);
//         return two
//     }
//     if (three < two && three < two){
//         console.log(three);
//         return three
//     }
// }

// function max (one, two, three){
//     if (one > two && one > three){
//         console.log(one);
//         return one
//     }
//     if (two > one && two > three){
//         console.log(two);
//         return two
//     }
//     if (three > two && three > two){
//         console.log(three);
//         return three
//     }
// }

// function minMax (){
//     let min = arguments[0]
//     let max = arguments[0]
//     for(value of arguments){
//         if(value >= max){
//             max = value
//         }
//         if(value <= min){
//             min = value
//         }
//     }

//     console.log(max);
//     return min
// }
// minMax(100, 332, 204, 341, 1, 53)



// ========= 7-8

let arr = [3, 8, 0, 5]


// function arrMax (arr){
//     let max = arr[0]
//     for(value of arr){
//         if(value > max){
//             max = value
//         }
//     }
//     return max
// }
// function arrMin (arr){
//     let min = arr[0]
//     for(value of arr){
//         if(value < min){
//             min = value
//         }
//     }
//     return min
// }
// console.log(arrMin(arr))


// ========= 9
// function arrSum(arr){
//     let sum = 0
//     for(value of arr){
//         sum += value
//     }
//     return sum
// }
// console.log(arrSum(arr));


// ========= 10
// function arrSum(arr){
//     let sum = 0
//     for(value of arr){
//         sum += value
//     }
//     sum = sum / arr.length
//     return sum
// }
// console.log(arrSum(arr));


// ========= 11
// function len (arr){
//     return arr.length
// }
// console.log(len(arr));


// ========= 13
// let arr1 = [2,6,7,13]
// let arr2 = [18,9,0,4]
// let arrS = []
// function sumArr (array1, array2) {
//     for (let i = 0; i < arr1.length; i++){
//         arrS.push (arr1[i] + arr2[i])
//     }
// }
// sumArr (arr1, arr2)
// console.log(arrS);


// ========= 19
function arrI (arr, i){
    let num = arr[i+1]
    arr[i+1] = arr[i]
    arr[i] = num
}
arrI(arr, 2)
console.log(arr);


// ======== 20
// function arr0 (arr){
//     for(let i = 0; i < arr.length; i++){
//         if (arr[i] === 0){
//             arr.push (0)
//             arr.splice(i, 1)   
//         }
//     }
// }
// arr0(arr)
// console.log(arr);


// ========= 28
// function hello (){
//     document.write('Hello owu')
// }
// hello()


// ========= 29
// function body(str, type){
//     let tag = document.createElement(type)
//     tag.innerHTML = str
//     document.body.appendChild(tag)
// }
// body('hello', 'hr')


// ========= 36
// let usersWithId = [{id: 1, name: 'vasya', age: 31, status: false}, {id: 2, name: 'petya', age: 30, status: true}, {id: 3, name: 'kolya', age: 29, status: true}, {id: 4, name: 'olya', age: 28, status: false},];
// let citiesWithId = [{user_id: 3, country: 'USA', city: 'Portland'}, {user_id: 1, country: 'Ukraine', city: 'Ternopil'}, {user_id: 2, country: 'Poland', city: 'Krakow'}, {user_id: 4, country: 'USA', city: 'Miami'},];
// function usersWithCities (users, cities){
//     for(value of users){
//         for(value2 of cities){
//             if(value.id == value2.user_id){
//                 value.address = value2
//             }
//         }
//     }
// }
// usersWithCities(usersWithId, citiesWithId)
// console.log(usersWithId);


// ========= 90
// let n = 1024
// let step2 = 1
// for(let i = 2; i <= 999999; i *= 2){
//     step2 = i
//     if (n == step2){
//         break
//     }
// }
// if(n === step2){
//     console.log('YES');
// } else {
//     console.log('NO');
// }




























