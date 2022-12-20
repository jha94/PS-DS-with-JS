class Node{
    constructor(element){
        this.element = element;
        this.next = null;
    }
}

class LinkedList{
    constructor(){
        this.head = null;
        this.size = 0;
    }

    add(node){
        let currentNode = this.head;
        if(currentNode===null){
            this.head = node
        } else{
            while(currentNode.next){
                currentNode = currentNode.next
            }
            currentNode.next = node;
        }
        this.size++;
    }

    print(){
        let currentNode = this.head;
        while(currentNode){
            console.log(currentNode.element);
            currentNode = currentNode.next
        }
    }

    remove(element){
        let currentNode = this.head;
        let previousNode;
        if(currentNode.element===element){
            this.head = currentNode.next
        } else{
            while(currentNode.element!==element){
                previousNode = currentNode;
                currentNode = currentNode.next;
            }
            previousNode.next = currentNode.next;
        }
        this.size--
    }

    indexOf(element){
        let currentNode = this.head;
        let index=0;
        while(currentNode.element!==element){
            index++;
            currentNode = currentNode.next
        }
        return index>this.size?-1:index;

    }

    elementAt(index){
        let count=0;
        let currentNode = this.head;
        while(count<index){
            count++;
            currentNode = currentNode.next
        }
        return currentNode.element;

    }
}

let node1 = new Node(1);
let node2 = new Node(2);
let node3 = new Node(3);
let node6 = new Node(6);
let node4 = new Node(4);
let node5 = new Node(5);
let node7 = new Node(6);
let linkedList = new LinkedList();
linkedList.add(node1);
linkedList.add(node2);
linkedList.add(node6);
linkedList.add(node3);
linkedList.add(node4);
linkedList.add(node5);
linkedList.add(node7);
// linkedList.print();
linkedList.remove(6);
linkedList.print()
// console.log(linkedList.indexOf(1))
// console.log(linkedList.elementAt(1))