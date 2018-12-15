
function LinkedList ()
{
    var Node  = function (element)
    {
        this.element = element;
        this.next = null;
    }

    let head = null;
    let length = 0;
    this.append  = function(element)
    {
        let node = new Node(element);
        let current  = new Node(element);

        if (head==null)
        {
            head=node;
            console.log("empty head");
        }
        else

        {
            current = head;
        
        while (current.next)
        {
            current = current.next;
           // console.log(current.element);
        }

        current.next = node;
        //console.log(current.next);
    }
    this.length++;
    };
    this.print = function()
    {
        current = head;
        
        while (current.next)
        {
            console.log(current.next);
            current = current.next;
           
        }
    };
}
 var link = new LinkedList();
 link.append(222);
 link.append(33222);
 link.append(999);
 link.append(1621);
 link.append(123);

 link.print();