const { SinglyLinkedNode } = require("./01-singly-linked-list");

class Queue {

    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    enqueue(val) {
        // Add node to end of queue (linked list)
        const newNode = new SinglyLinkedNode(val)
        // Your code here
        this.length++;

        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
            return this.length;
        }

        this.tail.next = newNode;
        this.tail = newNode;

        return this.length;
        // Write your hypothesis on the time complexity of this method here
    }

    dequeue() {
        // Remove node from front of queue (linked list)
        if (!this.head) return null;

        let storedNode = this.head;
        this.head = storedNode.next;

        if (!this.head) this.tail = null;

        this.length--;

        return storedNode.value;

        // Write your hypothesis on the time complexity of this method here
    }

}

module.exports = {
    Queue,
    SinglyLinkedNode
}
