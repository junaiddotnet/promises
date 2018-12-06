

var user = {
    authenticated:false,
    Login:function(){
        this.authenticated = new Promise(
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
        return this.authenticated;
    }
    
};

function accountCheck(account)
{
    var promise = new Promise(
        function resolver (resolve,reject)
        {
            if (account=="Current Account")
            {
                resolve({name:account,value:100});
            }
            else if (account=="Standard Account")
            {
                resolve({najme:account,value:400});
            }
            else if (account=="Saving Account")
            {
                resolve({name:account,value:900});
            }
            else
            {
                reject(0);
            }
        }
        );
        return promise;
}
function showMenue()
{
    if (user.authenticated==false)
    {
        user.Login().then(function(v){
            console.log(v);
        });
    }
   
    

};

function accountFunction()
{
    var accounts =["Current Account","Standard Account","Saving Account"];
    //accounts.forEach(function(data){
        //accountCheck(data).then(function(v){
            //console.log(v);
        //});
    
//});
var requests = accounts.map(function (account) {
        return accountCheck(account);
    });
    Promise.all(requests).then(function(v){
        console.log(v);
    });
}



//showMenue();
//showMenue();
accountFunction();
console.log("LastTime");

