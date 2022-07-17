/*                             Remove Pseudocode

-> If the index is less than zero, greateer than the length, return undefined. 
-> If the index is the same as the length -1 pop 
-> If the index is zero shift 
-> Otherwise, using the get method, access the node st the index - 1.
-> Set the next property on that node to be the next of the next node. 
-> Decrement the length 
-> Return the value of the node removed
 */

class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

class SinglyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
    push(val) {
        let newNode = new Node(val); // The push function creates a new node from Node class.

        if (!this.head) { // If the list is empty set the head and tail the same.
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

    pop() {
        if (!this.head) return undefined;

        let current = this.head;
        let pre;
        while (!(current.next === null)) {
            pre = current; // This will give you 2nd last item
            current = current.next; // This will be popped off
        }

        this.tail = pre;
        this.tail.next = null;
        this.length--;
        if (this.length === 0) {
            this.head = null;
            this.tail = null;
        }

        return current
    }

    shift() {
        if (!this.head) return undefined;

        let firstNode = this.head;
        this.head = this.head.next;
        this.length--;
        if (this.length === 0) {
            this.tail = null;
        }
        return firstNode;
    }

    unshift(val) {
        let newNode = new Node(val);

        if (!this.head) {
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

    get(index) {
        if ((index < 0) || (index > this.length)) return null;
        let step = 0;
        let current = this.head;
        while (step < index) {
            current = current.next;
            step++
        }
        return current;
    }

    set(index, value) {
        let reqNode = this.get(index);
        if (!reqNode) return false;
        reqNode.val = value;
        return true;
    }

    insert(index, value) {
        let newNode = new Node(value);

        if (index < 0 || index > this.length) return false;

        if (index === this.length) return !!this.push(value); // This will return the true if we use !! before the method call

        if (index === 0) return !!this.unshift(value);

        let pre = this.get(index - 1);
        newNode.next = pre.next
        pre.next = newNode;
        this.length++;
        return true;
    }

    remove(index) {
        if(index < 0 || index > this.length) return undefined;
        if(index === this.length - 1) return this.pop();
        if(index === 0) return this.shift();
        let pre = this.get(index - 1);
        let reqEle = pre.next;
        pre.next = reqEle.next;
        this.length--;
        return reqEle;
    }
}

let newList = new SinglyLinkedList;
newList.push('hello')
newList.push('there')
newList.push('whats up')

console.log(newList.remove(1))
console.log(newList)