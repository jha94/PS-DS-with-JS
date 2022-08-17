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

    indexOf(element){
    let currentNode = this.head;
    let index=-1;
    while(currentNode){
        index++;
        if(currentNode.element===element){
            return index;
        }
        currentNode=currentNode.next
    }
    return -1;
    }

    elementAt(index){
        let currentNode = this.head;
        let count = 0;
        while(count<index){
            count++;
            currentNode = currentNode.next
        }
        return currentNode.element;
    }

    addAt(index, element){
        let currentNode = this.head;
        let previousNode;
        let currentIndex = 0;
        if(index>this.length){
            return false
        }
        if(index===0){
            element.next = currentNode;
            this.head = element;
        } else{
            while(currentIndex<index){
                currentIndex++;
                previousNode = currentNode;
                currentNode = currentNode.next;
            }
            element.next = currentNode;
            previousNode.next = element;
        }
        this.length++
    }

    removeAt(index){
        let currentNode = this.head;
        let previousNode;
        let currentIndex = 0;
        if(index<0 || index>this.length){
            return false
        }
        if(index===0){
            this.head = currentNode.next;
        } else{
            while(currentIndex<index){
                currentIndex++;
                previousNode = currentNode;
                currentNode = currentNode.next
            }
            previousNode.next = currentNode.next;
        }
        this.length--;
        return currentNode.element;
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
console.log('elementAt=====',linkedList.elementAt(3))
linkedList.print()
linkedList.size()
linkedList.isEmpty()
console.log('indexOf=====',linkedList.indexOf(3))
linkedList.remove(2)
linkedList.print()
