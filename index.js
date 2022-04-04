//  1)Given a number print its digits count.  
    
function digitsCount (val) {
//you dont need split
    let num = val.toString().split('').length
    return val<0 ? num-1 : num
    
}

console.log(digitsCount(-75694))

// 2) Count numbers of digit 9 in a number

function digit9 (val) {
//write it using one loop
    let splitArr = val.toString().split('') 
    return splitArr.filter((val)=> val === '9').length
    
}

console.log(digit9(15994949))

// 3) -Given two numbers. Print powers of 2 between that numbers. (without using Math.pow)

function beteweenNumbers (start, end) {
    let x = 1
    let betArr = [];
    while(x<start){
        x *= 2
    }
    while(x<end){
        betArr.push(x)
        x *= 2
    }
    return betArr
}

console.log( beteweenNumbers(0,47) )

// 4) Given a number as input, insert dashes (-) between each two even numbers.


function twoEwensDashed (val) {
    let valStr = val.toString().split('')
    let newValStr = ''

    valStr.forEach((val, i)=>{
        if( val%2 === 0 && valStr[i+1] %2 ===0 ){
            newValStr += `${val}-`
        }else{
            newValStr += val
        }
    })

    return newValStr
    

}

console.log( twoEwensDashed(234408114566) )


/*  5) An Armstrong number is a 3 digit number for which sum of cube of its digits is equal
to the number itself. Write a program to check whether the given number is an
Armstrong number.  */

function checkArmstrongNumber (val) {
    let valStr = `${val}`
    let count = 0
    
    for(let i = 0; i<valStr.length; i++){
        count += Math.pow(valStr[i], valStr.length) 
    }

    if(count === val){
        console.log('yes')
    }else{
        console.log('no')
    }
}

console.log(checkArmstrongNumber(371))


//  6) Given a positive number. Print it in reverse order.

function reverseNumber (val) {
    let strNum = val.toString().split('')
    let newNumber = ''
    let chekMinus = 0
    if(strNum[0] === '-'){
        newNumber += '-'
        chekMinus =1
    }

    for(let i = strNum.length-1; i>=chekMinus; i--){
        newNumber += strNum[i]
    }

    return newNumber
}

console.log(reverseNumber(-156))






