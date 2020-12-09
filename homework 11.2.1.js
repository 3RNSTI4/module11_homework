let arr = [15, 24, 38, 0, 1, 97, 'l'];
const countEvenOddNumbers = arr => {
let zero = 0;
let oddNumbers = 0;
let evenNumbers = 0;
arr.map (i=> {
  if (i === 0) return zero++
  if (typeof i !== 'number') return null
  if (i%2 === 0) return evenNumbers++
  return oddNumbers++
})
console.log ('Number of even numbers is:', evenNumbers);
console.log ('Number of odd numbers is:', oddNumbers);
console.log ('Number of null numbers is:', zero);
}
countEvenOddNumbers (arr);