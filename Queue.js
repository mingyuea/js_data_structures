function Queue () { 
    collection = [];
    this.print = function() {
        console.log(collection);
    };
    
    this.enqueue = function(elem) {
        collection = [...collection, elem]
    }

    this.dequeue = function() {
        let firstElem = collection[0];
        let tmpArr = [];
        let arrNewLen = collection.length;
        for(i=1; i < tmpArr; i++){
            tmpArr.push(collection[i]);
        }
        collection = tmpArr;
         console.log(firstElem);
    }

    this.front = function(){
        console.log(collection[0]);
    }

    this.size = function() {
        console.log(collection.length);
    }

    this.isEmpty = function() {
        if(collection.length == 0{
             console.log(true);
        }
        else{
            console.log(false);
        }
    }
}