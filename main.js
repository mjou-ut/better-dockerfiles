'use strict';

const fs = require('fs');

const STEPS = 500
let allFiles = []
let elementChanged = 0


const getRandomEl = (aList) =>  aList[Math.floor(Math.random() * aList.length)];


const scrambleList = aList => {
  aList.forEach((el, idx, array) => {
    array[idx] = getRandomEl(aList);
    elementChanged += 1;
  })
}

// add some data
for (let step = 0; step < STEPS; step++) {
    let data = fs.readFileSync('data-1000.json');
    let parsed = JSON.parse(data);
    allFiles.push(parsed);
}

console.log(`Total files loaded: ${allFiles.length}`);

// messy contents
for (let step = 0; step < STEPS * 10; step++) {
    allFiles.forEach((list) => scrambleList(list))
}

console.log(`Changed: ${elementChanged} elements`);
