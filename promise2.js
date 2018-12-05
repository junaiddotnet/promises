

var promise = new Promise(function(resolve,reject){
    console.log("inside the promise resolver");
    reject();
});


promise.then(function(){
    console.log("resolved ..");
}).then(function(){
    console.log("step 2");
}).then(function(){
    console.log("step 3");
}).catch(function(){
    console.log("error in promise");
});

console.log("Last Time of Code");