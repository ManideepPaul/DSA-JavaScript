/*                         Push Pseudocode

->  This function should accepr a value
->  Create a new node using the value passed to the function 
->  If there is no head property in the list, set the head and tail to be the newly created node 
->  Otherwise set he next property on the tail to be the new node and tail property on the list to be the newly created node
->  Increment the length by one 
->  Return the linked list  */

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
}

let newList = new SinglyLinkedList;
newList.push('hello')
newList.push('there')
newList.push('whats up')
console.log(newList)
console.log(newList.head.next.next)