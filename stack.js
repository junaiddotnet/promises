
class stack
{
     

    constructor (name)
    {
        this.stackname = name;
        this.stackArray = [];
    }
    push (value)
    {
        this.stackArray.push(value);
    }
    peek()
    {
        console.log(this.stackArray);
        return this.stackArray[2];
    }

    size()
    {
        return this.stackArray.length;
    }
    pop () 
    {
       return this.stackArray.pop();
    }
}

var st = new stack("junaid");
st.push(1);st.push(2);st.push(3331233);


console.log(st.peek());
