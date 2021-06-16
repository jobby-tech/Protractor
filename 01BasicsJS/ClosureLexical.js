

function getAge(){

    let age=0;
    
   return function incrementAge(){
        return ++age;
    }
}

let a = getAge();


console.log(getAge());
console.log(getAge()());
console.log(a());
console.log(a());