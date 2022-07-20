/*                         Pop Pseudocode

->  If there is no Headers, return undefined.Headers
->  Store the current tail in a variable to return later 
->  If the length is 1, set the head and tail to be null
->  Update the tail to be the previous node 
->  Decrement the length 
->  Return the value removed
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

    pop() {
        if(this.length === 0) return undefined;
        let removed = this.tail;
        if(this.length === 1){
            this.head = null;
            this.tail = null;
        }
        else {
            this.tail = removed.prev;
            this.tail.next = null;
            removed.prev = null;
        }
        this.length--;
        return removed;
    }
}

let newList = new DoublyLinkedList;
newList.push(100)
newList.push(101)
newList.push("Last Item")
// console.log(newList.pop())
newList.pop()
console.log(newList)