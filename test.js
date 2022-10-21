// Deliverable 1
var emp={
id:1,
name:'abc',
city:'noida'
}

var withstate= function(state, country){

    return this.city + ' '+state + ' '+ country
}

// use of call
var a=withstate.call(emp,'up','india')
console.log(a)

// use of apply
var b=withstate.apply(emp,['Uttar Pradesh', 'Bharat'])
console.log(b)

// use of bind

var c=withstate.bind(emp)

console.log(c('mumbai','maharashtra'))


//Deliverable 2

var student= {age:20}

var printAge=function(){

    return this.age
}

console.log(printAge.call(student))