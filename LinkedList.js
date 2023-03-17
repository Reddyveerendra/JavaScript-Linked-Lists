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

}
const list = new LinkedList();
list.append(1);
list.append(3);
list.append(4);
console.log(list.toString())