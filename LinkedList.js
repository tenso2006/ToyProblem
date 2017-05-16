var LinkedList = function () {
  this.head = null;
};

LinkedList.prototype.isEmpty = function () {
  return this.head === null;
};


// [10] -> [20] -> [30] -> null
LinkedList.prototype.size = function () {
  var count = 0;
  var current = this.head;

  while(current !== null) {
    count++;
    current = current.next;
  }
  return count;
};

//[20] -> [30] -> [50] -> null
LinkedList.prototype.contains = function (val) {
  var current = this.head;
  while(current !== null) {
    if(current.val === val) {
      return true;
    }
    current = current.next;
  }
  return false;
};

//[4] -> [8] -> [9] -> [2] -> null
LinkedList.prototype.prepend = function (val) {

  var newNode = {
    val: val,
    next: this.head
  };

  newNode.next = this.head;
  this.head = newNode;
};

var list = new LinkedList();
console.log(list.isEmpty());
console.log(list.size());
console.log(list.contains());
list.prepend(5);
list.prepend(8);
console.log(list.isEmpty());
console.log(list.size());
console.log(list.contains());
console.log(list);

LinkedList.prototype.append = function () {

};

LinkedList.prototype.remove = function () {

};