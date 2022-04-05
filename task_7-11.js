// 7) Find the biggest common divisor of two inserted numbers.
    function gcd_two_numbers(x, y) {

        for(let i = x; x!==0; x = y%x){
            i = x
            y = i
        }

        return y
    }
  
//  console.log(gcd_two_numbers(12,24))



// 8) Given five numbers as input. Calculate and print the average of the numbers
    function averageNumbers (...numbers) {
        let count = 0;

        for(let i = 0; i<numbers.length; i++){
            count+= numbers[i]
        }

        return count/numbers.length

    }

//  console.log(averageNumbers(7, 52, -23, 9, -81 ))


/* 9) Given a number n ( n >= 0 ). Print n th Fibonacci number. (Fibonacci series: 0, 1, 1,
2, 3, 5, 8 …, ak = ak-1 + ak-2 ) */
function getFibonacciNumber(num){
    if(num<2){
        return num
    }
    let cur = 1
    let prev = 0

    for(let i = 2; i <= num; i++){
        let count = cur + prev
        prev = cur
        cur = count
    }
    return cur
}   

//  console.log(getFibonacciNumber(50))

//  10) What's the output?
    var t = 9;
    function test (i = 0) {
    console.log(i);
    var t = 5;
    }
// console.log(test);  
// output this function


// 11) What's the output?

  for (var i = 0; i < 3; i++) {
    setTimeout(() => console.log(i), 1);
    }
    for (let i = 0; i < 3; i++) {
    setTimeout(() => console.log(i), 1);
    }
// ???????????????????????  



//  12) What's the output?
    function sayHi() {
        // var name ;
        console.log(name);  
//      console.log(age);  // age is not defined
        var name = "Lydia";  // functional scope
        let age = 21;   // blok scope
    }
    
    sayHi() // age is not defined




//  13) What's the output?
    var t = 9;
    let d = 1;

    function test (i = 0) {
        console.log(d + i);
        var t = 5;
    }
    test(9);
//  test(‘000-error’);    syntax error
    


// 14) What's the output?
    function test (exampleFn) {
        console.log(exampleFn + 5);  // alert 14
        var t = 5;
        let i = t + k;  // 
        }

    var k = 16;
    var exampleFn = function (i) {
        console.log(i);   // this (i) function
        console.log(i(0));   // alert 5
    }
        test(9);
        exampleFn(test);
    
/* 
console 14
console this (i) function
console 5
*/



// 1) 
    let w = 156849;
    let q = w % 10;
    let e = (w - q) / 10;
    let middle = '';

    while(e > 9) {
    let k = e % 10;
    middle = k + middle;
    e = (e - k) / 10;
    }

    console.log(+(q + middle + e));
 //               9 + '5684' + 1    console 956841



// 2)
    let min = 10,max = 0;

    while(z) {         // z is not defined
        let x = z %10;
        z = (z - x) / 10;

        if (x > max) {
            max = x;
        } else if (x < min) {
            min = x;
        }
    }
    console.log(max - min);  // z is not defined
    

//  3)    
    const Factorial = (n) => {
        if (n === 0 || n === 1) return 1;
        return n * Factorial(n - 1);
    };

    const Fib = (n) => {
        if (n < 2) return n;
        return Fib(n - 1) + Fib(n - 2);
    };

    const Revers = (n) => {
        if (n === 0) return '';
        const d = n % 10;
        return +(`${d}${Revers((n - d)/ 10)}`)
    }   

    
    function memoize (fn) {
        const cache = {}
        return (n) => {
            if(cache[n] === undefined){
                cache[n] = fn(n)
            }
            return cache[n]
        }
    } 



    



