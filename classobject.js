var classType = function(value)
{
    this.greeting = value;
    this.first=function() {
        console.log(this.greeting);
    };
}

classType.prototype.second = function()
{
    console.log('second--'+this.greeting);
};


var a  = new classType("junaid");
var b  = new classType("mahmood");

a.first();
a.second();
