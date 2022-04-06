//  1. Given an array of numbers. Write a function to separate odd and even numbers in
//     different arrays.
function getOddEvenArrays (arr) {
    arr = arr.filter((val) => val !== 0)         // 0 not is even number
    const oddArr = arr.filter((val) => val%2 !== 0)
    const evenArr = arr.filter((val) => val%2 === 0)

    console.log(oddArr,evenArr)
    
}

 getOddEvenArrays([0,1,2,3,4,5])


// 2. Given an array of numbers. Find the sum of even numbers.
function getSumEvenNumbers(arr){
    return arr.reduce((aggr,val)=> {
        if( val%2 === 0 ){
            return aggr+val
        }else{
            return aggr
        }
    },0)
}

console.log(getSumEvenNumbers([0,1,2,3,4,5]))


// 3. Given an array of primitive elements. Return its clone.
function getCloneArray(arr){
    return JSON.parse(JSON.stringify(arr))
}


// 4. Given 2 arrays. Return array with duplicate items.
function getDuplArrItems(arr1, arr2) {
    
    return arr1.filter((val1) => {
        return arr2.reduce((aggr,val2)=>{
            if(val1 === val2){
                return true
            }
            return aggr
        },false)
    })
}

console.log(getDuplArrItems([1,2,3],[2,3,4]))


// 5. Given an array of items. Return compacted(without falsy values)
function getArrTruthy(arr){
    return arr.filter((val) => val)
}

console.log(getArrTruthy([0,1,'',3,null]))


// 6. Given an array and element. Check if array includes that element
function checkElement(arr, ell) {
    return arr.reduce((aggr,val) => {
        if(val === ell) {
            return 'Yes'
        }else{
            return aggr
        }
    },'No')
}

console.log(checkElement([1,2,'name'], 'name'))

// Given an array and element. Return element’s index
function getIndexEl(arr, ell) {
    return arr.reduce((aggr, val, i) => {
        if(ell === val){
            return i
        }else{
            return aggr
        }
    }, -1)
}

console.log(getIndexEl([1,2,3],2))


// 8. Given an object. Return array of it’s keys.
function getArrKeysObj(obj) {
    return Object.keys(obj)
}
console.log(getArrKeysObj({name: 'Joe', age: 27}))


// 9. Given an object. Return array of it’s values
function getArrvaluessObj(obj) {
    return Object.values(obj)
}

console.log(getArrvaluessObj({name: 'Joe', age: 27}))


// 10. Given an array. Reverse it.
function getReverseArr(arr){
    // return arr.reverse()
    return arr.map((val,i) => arr[arr.length-(i+1)] )
}

console.log(getReverseArr([1,2,3,'54']))


// 11. Given an object. Return array of formatted strings(“key : value”)
function getStrObj(obj) {
    const keys = Object.keys(obj)
    const values = Object.values(obj)

    return keys.map((key,i) => `${key} : ${values[i]}`)
}

console.log(getStrObj({name:'Mike', age: 18}))


// 12. Given a string, reverse it.
function getRevStr(str) {
    let revStr = ''
    for(let i = str.length-1; i>=0; i--){
        revStr += str[i]
    }

    return revStr
}

console.log(getRevStr('City230'))


// 13. Write a function that calculates sum, difference, multiplication and division between
// given array elements depending on passed operation symbol. Write appropriate
// function for each operation. ????????????????????



//                         Nested Loops, Arrays, Strings

// 1. Given an array․ Compute the length of the array. (without using .length)
function getLengthArr(arr) {
    return arr.reduce((aggr, val, i ) => {
        return i+1
    },0)
}

console.log(getLengthArr([-1,0.4]))


// 2. Given an array of numbers. Print the sum of the elements in array.
function getSumElls(arr) {
    return arr.reduce((aggr,val) => aggr+val , 0)
}

console.log(getSumElls([-1,0.4]))


// 3. Given three numbers a, b (a ≤ b) and step. Create an array of evenly spaced
//    elements starting from a to b spaced by step.
function aTob( start, end, count) {
    const arr = []
    for(let i = start; i<=end; i+=count) {
        arr.push(i)
    }
    return arr
}

console.log(aTob( 1, 5, 0.5 ))


//  4. Given an array of numbers. Find the maximum element in array
function getMaxElArr(arr) {
    return arr.reduce((aggr,val)=> val>aggr? val: aggr ,arr[0])
}

console.log(getMaxElArr([200,110,1,23]))


//  5. Given an array of strings. Print the concatenation of all elements.
function printConcatEls(arrStr) {
    const newStr = arrStr.reduce((aggr,val) => aggr+val ,'')
    console.log(newStr)
}

printConcatEls(['a','b','c'])


//  6. Given an array. Create the array which elements are products between two neighbours.
function neighbours(arr) {
    const newArr = arr.map((val,i) => {
        if(i+1 !== arr.length){
            return val*arr[i+1]
        }
        
    })
    newArr.pop()
    return newArr
}

console.log(neighbours([1,1,4,32,6]))



