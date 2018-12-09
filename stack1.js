var stack = function(){
    this.count=0;
    this.storage={};

    this.push = function(value)
    {
        this.storage[this.count]=value;
        this.count++;
    }
    this.pop = function(){
        this.count--;
        var result  = this.storage[this.count];
        delete this.storage[this.count];
        
        return result;
    }

   this.size  = function()
   {
       return this.count;
   }
};
var myStack  = new stack();

myStack.push(211);myStack.push(222);myStack.push(33334);
console.log(myStack.size());
console.log(myStack.pop());
console.log(myStack.size());