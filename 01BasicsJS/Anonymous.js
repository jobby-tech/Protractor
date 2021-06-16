

function getAge(){

    let age=0;
    
   return ()=>{
        return ++age;
    }
}

let a = getAge();


console.log(getAge());
console.log(getAge()());
console.log(a());
console.log(a());