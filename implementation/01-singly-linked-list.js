// Node class is implemented for you, no need to look for bugs here!
class SinglyLinkedNode {
    constructor(val) {
        this.value = val;
        this.next = null;
    }
}

class SinglyLinkedList {
    constructor() {
        this.head = null;
        this.length = 0;
    }

    addToHead(val) {
        // Add node of val to head of linked list

        // Your code here
        const newNode = new SinglyLinkedNode(val);

        newNode.next = this.head;

        this.head = newNode;

        this.length++;

        return this;

        // Write your hypothesis on the time complexity of this method here
    }

    addToTail(val) {
        // There are bugs in this method! Fix them!!!

        // Add node of val to tail of linked list
        let newNode = new SinglyLinkedNode(val);
        this.length++;

        if (!this.head) {
            this.head = newNode;
            return this;
        }

        let curr = this.head;
        while (curr.next) {
            curr = curr.next;
        }
        curr.next = newNode;

        return this;

        // Write your hypothesis on the time complexity of this method here
    }

    removeFromHead() {
        // Remove node at head

        // Your code here
        if (!this.length) return;

        let oldHead = this.head;

        this.head = this.head.next

        this.length--;

        return oldHead;
        // Write your hypothesis on the time complexity of this method here
    }

    removeFromTail() {
        // Remove node at tail

        // Your code here

        if(this.length > 1) {
            let curr = this.head;
            let prev;
            let oldTail;
            this.length--;

            while (curr.next) {
                prev = curr;
                curr = curr.next;
            }

            oldTail = curr;
            prev.next = null;

            return oldTail;

        } else if (this.length === 1){
            this.length--;
            this.head = null;
        } else {
            return;
        }

        // Write your hypothesis on the time complexity of this method here
    }

    peekAtHead() {
        // Return the value of head node

        // Your code here
        if (this.length) return this.head.value;

        // Write your hypothesis on the time complexity of this method here
    }

    print() {
        // Print out the linked list

        // Your code here

        if(this.length === 0) return;

        let current = this.head;

        while(current) {
            console.log(current.value);
            current = current.next;
        }

        // Write your hypothesis on the time complexity of this method here
    }
}

module.exports = {
    SinglyLinkedList,
    SinglyLinkedNode
}
