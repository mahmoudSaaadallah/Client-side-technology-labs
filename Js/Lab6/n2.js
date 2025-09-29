function Node(value) {
  this.value = value;
  this.next = null;
}
function LinkedList() {
  this.head = null;
  this.tail = null;
  this.length = 0;
}

LinkedList.prototype.push = function (value) {
  var newNode = new Node(value);
  if (!this.head) {
    this.head = newNode;
    this.tail = newNode;
  } else {
    this.tail.next = newNode;
    this.tail = newNode;
  }
  this.length++;
};

LinkedList.prototype.pop = function () {
  if (!this.head) return null;
  var current = this.head;
  var prev = null;
  while (current.next) {
    prev = current;
    current = current.next;
  }
  if (prev) {
    prev.next = null;
    this.tail = prev;
  } else {
    this.head = null;
    this.tail = null;
  }
  this.length--;
  return current.value;
};
LinkedList.prototype.display = function () {
  var current = this.head;
  var values = [];

  while (current) {
    values.push(current.value);
    current = current.next;
  }
  console.log(values.join(" "));
  return values;
};
var Llist = new LinkedList();

Llist.push(10);
Llist.push(20);
Llist.push(30);
Llist.display();
console.log(Llist.pop());
console.log(Llist.pop());
console.log(Llist.pop());
console.log(Llist.pop());
console.log(Llist.pop());
