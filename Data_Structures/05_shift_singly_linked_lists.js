/*                         Shifting Pseudocode
                    
->  If there are no nodes, return undefined. 
->  Store the current head property in a variable. 
->  Set the head property to be the current head's next property. 
->  Decrement the length by one. 
->  Return the value of the removed node. 
 */

class Node{
    constructor(val){
        this.val = val;
        this.next = null;
    }
}

class SinglyLinkedList{
    constructor(){
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
    push(val){
        let newNode = new Node(val); // The push function creates a new node from Node class.

        if(!this.head){ // If the list is empty set the head and tail the same.
            this.head = newNode;
            this.tail = this.head;
        }
        else {
            this.tail.next = newNode; // This will point the current tail.next value to the newly added node
            this.tail = newNode; // Setting the tail tracker to newly added node
        }
        this.length++; // Incrementing the lenght as we add new node to the list.
        return this; // Returning the list.
    }

    pop(){
        if(!this.head) return undefined;

        let current = this.head;
        let pre;
        while(!(current.next === null)){
            pre = current; // This will give you 2nd last item
            current = current.next; // This will be popped off
        }

        this.tail.next = null;
        this.tail = pre;
        this.length--;
        if(this.length === 0){
            this.head = null;
            this.tail = null;
        }

        return current
    }

    shift(){
        if(!this.head) return undefined;

        let firstNode = this.head;
        this.head = this.head.next;
        this.length--;
        if(this.length === 0) {
            this.tail = null;
        }
        return firstNode;

    }
}

let newList = new SinglyLinkedList;
newList.push('hello')
newList.push('there')
newList.push('whats up')

console.log(newList.shift())
console.log(newList.shift())
console.log(newList.shift())
console.log(newList)