class myQueue1 {
	constructor(){
		this.collection = [];
		
		this.print = this.print.bind(this);
		this.enqueue = this.enqueue.bind(this);
		this.dequeue = this.dequeue.bind(this);
		this.front = this.front.bind(this);
		this.size = this.size.bind(this);
		this.isEmpty = this.isEmpty.bind(this);
	}
	
	print() {
		console.log(this.collection);
	}
	
	enqueue(elem){
		this.collection = [...this.collection, elem];
	}
	
	dequeue(){
		let firstElem = [];
		firstElem.push(this.collection[0]);
		
        let tmpArr = [];
        let arrNewLen = this.collection.length;
        
		for(let i=1; i < arrNewLen; i++){
            tmpArr.push(this.collection[i]);
        
		}
        this.collection = tmpArr;
        return(firstElem);
	}
	
	front(){
		return this.collection[0];
	}
	
	size(){
		return this.collection.length;
	}
	
	isEmpty(){
		if(this.collection.length == 0){
             return true;
        }
        else{
            return false;
        }
	}
}

let tmpQueue2 = new myQueue1();
tmpQueue2.print();
tmpQueue2.enqueue(3);
tmpQueue2.print();