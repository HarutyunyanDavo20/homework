// findLongestWordLength("The quick brown fox jumped over the lazy dog") should return a number.

// findLongestWordLength("The quick brown fox jumped over the lazy dog") should return 6.

// findLongestWordLength("May the force be with you") should return 5.

// findLongestWordLength("Google do a barrel roll") should return 6.

// findLongestWordLength("What is the average airspeed velocity of an unladen swallow") should return 8.

// findLongestWordLength("What if we try a super-long word such as otorhinolaryngology") should return 19.

//  findLongestWordLength("The quick brown fox jumped over the lazy dog");
//----------------------------------------------------------------------------------

//function findLongestWordLength(str) {
    //grel code vor@ kveradarcni amenaerkar bari tareri qanak@, verevum aveli manramasn

    function findLongestWordLength (string) {
        if(typeof string === 'string'){
            let arr = string.split(' ')
        let a = arr.reduce((aggr,val)=>{
            if(aggr < val.length){
                return val.length
            }else{
                return aggr
            }
        },0)
    
         console.log(a)
        }
        
    }
    findLongestWordLength("What if we try a super-long word such as otorhinolaryngology")

  

  
  //2)grel function vor@ stanum e array ev veradarcnum nor array krkvnexner@ jnjac;

    function getNewArray (arr){

        let a = arr.filter((val, i)=>{
            for(let g=arr.length; g>i; g--){
                if(arr[g] === val){
                    return false
                }
            }
            return true
        })

        return a
        
    }
    console.log(getNewArray([0,0,1,1,2,2,3,3,3]))
  //3)
  //catarel cankacac objecti deep copy

    function getDeepObjCopy(obj) {
      return JSON.parse(JSON.stringify(obj))  
    }


    let a = {
        name:'Dav'
    }
    let b = getDeepObjCopy(a)
    b.name = 'asd'

    console.log(a)
    console.log(b)
  
  //4 grel function vor stanum e argument object u veradarcnum nor object bayc key u value texerov poxvac;

  function getReverseKeysObj(obj) {
    const keys = Object.keys(obj)
    const values = Object.values(obj)
    const newObj = {}

    keys.forEach((key, i)=>{
        newObj[values[i]] = key
    })

    return newObj
  }

  console.log(getReverseKeysObj({
      name: "Davit",
      age: '23',
  }))
  