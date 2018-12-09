var [x,y] = [111,222];
var obj = {x,y};
console.log(obj);
obj.x = 9999;
console.log(x);
console.log(obj);

function Book (title,page,author)
{
    this.title = title;
    this.page = page;
    this.author = author;
}

Book.prototype.print = function()
{
    console.log("Title="+this.title,"--Author--"+this.author);
}
class BookSpecial
{
    constructor(title,page,author)
    {
        this.title = title;
        this.page = page;
        this.author = author;
    }
    pirntSpecial()
    {
        console.log("Title="+this.title,"--Author--"+this.author);
    }
    
}
class BookSpecialExtend extends Book
{
    constructor(title,page,author,tech)
    {
        super(title,page,author);
        this.tech = tech;
    }
    printExtends()
    {
        console.log("techonilogy"+this.tech);
       // pirntSpecial();
    }
    
}
var a  = new Book("asp.net",122,"junaid");
var b = new Book("asp.ne22222t",122,"jun111111aid");
b.print();
a.print();
var aaa  = new BookSpecial("Asp.net spcial",2222,"any idea");
aaa.pirntSpecial();

var bbbb = new BookSpecialExtend("php",22,"junaid mahmod","Robotics");
bbbb.printExtends();



