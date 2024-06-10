const myHero=["mitthu","shaktimaan","pomi"]
const genZhero=['flash','bts']

// myHero.push(genZhero) /* last me array lo hi as an element daal dega */
// console.log(myHero);
console.log(myHero.concat(genZhero))
// spread out methoddddddddd
 const allHeroes=[...genZhero,...myHero]

let nonUsableArray=[1,2,3,[4,5,6],[[7,8,9]]]
console.log(nonUsableArray.flat(2)) /* to remove array ke andar array and give depth also ki kitne andar tk ke array ko hatana haiiii */
console.log(Array.isArray(false));
console.log(Array.from('vishal'));
console.log(Array.from({name:"vishal",})); /*will return an empty string because vo confused hai ki value ka array banana hai ya name ka ------ interview important*/ 
let score1="10"
let score2=20
console.log(Array.of(score1,score2));
console.log(Array.of('1',2,'5'))