class Node {
    constructor(value, next = null) {
        this.value = value;
        this.next = next;
    }
}
class LinkedList {
    constructor(head = null) {
        this.head = head;
    }
    head() {
        return this.head;
    }
    getTail() {
        if (!this.head) {
            return null;
        }
        let tail = this.head;
        while (tail.next !== null) {
            tail = tail.next;
        }
        return tail;
    }
    append(value) {
        let list = this;
        if (!list.head) {
            list.head = new Node(value);
            return list;
        }
        let tail = this.getTail();
        tail.next = new Node(value);
        return tail;
    }
    prepend(value) {
        if (!this.head) {
            this.head = new Node(value);
            return this;
        }
        const prevHead = this.head;
        this.head = new Node(value, prevHead)
    }
    size() {
        let count = 0;
        let list = this.head
        while (list) {
            list = list.next;
            count++;
        }
        return count;
    }
    at(index) {
        if (this.size() - 1 < index) {
            return;
        }
        let i = 0;
        let list = this.head;
        while (i < index) {
            i++;
            list = list.next;
        }
        return list;
    }
    contains(value) {
        let list = this.head;
        while (list) {
            if (list.value == value) {
                return true
            }
            list = list.next;
        }
        return false;
    }
    find(value) {
        if (!this.contains(value)) {
            return null
        }
        let list = this.head;
        while (list) {
            if (list.value == value) {
                return list
            }
            list = list.next;
        }
    }
    toString() {
        let list = this.head;
        if (!list) {
            return null;
        }
        let str = ""
        while (list) {
            str += `${list.value} -> `;
            list = list.next;
        }
        str += "null"
        return str;
    }
    insertAt(value, index) {
        const list = new Node(value);
        if (index === 0) {
            this.prepend(value);
        }
        if (index > this.size() - 1) {
            this.append(value);
            return this.toString();
        }
        let prev = this.at(index - 1);
        list.next = prev.next;
        prev.next = list;
    }
    removeAt(index) {
        let pre = this.at(index - 1);
        let after = this.at(index + 1);
        pre.next = after;
        return this;
    }
    pop() {
        if (!this.head) {
            return null;
        }
        let lastIndex = this.size();
        let last = this.at(lastIndex - 2);
        last.next = null;
        return last;
    }
}
const list = new LinkedList();
list.append(1);
list.append(3);
list.append(4);
list.insertAt(9, 7);
list.pop();
console.log(list.toString())