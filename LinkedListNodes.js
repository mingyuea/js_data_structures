function LinkedList(){
	var length = 0;
	var head = null;

	var Node = function(element){
		this.element = element;
		this.next = null;
	};

	this.head = function(){
		return head;
	}

	this.size = function(){
		return length;
	}

	this.add = function(element){
		let newNode = new Node(element);

		if(length == 0){
			head = newNode;
			length = 1;
		}
		else{
			let nextNode = head;
			for(let i=1; i<length; i++){
				nextNode = nextNode.next;
			}

			nextNode.next = newNode;
			console.log('added'+ newNode);
			length += 1;
		}
	}

	this.remove = function(element){
		let prevNode = null;
		let currNode = head;
		let notFound = true;

		while(notFound){
			if(currNode.element == element){
				notFound = false;
			}
			else{
				prevNode = currNode;
				currNode = currNode.next;
			}
		}

		if(currNode == head){
			head = currNode.next;
		}
		else{
			prevNode.next = currNode.next;
		}

		length -= 1;
	}

	this.isEmpty = function(){
		if(length == 0){
			return true;
		}
		else{
			return false;
		}
	}

	this.indexOf = function(element){
		let ind;
		let currNode = head;
		let notFound = true;

		for(let i = 0; i < length; i++){
			if(currNode.element == element){
				notFound = false;
				ind = i;
				break;
			}
			else{
				currNode = currNode.next;
			}
		}

		if(notFound){
			return -1;
		}
		else{
			return ind;
		}
	}

	this.elementAt = function(index){
		let currNode = head;
		let element;
		if(index >= length){
			element = undefined;
		}
		else{
			for(let i = 0; i < index; i++){
				currNode = currNode.next;
			}
			element = currNode.element;
		}
		
		return (element);
	}

	this.size = function(){
		return length;
	}

	this.removeAt = function(index){
		let prevNode = null;
		let currNode = head;

		if(index == 0){
			if(length == 1){
				head = null;
			}
			else{
				head = currNode.next;
			}
			length -= 1;
			return currNode.element;
		}
		else if(index < 0 || index >= length){
			return null
		}
		else{
			for(let i = 0; i < index; i++){
				prevNode = currNode;
				currNode = currNode.next;
			}

			if(index == (length - 1)){
				prevNode.next = null;
			}
			else{
				prevNode.next = currNode.next;
			}

			length -= 1;
			return currNode.element;
		}
	}

	this.addElementAt = function(index, element){
		let prevNode = null;
		let currNode = head;
		let newNode = new Node(element);

		if(index == 0){
			newNode.next = currNode;
			head = newNode;
			length += 1;
		}
		else if(index < 0 || index > length){
			return false;
		}
		else if(index == length){
			for(let i = 1; i < length; i++){
				currNode = currNode.next;
			}

			currNode.next = newNode;
			length += 1;
		}
		else{
			for(let i = 0; i < index; i++){
				prevNode = currNode;
				currNode = currNode.next;
			}
			prevNode.next = newNode;
			newNode.next = currNode;
			length += 1;
		}
	}
}


let ll = new LinkedList();

ll.add(3);
ll.add('c');
ll.add('z');
ll.addElementAt(2,'z');
ll.head().next;