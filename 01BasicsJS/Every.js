
const characters = [
    {
        name: 'Luke Skywalker',
        height: '172',
        mass: '77',
        eye_color: 'blue',
        gender: 'male',
    },
    {
        name: 'Darth Vader',
        height: '202',
        mass: '136',
        eye_color: 'yellow',
        gender: 'male',
    },
    {
        name: 'Leia Organa',
        height: '150',
        mass: '49',
        eye_color: 'brown',
        gender: 'female',
    },
    {
        name: 'Anakin Skywalker',
        height: '188',
        mass: '84',
        eye_color: 'blue',
        gender: 'male',
    },
];


// Does Every Chacracter have blue eyes


let EveryBlue= characters.every((chara)=>{
    return chara.eye_color==='blue';
})
console.log(EveryBlue);


// Does Every Chacracter weigh more than 40 

let EveryWeigh = characters.every((chara)=>{
    return chara.mass>40
}) 
console.log(EveryWeigh);

// Does Every Chacracter taller than 200

// IS Every Chacracter male 

