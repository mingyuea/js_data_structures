function Set() {
    // the var collection will hold our set
    var collection = [];

    // this method will check for the presence of an element and return true or false
    this.has = function(element) {
        return (collection.indexOf(element) !== -1);
    };
    // this method will return all the values in the set
    this.values = function() {
        return collection;
    };

    this.add = function(elem){
        if(collection.length == 0){
            collection.push(elem);
            return true
        }
        else{
            let canAdd = true;
           
            collection.forEach(arrElem => {
                if(arrElem == elem){
                    canAdd = false;
                }
            });

            if(canAdd){
                collection.push(elem);
                return true;
            }
            else{
                return false;
            }
        }
    }

    this.remove = function(elem){
        let canRem = false;
        let remInd;
        collection.forEach((arrElem, ind) => {
            if(arrElem == elem){
                canRem = true;
                remInd = Number(ind);
            }
        });

        if(canRem){
            let arrEnd = collection.length;
            let subArr1 = collection.slice(0, remInd);
            let subArr2 = collection.slice(remInd + 1, arrEnd);
            
            collection = [...subArr1, ...subArr2];
            console.log("rem", collection);
            return true;
        }
        else{
            console.log("can't rem");
            return false;
        }
    }

    this.size = function() {
        return collection.length;
    }

    this.union = function(set){
        let countObj = {};
        let tmpColl = [];

        collection = [...collection, ...set.values()];

        collection.forEach(arrElem => {
            if(countObj[arrElem]){
                
            }
            else{
                countObj[arrElem] = true;
                tmpColl.push(arrElem);
            }
        });

        collection = tmpColl;
        console.log(collection);
        return collection;
    }

    this.intersection = function(set){
        let countObj = {};
        let tmpColl = [];

        collection = [...collection, ...set.values()];

        collection.forEach(arrElem => {
            if(countObj[arrElem]){
                tmpColl.push(arrElem);
            }
            else{
                countObj[arrElem] = true;
            }
        });

        collection = tmpColl;
        console.log(collection);
        return collection;
    }

    this.difference = function(set){
        let countObj = {}
        let tmpColl = [];

        set.values().forEach(elem => {
            countObj[elem] = true;
        });

        collection.forEach(arrElem => {
            if(countObj[arrElem]){

            }
            else{
                tmpColl.push(arrElem);
            }
        });

        collection = tmpColl;
        console.log(collection);
        return collection;
    }

    this.subset = function(set){
        let countObj = {};
        let counter = 0;
        let tmpColl = [];
        let collLen = collection.length;
        let isSubset = false;

        set.values().forEach(elem => {
            countObj[elem] = true;
        });

        collection.forEach(arrElem => {
            if(countObj[arrElem]){
                counter ++
            }
        });

        if(counter == collLen){
            isSubset = true;
        }

        console.log(isSubset);
        return isSubset;
    }
}

let myQueue = new Set();
myQueue.add('a');
myQueue.add('b');
myQueue.add('c');

let set2 = new Set();
set2.add('a');
set2.add('b');
set2.add('x');
set2.add('z');
set2.add('c');

myQueue.subset(set2);
