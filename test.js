// lets expore function currying 

// first- function currying by bind

var multiply= function(x,y){
    return x*y
}

multiplyByTwo= multiply.bind(this,2)
console.log(multiplyByTwo(4))

// Second - function currying by closures

var multiply=function(x){

    return function(y){

        return x*y
    }
}

var multByTwo=multiply(2)
console.log(multByTwo(4))