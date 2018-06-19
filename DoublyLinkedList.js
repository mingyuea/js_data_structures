var Node = function(data, prev) {
  this.data = data;
  this.prev = prev;
  this.next = null;
};

var DoublyLinkedList = function() {
  this.head = null;
  this.tail = null;
  this.length = 0;
  var length = this.length;

  this.showHead = function(){
  	return this.head;
  }

  this.showTail = function(){
  	return this.tail;
  }

  this.size = function(){
  	return length;
  }

  this.add = function(element){
  	if(length == 0){
  		let newNode = new Node(element, null);
  		this.head = newNode;
  		this.tail = newNode;
  	}
  	else{
  		let currNode = this.head;

  		for(let i = 1; i < length; i++){
  			currNode = currNode.next;
  		}
 		
 		let newNode = new Node(element, currNode)
  		currNode.next = newNode;
  		this.tail = newNode;
  	}
  	length += 1;
  }

  this.remove = function(element){
  	/*this method will remove ALL instances of element
	from the doubly linked list*/

	if(length == 0){
		return null;
	}
	else{
		let prevNode = null;
		let currNode = this.head;
		let nextNode = null;
		let remCount = 0;

		for(let i = 0; i < length; i++){
			console.log('runs: '+i+" currdata: "+currNode.data);
			if(currNode.data == element){
				console.log('Match i='+i+'data:'+currNode.data);
				if(length == 1){
					this.head = null;
					this.tail = null;
				}
				else if(currNode.prev == null){
					nextNode = currNode.next;
					this.head = nextNode;
					nextNode.prev = null;

				}
				else if(currNode.next == null){
					prevNode = currNode.prev;
					this.tail = prevNode;
					prevNode.next = null;
				}
				else{
					prevNode = currNode.prev;
					nextNode = currNode.next;
					prevNode.next = nextNode;
					nextNode.prev = prevNode;
				}
				remCount += 1;
				currNode = currNode.next;
			}
			else{
				currNode = currNode.next;
			}
		}

		length = length - remCount;
	}
  }

  this.reverse = function(){
  	//this reverses the list in place

  	if(length == 0){
  		return null;
  	}
  	else if(length > 1){
  		let currNode = this.head;
  		let prevNode = null;
  		let nextNode = null;

  		for(let i = 0; i < length; i++){
  			prevNode  = currNode.prev;
  			nextNode = currNode.next;

  			if(prevNode == null){
  				this.tail = currNode;
  				currNode.next = null;
  				currNode.prev = nextNode;
  			}
  			else if(nextNode == null){
  				this.head = currNode;
  				currNode.prev = null;
  				currNode.next = prevNode;
  			}
  			else{
  				currNode.next = prevNode;
  				currNode.prev = nextNode;
  			}

  			currNode = nextNode;
  		}
  	}
  }
};

let dbl = new DoublyLinkedList();

dbl.add('a');
dbl.add('a');
dbl.add('b');
dbl.add('a');
dbl.add('c');
dbl.add('a');
dbl.add('z');
dbl.size();
dbl.showHead();
dbl.reverse();