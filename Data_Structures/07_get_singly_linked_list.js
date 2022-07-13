/*                         Get Pseudocode

->  This function should accept an index 
->  If the index is less than zero or greater than or equal to the length of the list return null 
->  Loop through the list until you reach the index return the node at that specific index 
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

    unshift(val){
        let newNode = new Node(val);

        if(!this.head){
            this.head = newNode;
            this.tail = newNode;
        }
        else {
            newNode.next = this.head;
            this.head = newNode;
        }
        this.length++;
        return this;
    }

    get(index){
        if((index < 0) || (index > this.length)) return null;
        let step = 0;
        let current = this.head;
        while(step < index){
            current = current.next;
            step++
        }
        return current;
    }
}

let newList = new SinglyLinkedList;
newList.push('hello')
newList.push('there')
newList.push('whats up')

console.log(newList.get(-1))
// console.log(newList)