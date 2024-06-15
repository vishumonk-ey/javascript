const arr=["cpp","js","py"]
// const value=arr.forEach( (item) => {
//     console.log(item);
//     return item
// } )

// forEach doesnt returns or stores the item.
// for storing---filter

const myArr=[1,2,3,4,5,6,7]
// const newNum=myArr.filter( (item) => {
// return item>4
// } )
// console.log(newNum);
// myArr.forEach( (num) => {
//   if (num>4){
//     console.log(num);
//   }
// } )

//return me condition add krskte hain?

const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];

  let userName=books.filter( (bk) => {
    return bk.title==='Book Five'
  })

  userName=books.filter( (bk)=>bk.publish>2005 && bk.genre==='Science')

  console.log(userName);