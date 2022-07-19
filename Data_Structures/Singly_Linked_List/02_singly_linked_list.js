/*                         Linked List 

-> A data structure that contains a Headers, tail and length property. 
-> Linked lists consists of NodeList, and each node has value and a pointer to another node or null. 
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
}

let newList = new SinglyLinkedList;
console.log(newList)