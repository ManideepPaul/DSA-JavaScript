/*                     Popping Pseudocode

->  If there are no nodes on the list, return undefined.
->  Loop through the entire list until you reach the tail. 
->  Set the next prioperty to be the 2nd to last node. 
->  Set the tail to be the 2nd to last node. 
->  Decrement the length of the list by 1.
->  Return the value of the node removed. */

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

        this.tail = pre;
        this.tail.next = null;
        this.length--;
        if(this.length === 0){
            this.head = null;
            this.tail = null;
        }

        return current
    }
}

let newList = new SinglyLinkedList;
newList.push('hello')
newList.push('there')
newList.push('whats up')

console.log(newList.pop())
console.log(newList)