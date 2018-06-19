class myPriorirtyQueue{
	constructor(){
		this.collection = [];
		
		this.printCollection = this.printCollection.bind(this);
		this.enqueue = this.enqueue.bind(this);
		this.dequeue = this.dequeue.bind(this);
		this.front = this.front.bind(this);
		this.size = this.size.bind(this);
		this.isEmpty = this.isEmpty.bind(this);
	}
	
	printCollection(){
		console.log(this.collection);
		return this.collection;
	}
	
	enqueue(arr){
		if(this.collection.length == 0){
			this.collection = [arr];
		}
		else if(this.collection.length == 1){
			if(arr[1] >= this.collection[0][1]){
				this.collection = [...this.collection, arr];
			}
			else{
				this.collection = [arr, ...this.collection]
			}
		}
		else{
			let priority = arr[1];
			let arrEnd = this.collection.length;
			let subArr1 = [];
			let subArr2 = [];
			let pInd = arrEnd;

			for(let i = 0; i < arrEnd; i++){
				if(priority < this.collection[i][1]){
					pInd = i;
					break;
				}
			}
			
			for(let i = 0; i < pInd; i++){
				subArr1.push(this.collection[i]);
			}
			
			for(let i = pInd; i < arrEnd; i++){
				subArr2.push(this.collection[i]);
			}
			
			this.collection = [...subArr1, arr, ...subArr2];
		}
	}
	
	dequeue(){
		let dqElem = this.collection[0];
		let arrEnd = this.collection.length;
		let tmpArr = [];
		
		for(let i = 1; i < arrEnd; i++){
			tmpArr.push(this.collction[i]);
		}
		
		this.collection = tmpArr;
		return dqElem;
	}
	
	size(){
		return this.collection.length;
	}
	
	front(){
		return this.collection[0];
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

var tmpPQ = new myPriorirtyQueue();
tmpPQ.enqueue(['b',3]);
tmpPQ.printCollection();