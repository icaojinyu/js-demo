// 击鼓传花
function fn() {
  let arr = []
  for (let i = 0; i < 50; i++) {
    arr.push(i + 1)
  }
  while (arr.length > 1) {
    for (let i = 0; i < 2; i++) {
      arr.push(arr.shift())
    }
    arr.shift()
  }
  return arr
}

// console.log(fn())

// -----------------------------

// let arr = [3, 7, 1, 5, 9, 5, 8, 2]

// 冒泡排序
function bubbleSort(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = 0; j < arr.length - 1 - i; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]
      }
    }
  }
  return arr
}

// console.log(bubbleSort(arr))

// 快速排序
function quickSort(arr) {
  if (arr.length <= 1) {
    return arr
  }
  let mid = ~~(arr.length / 2)
  let base = arr.splice(mid, 1)[0], left = [], right = []
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < base) {
      left.push(arr[i])
    } else {
      right.push(arr[i])
    }
  }
  return quickSort(left).concat(base, quickSort(right))
}

// console.log(quickSort(arr))

// -----------------------------

// 对象深拷贝
function deepCopy(obj) {
  let res = Array.isArray(obj) ? [] : {}
  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      if (typeof obj[key] === 'object' && obj[key] !== null) {
        res[key] = deepCopy(obj[key])
      } else {
        res[key] = obj[key]
      }
    }
  }
  return res
}

// let obj = {
//   name: 'cjy',
//   age: 17,
//   hobbies: ['code', 'read', 'girls']
// }
//
// let obj2 = deepCopy(obj)
// // console.log(obj2)
// obj2.name = 'mike'
// obj2.hobbies = [1, 2, 3, 4]
// console.log(obj2)

// -----------------------------