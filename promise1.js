const express = require('express');
const app  =  express();

var user = {
    profilePromise :null,
    getProfile:function()
    {

        this.profilePromise = new Promise(
            function resolver (resolve,reject)
            {
                if (true)
                {
                    resolve(11111111);
                }
                else
                {
                    reject(222222222);
                }
        
            }
            );
        return this.profilePromise;
    }

};
var navBar  = {
    show:function(user){
        user.getProfile().then(function(v){
            console.log(v);
        });
    }
};
console.log(user.profilePromise);
navBar.show(user);
console.log(user.profilePromise);

navBar.show(user);
console.log(3333);
app.listen(3000,function(){
    console.log("promise 1 is runign");
});