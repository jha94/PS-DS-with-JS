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
             this.head = element;
        } else{
            let currentNode = this.head;
            while(currentNode.next){
                currentNode = currentNode.next
            }
            currentNode.next = element;
        }
        this.length++
    }

    print(){
        let currentNode = this.head;
        while(currentNode){
            console.log(currentNode.element);
            currentNode = currentNode.next;
        }
    }
    size(){
        console.log('Length of Linked List', this.length)
    }
    isEmpty(){
        this.length===0?console.log('Linked List is empty'):console.log('Linked List is not empty')
    }
    remove(element){
        let currentNode = this.head;
        let prevNode;
        if(currentNode.element ===element){
            this.head = currentNode.next
        } else{
            while(currentNode.element!==element){
                prevNode = currentNode;
                currentNode = currentNode.next;
            }
            prevNode.next = currentNode.next;
        }

    }
}

let node1 = new Node(1);
let node2 = new Node(2);
let node3 = new Node(3);
let linkedList = new LinkedList();
linkedList.add(node1);
linkedList.add(node2);
linkedList.print();
linkedList.size();
linkedList.add(node3);
linkedList.print()
linkedList.size()
linkedList.isEmpty()
linkedList.remove(2)
linkedList.print()