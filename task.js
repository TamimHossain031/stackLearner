const deleteByIndex = (arr,index)=>{
    let tobeDelete = arr[index];
    
    let filteredArray= arr.filter(single=> single != tobeDelete)
    
    return filteredArray;
}
let data=[1,2,3,4,5,6,7,8];
let index = 3;
 console.log(deleteByIndex(data,index))