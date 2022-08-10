class Node{
    constructor(data){
        this.data = data;
        this.next = null;
    }
}

class LinkedList{
    constructor(){
        this.head = null;
    }
    add(element){
        let head2 = this.head;
        
        if(this.head===null){
            this.head = element
        } else{
            while(head2.next){
                head2 = head2.next
            }
            head2.next = element
        }
    }
    print(){
        while(this.head){
            console.log(this.head.data)
            this.head = this.head.next
        }
    }
}

let node = new Node(1);
let node2 = new Node(2);
let node3 = new Node(3);
let node4 = new Node(4);
let list = new LinkedList();
list.add(node)
list.add(node2)
list.add(node3)
list.add(node4)
list.print()