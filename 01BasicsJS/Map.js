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




//*****MAP*******/

// Get an array of all names

// let NameArray = characters.map(chara =>{
//     return chara.name;
// })

// console.log(NameArray);


// // Get an array of all heights

// let HeightArray = characters.map(chara=>{
//     return chara.height;
// })
// console.log(HeightArray);
// Get an array of objects with just name and height properties

let nameHeight = characters.map((chara)=>({

    name: chara.name,
    height: chara.height
})
);
console.log(nameHeight);

// Get an array of all first names


let firstNames = characters.map(chara=>{
    
    return chara.name.split(' ')[0];
})

console.log(firstNames);