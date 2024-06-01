const specificIndex = (arr,index,number)=>{
    const firstArr = arr.slice(0,index);
    const lastArr = arr.slice(index);
    return [...firstArr,number,...lastArr].flat()
}

let arr = [1,2,3,4,5,6];
let index = 3;
let number = [10,11];

console.log(specificIndex(arr,index,number)) // [ 1, 2, 3, 10, 11, 4, 5, 6 ]