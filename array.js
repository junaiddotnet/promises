var arr  = [1,2,3,4,5,6,7,8,9,10,11,12,13];
var arr2 = Array.from(arr);
console.log(arr);

arr.shift();
console.log(arr);
arr.unshift(999);
console.log(arr);
arr.splice(0,1);
console.log(arr);
arr.splice(1,0,1,11,23,333);
console.log(arr);
console.log("---------------------------------------");
arr2.fill(1621,0,1);
console.log(arr2);
console.log("------------------");
arr2.reverse();
console.log(arr2);