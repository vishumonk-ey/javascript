const num=100
console.log(num);
const newNum=new Number(100.46464)
console.log(newNum);
console.log(newNum.toString());
console.log(newNum.toFixed(2));/* number is givenn ki kitne decimal ke baad tk value chaiye */
const balance=17.689
console.log(balance.toPrecision(4)) 
// ****************4 tk number lega fir uske aage vala round off kr dega and bas 4 digits dega**************

const hundreds=100000000
console.log(hundreds.toLocaleString('en-IN')); /*comma laga ke dedega mereko but by default us stand. */

// ############## MAtHS #####################

console.log(Math.abs(-9))
console.log(Math.round(3.5));
console.log(Math.ceil(3.4));
console.log(Math.floor(3.999999));

