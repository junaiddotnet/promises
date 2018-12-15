var functionobject = {};
functionobject.first   = function()
{
    console.log("first object functions ..");
};
functionobject.first();


var functionObjectSecond  = {
    greeting:'hello there',
    methodfirst : function()
    {
        console.log("second object")
    }
};

functionObjectSecond.methodfirst();

var classobject  = function()
{
    this.greeting='hellio';
    this.fistObjectClass = function()
    {
        console.log(3333);
    }
    this.secobdObjectClass  = function()
    {
        console.log(999999);
    }

}
var aa = new  classobject();
