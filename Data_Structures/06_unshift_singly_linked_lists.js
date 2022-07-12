/*                             Unshifting Pseudocode

->  This function should accept a value 
->  Create a new node using the value passed to the function 
->  If there is no head property on the list, set the head and the tail to be the newly created node    
->  Otherwise set the newly createrd node's next property to be the current head property on the list 
->  Set the head property on the list to be that newly created node 
->  Increment the length of the list by 1   
->   Return the linked list 
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
}

let newList = new SinglyLinkedList;
newList.push('hello')
newList.push('there')
newList.push('whats up')

console.log(newList.unshift("Hi"))
console.log(newList.unshift("Good morning"))
console.log(newList)