var modulefirs  = modulefirs || {};
var Westeros = Westeros || {};
 Westeros.Structures = Westeros.Structures || {};
modulefirs.firstfunction = function()
{
    console.log(33);
}

modulefirs.Castle = function(name)
{
    this.name = name;
}
modulefirs.Castle.prototype.print  = function()
{
    console.log(this.name);
}
modulefirs.firstfunction();


var secondCaste = (function(){
    function secondCaste(name)
    {
        this.name = name;
    }
    secondCaste.prototype.prints=function()
    {
        console.log(this.name);
    }
    return secondCaste;
})();
Westeros.Structures.Castle = secondCaste;

var bb = new Westeros.Structures.Castle('ammar mahmood');
bb.prints();
var a  = new modulefirs.Castle('junaid mahmood');

a.print();