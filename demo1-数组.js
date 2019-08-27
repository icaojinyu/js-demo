/**
 * push pop shift unshift
 *
 * sort reverse
 *
 * join concat slice splice
 *
 * indexOf lastIndexOf
 *
 * forEach map filter some every
 *
 * Array.from Array.of Array.isArray
 *
 * find findIndex
 *
 * includes fill
 *
 */

let arr = [3, 7, 1, 5, 9, NaN]

// function bubbleSort(arr) {
//   for (let i = 0; i < arr.length - 1; i++) {
//     for (let j = 0; j < arr.length - 1 - i; j++) {
//       if (arr[j] > arr[j + 1]) {
//         [arr[j], arr[j + 1]] = [arr[j], arr[j + 1]]
//       }
//     }
//   }
//   return arr
// }
// console.log(bubbleSort(arr))
//
// console.log(arr.push('hello', 'world'))
// console.log(arr)

// console.log(arr.join())
// console.log(arr.join(''))
// console.log(arr.join(' '))
// console.log(arr.join(','))
// console.log(arr.join('|'))

// console.log(arr.concat('hello', 'world', 111, ['add0', 'add1', [1, 2, 3]]))
// console.log(arr.slice(2, -1))

// let res = arr.splice(0, 1, 'add0', 'add1')
// console.log(res)
// console.log(arr)

// console.log(arr.indexOf(3))
// console.log(arr.indexOf(9))
// console.log(arr.indexOf(10))

// console.log(arr.lastIndexOf(9, 2))
//
// arr.sort((a, b) => a - b)
// console.log(arr)

// arr.sort((a, b) => b - a)
// console.log(arr)
// console.log(arr.reverse())
// console.log(arr)


// let res = arr.forEach(function (item, index) {
//   console.log(item)
//   console.log(index)
// })
//
// console.log(res)

// let res = arr.map(function (item, index) {
//   if (item > 3) {
//     return item * 2
//   } else {
//     return item
//   }
// })
//
// console.log(res)
//
// let res = arr.filter(function (item, index) {
//   return item > 4
// })
//
// console.log(res)

// let res = arr.some(function (item,index) {
//   return item>9
// })
// console.log(res)

// let res = arr.every(function (item) {
//   return item < 8
// })
//
// console.log(res)

// console.log(Array.isArray(arr))
// console.log(Array.of(1, 2, 3))

// console.log(Array.from({0: 'hello', 1: 'world', 2: 'I love you', length: 3}))

// console.log(Array.of(undefined,null,function hello() {
//
// }))

// let res = arr.find(function (item,index) {
//   return item >3
// })
//
// console.log(res)
//
// let res = arr.findIndex(function (item,index) {
//   return item === 9
// })
//
// console.log(res)

// console.log(arr.includes(NaN))

// console.log(arr.fill('love'))
// console.log(arr)
