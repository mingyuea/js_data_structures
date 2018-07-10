var MinHeap = function(){
	this.heap = [];

	this.insert = function(elememt){
		let heap = this.heap;

		function recurAdd(currInd, elem){
			let parInd = Math.floor((currInd - 1)/2);

			if(currInd == 0){
				return;
			}
			if(elem < heap[parInd]){
				let switchElem = heap.splice(parInd, 1, elem);
				heap.splice(currInd, 1, switchElem);

				recurAdd(parInd, elem);
			}
			else{
				return;
			}
		}

		heap.push(element);
		let elemInd = heap.length - 1;
		recurAdd(elemInd, element);
	}

	this.remove = function(){
		let heap = this.heap;
		let lastElem = heap.splice(-1, 1);
		let rootElem = heap.splice(0, 1, lastElem);

		function recurSwitch(currInd, elem){
			
		}
	}
}