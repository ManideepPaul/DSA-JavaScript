/*                                 Set Pseudocode

->  Create a variable which is the result of the get method at the index passed to the function.
->  If the get method return a valid node, set the value of that node to be the value passed to the function.
->  Return true.
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
        if (!this.head) {
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
        if (this.length === 0) return undefined;
        let removed = this.tail;
        if (this.length === 1) {
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
        if (!this.head) return undefined;
        let removedHead = this.head;
        if (this.length === 1) {
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

    unshift(val) {
        let newNode = new Node(val)
        if (!this.head) {
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

    get(index) {
        if(index < 0 || index >= this.length) return null;
        let half = this.length / 2
        let reqNode;
        if(index <= half){
            reqNode = this.head;
            for(let i = 0; i <= half; i++){
                if(i === index) return reqNode;
                else reqNode = reqNode.next;
            }
        }
        else {
            reqNode = this.tail;
            for(let i = this.length - 1; i >= half; i--) {
                if( i === index ) return reqNode;
                else reqNode = reqNode.prev;
            }
        }
    }

    set(index, value) {
        let getResult = this.get(index);
        if(getResult){
            getResult.val = value;
            return true;
        }
        else {
            return false;
        }
    }
}

let newList = new DoublyLinkedList;
newList.push(100)
newList.push(101)
newList.push("Last Item")
newList.push("end")
newList.push("end2")
console.log(newList.set(4, 201))
// console.log(newList.head.next)