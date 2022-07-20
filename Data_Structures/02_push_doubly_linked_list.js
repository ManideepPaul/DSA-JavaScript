/*                     Pushing Pseudocode

->  Create a new node with the value passed to the function 
->  If the head property is null set the nead and tail to be the newly created node. 
->  If not set the next property on the tail to be that node 
->  Set the previous property on the newly created node to be the tail. 
->  Set the tail to be the newly created node. 
->  Increment the length. 
->  Return the doubly linked list 
 */

class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
        this.prev = null;
    }
}

class DoublyLinkedList {
    constructor(val) {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    push(val) {
        let newNode = new Node(val);
        if(!this.head){
            this.head = newNode;
            this.tail = newNode;
        }
        else {
            this.tail.next = newNode;
            newNode.prev = this.tail;
            this.tail = newNode;
        }
        this.length++;
        return this;
    }
}

let newList = new DoublyLinkedList;
newList.push(100)
newList.push(101)
newList.push("Last Item")
console.log(newList)