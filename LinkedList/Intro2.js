class Node{
    constructor(element){
        this.element = element;
        this.size = 0;
    }
}

class LinkedList{
    constructor(){
        this.head = null;
        this.size = 0;
    }
    add(node){
        if(this.head===null){
            this.head = node;
        }
    }
    print(){
        let currentNode = this.head;
        while(currentNode){
            console.log(currentNode.element);
            currentNode = currentNode.ext
        }
    }
}

const l1 = new LinkedList();
l1.add(new Node(2))
l1.print()

