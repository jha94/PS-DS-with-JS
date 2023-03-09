const Implementation = function(){
    this.count = 0;
    this.stack = [];

    this.Push = function(value){
        this.stack.push(value);
        this.count++
    }

    this.Pop = function(){
        const popedElement = this.stack.splice(this.count-1,1)
        --this.count
        return popedElement[0]
    }

    this.size = function(){
        return this.count;
    }

    this.peek = function(){
        return this.stack[this.count-1]
    }

}

let stack = new Implementation();
stack.Push(1)
stack.Push(2)
console.log(stack.peek())
console.log(stack.Pop());
console.log(stack.peek())