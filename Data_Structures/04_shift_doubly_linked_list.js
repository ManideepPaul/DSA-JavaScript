/*                         Shift Pseudocode

->  If there is no head return undefined
->  Store the current head in a variable
->  If length is 1, set the head and tail to be null 
->  Update the head to be the next node 
->  Set the new head's previous to be the be null 
->  set the old head's next to be the null 
->  Decrement the length 
->  Return the removed node 
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

    shift() {
        if(!this.head) return undefined;
        let removedHead = this.head;
        if(this.length === 1) {
            this.head = null;
            this.tail = null;
        }
        else {
            this.head = removedHead.next;
            this.head.prev = null;
            removedHead.next = null;
        }
        this.length--;
        return removedHead;
    }
}

let newList = new DoublyLinkedList;
newList.push(100)
newList.push(101)
newList.push("Last Item")
console.log(newList.shift())
console.log(newList)