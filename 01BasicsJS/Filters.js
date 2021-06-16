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




//****FILTERS**** */
// Get characters with mass greater than 100

let greater100Mass = characters.filter(chara=>{

    return chara.mass>100;
    
})
console.log(greater100Mass);


// // Get characters with height less than 200

let lessHeight200 = characters.filter(chara =>{
    return chara.height<200;
})

console.log(lessHeight200);

// Get all male characters

let maleChars =characters.filter(chara=>{
    return chara.gender==='male';
})

console.log(maleChars);
// Get all female characters
