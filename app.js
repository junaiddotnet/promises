
const express = require('express');
const app  =  express();

function first(){
    // Simulate a code delay
    setTimeout( function(){
      console.log(1);
    }, 5000 );
  }
  function second(){
    console.log(2);
  }





function loadImage(url,success,error)
{
    if (url==1)
    {
        success(1);
    }
    else
    {
        error(2);
    }
}

function loadImageFirst(url)
{
    var promise = new Promise(
    function resolver (resolve,reject)
    {
        if (url==1)
        {
            resolve(1);
        }
        else
        {
            reject(2);
        }

    }
    );
    return promise;
}

function promiseLoadImage(url)
{
    var promise = new Promise(
        function resolver (resolve,reject)
        {
            if (url==1)
            {
                resolve(1);
            }
            else
            {
                reject(2);
            }
        }
    );
    return promise;
}

var promise  = promiseLoadImage(1);
promise.then(function(v){
    console.log("Promise return value .."+v);
});
promise.catch(function(v){
    console.log("error from promise "+v);
});
var cities = ['junaid','mahmood','sara','ammar','samra'];
cities.forEach(function callback(data){
    console.log(data);
});

function marco() {
    console.log('polo');
    }
setTimeout(marco, 0); // zero delay
console.log('ready when u here...');
app.get('/',function(req,res){
    // loadImage(2,function onsuccess(v){
    //     console.log("succwss"+v);
    // },function onerror(v){
    //     console.log("failt"+v);
    // });
    // console.log("testing");
    loadImageFirst(2).then(function(v){
        console.log(1)
    }).catch(function(e){
        console.log(2);
    });
    res.send("end of end pont");
 });

app.listen(3000,function(){
    console.log('server is running..');
});