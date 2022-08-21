'use strict';


let allData = {}

const hugeList = (size) => [...Array(size).keys()]

// this is recursive on purpose
const reverseStr = (str) => (str === "") ? "" : reverseStr(str.substr(1)) + str.charAt(0);

// This one is safe
const reverseSafe = (str) => str.split("").reverse().join("");

let numLists = 10000
let listLength = 2000

console.time("All steps")
console.log(`Creating ${numLists} lists of ${listLength} elements`)
for (let step=0; step < numLists; step++) {
  allData[step] = hugeList(2 * 1000)
}

console.time("Stringifying")
for (let step=0; step < numLists; step++) {
  allData[step] = JSON.stringify(allData[step])
}
console.timeEnd("Stringifying")

console.time("Reversing")
for (let step=0; step < numLists; step++) {
  allData[step] = reverseStr(allData[step])
}
console.timeEnd("Reversing")

console.time("De-reversing")
for (let step=0; step < numLists; step++) {
  allData[step] = reverseStr(allData[step])
}
console.timeEnd("De-reversing")

console.time("Back to JSON")
for (let step=0; step < numLists; step++) {
  allData[step] = JSON.parse(allData[step])
}
console.timeEnd("Back to JSON")

numLists = 100
listLength = 500 * 1000
console.log(`Creating ${numLists} lists of ${listLength} elements`)
for (let step=0; step < numLists; step++) {
  allData[step] = hugeList(listLength)
}

console.time("Stringifying")
for (let step=0; step < numLists; step++) {
  allData[step] = JSON.stringify(allData[step])
}
console.timeEnd("Stringifying")

console.time("Reversing")
for (let step=0; step < numLists; step++) {
  allData[step] = reverseSafe(allData[step])
}
console.timeEnd("Reversing")

console.time("De-reversing")
for (let step=0; step < numLists; step++) {
  allData[step] = reverseSafe(allData[step])
}
console.timeEnd("De-reversing")

console.time("Back to JSON")
for (let step=0; step < numLists; step++) {
  allData[step] = JSON.parse(allData[step])
}
console.timeEnd("Back to JSON")
console.log("\n")
console.timeEnd("All steps")
