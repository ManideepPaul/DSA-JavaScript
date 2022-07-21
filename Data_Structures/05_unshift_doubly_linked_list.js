/*                         Unshift Pseudocode

->  create a new node with passed value
->  if there is no head set the new node as head and tail 
->  Set old head's prev to new node 
->  set new node's next to old Node
->  set new node as head 
->  Increment the length 
->  return list
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

    unshift(val){
        let newNode = new Node(val)
        if(!this.head){
            this.head = newNode;
            this.tail = newNode;
        }
        else {
            this.head.prev = newNode;
            newNode.next = this.head;
            this.head = newNode;
        }
        this.length++;
        return this;
    }
}

let newList = new DoublyLinkedList;
newList.push(100)
newList.push(101)
newList.push("Last Item")
console.log(newList.unshift("First Item"))
console.log(newList.head)