/*                         Insert Pseudocode

->  If the index is less than 0 or greater than the length return false 
->  If the index is 0 unshift
->  If the index is same as the length push 
->  Use get method to access the index - 1
->  Set the next and the previous properties on the correct nodes to link everything together. 
->  Increment the length 
->  Return true 
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
        if (index < 0 || index >= this.length) return null;
        let half = this.length / 2
        let reqNode;
        if (index <= half) {
            reqNode = this.head;
            for (let i = 0; i <= half; i++) {
                if (i === index) return reqNode;
                else reqNode = reqNode.next;
            }
        }
        else {
            reqNode = this.tail;
            for (let i = this.length - 1; i >= half; i--) {
                if (i === index) return reqNode;
                else reqNode = reqNode.prev;
            }
        }
    }

    set(index, value) {
        let getResult = this.get(index);
        if (getResult) {
            getResult.val = value;
            return true;
        }
        else {
            return false;
        }
    }

    insert(index, val) {
        if (index < 0 || index > this.length) return false
        if (index === 0) return !!this.unshift(val);
        if (index === this.length) return !!this.push(val);

        let newNode = new Node(val)
        let beforeIndex = this.get(index - 1);
        let afterIndex = beforeIndex.next;

        newNode.next = afterIndex;
        afterIndex.prev = newNode;
        newNode.prev = beforeIndex;
        beforeIndex.next = newNode;

        this.length++
        return true;
    }
}

let newList = new DoublyLinkedList;
newList.push(100)
newList.push(101)
newList.push("Last Item")
newList.push("end")
newList.push("end2")
console.log(newList.insert(4, 201))
console.log(newList)