/*This is a Max Heap structure, which uses an array representation in place of 
an actual tree. It takes advantage of the array representation and uses element 
indices to find parent and child node positions.
It has methods for insertion and deletion, which all maintain the heap structure
*/

var MaxHeap = function() {
  this.heap = [];

  this.insert = function(element){
  	/*this insertion function will maintain the heap structure 
  	of array by adding the new element to the end of the array,
  	comparing it to its parent, then switching if the element is
  	larger than the parent. This process is repeated until the 
  	max heap structure is true*/

  	let heap = this.heap;

  	function recurPlace(currInd, elem){
  		let parInd = Math.floor((currInd - 1)/2);

  		if(currInd == 0){
  			return;
  		}
  		else if(elem > heap[parInd]){
  			let parNode = heap.splice(parInd, 1, elem);
  			heap.splice(currInd, 1, ...parNode);

  			recurPlace(parInd, elem);
  		}
  		else{
  			return;
  		}
  	}

  	if(heap.length == 0){
  		heap.push(element);
  	}
  	else{
  		heap.push(element);
  		let elemInd = this.heap.length - 1;

  		recurPlace(elemInd, element);
  	}
  }


  this.print = function(){
  	return this.heap;
  }


  this.remove = function(){ 	
  	/*The remove method will remove the root element, then take the
  	last element in the heap and place it in the root, re-heapifying
  	until the heap structure is satisfied*/

  	let lastElem = this.heap.splice(- 1, 1);
  	let rootElem = this.heap.splice(0, 1, ...lastElem);
  	let heap = this.heap;

  	function recurSwitch(currInd, elem){
  		let leftInd = 2 * currInd + 1;
  		let rightInd = 2 * currInd + 2;
  		if(leftInd >= heap.length && rightInd >= heap.length){
  			//console.log("Last row");
  			return;
  		}
  		else if(heap[currInd] < heap[leftInd] || heap[currInd] < heap[rightInd]){
  			
  			let greaterVal;
  			if(heap[leftInd] && heap[rightInd]){
	  			if(heap[leftInd] > heap[rightInd]){
	  				greaterVal = leftInd;
	  			}
	  			else{
	  				greaterVal = rightInd;
	  			}
  			}
  			else if(heap[leftInd]){
  				greaterVal = leftInd;
  			}
  			else{
  				greaterVal = rightInd;
  			}

  			//console.log(heap[greaterVal]);
  			let currVal = heap[currInd];
  			let switchVal = heap.splice(greaterVal, 1, currVal);
  			heap.splice(currInd, 1, ...switchVal);
  			
  			recurSwitch(greaterVal, elem);
  		}
  		else{
  			//console.log('stop recur');
  			return;
  		}
  	}

  	recurSwitch(0, ...lastElem);
  	return rootElem[0];
  }
};

let tmpHeap = new MaxHeap();
tmpHeap.insert(2);
tmpHeap.insert(3);
tmpHeap.insert(5);
tmpHeap.insert(6);
tmpHeap.insert(8);
tmpHeap.insert(9);
tmpHeap.insert(1);
tmpHeap.remove();
console.log(tmpHeap.heap)