class Node{
    constructor(element){
        this.element = element;
        this.next = null
    }
}

class LinkedList{
    constructor(){
        this.head = null;
        this.length = 0;
    }
    add(element){
        if(this.head===null){
            this.head = element
        } else{
            var currentNode = this.head;
            while(currentNode.next){
                currentNode = currentNode.next
            }
            currentNode.next = element;
        }
        this.length++
    }
    print(){
        var currentNode = this.head;
        while(currentNode){
            console.log(currentNode.element)
            currentNode = currentNode.next;
        }
    }
    size(){
        console.log(this.length)
    }

    remove(element){
        var currentNode = this.head;
        var previousNode;
        if(currentNode.element===element){
            currentNode = currentNode.next
        } else{
            while(currentNode.element!==element){
                previousNode=currentNode;
                currentNode = currentNode.next;
            }
            previousNode.next = currentNode.next
        }
        this.length--;
    }
    
}

let node1 = new Node(1);
let node2 = new Node(2);
let node3 = new Node(3);
let linkedlist = new LinkedList();
linkedlist.add(node1);
linkedlist.add(node2);
linkedlist.add(node3);
linkedlist.size()
linkedlist.print()
linkedlist.remove(3);
linkedlist.size()
linkedlist.print()

