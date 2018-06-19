var Map = function() {
  this.collection = {};
  var collection = this.collection;

  this.print = function(){
  	console.log(collection);
  }

  this.add = function(key, value){
  	this.collection[key] = value;
  }

  this.has = function(key){
  	if(collection[key]){
  		return true;
  	}
  	else {
  		return false
  	};
  }

  this.remove = function(key){
  	let tmpCollection = {};
  	for(let keys in collection){
  		if(keys == key){
  			collection[keys] = undefined;
  		}
  	}
  }

  this.get = function(key){
  	return collection[key];
  }

  this.values = function(){
  	let tmpArr = [];
  	for(let keys in collection){
  		tmpArr.push(collection[keys]);
  	}

  	return tmpArr;
  }

  this.size = function(){
  	let counter = 0;
  	for(let keys in collection){
  		counter += 1;
  	}

  	return counter
  }

  this.clear = function(){
  	collection = {};
  }
};

let myMap = new Map();
myMap.add('a', 1);
myMap.add('b', 1);
myMap.add('c', 2);
myMap.print();
myMap.get('a');
myMap.values();
myMap.size();
myMap.clear();
myMap.print();