var TrieNode = function() {
  this.keys = new Map();
  this.end = false;
  this.setEnd = function() {
    this.end = true;
  };
};

var Trie = function() {
  /*This trie node has an add, isWord, and print method*/
  this.root = new TrieNode();

  this.add = function(inStr){
    //adds words to the trie recursively
    function recurAdd(charNode, charStr){
      let initChar = charStr.slice(0,1);
      let remStr = charStr.slice(1);
      let initKey = charNode.keys.get(initChar);

      if(charStr.length == 1){        
        if(initKey){
          initKey.setEnd();
          return;
        }
        else{
          let endNode = new TrieNode();
          endNode.setEnd();
          charNode.keys.set(initChar, endNode);
          return charNode;
        }
      }
      if(initKey){
        return recurAdd(initKey, remStr);
      }
      else{
        let newNode = new TrieNode()
        let recurNode = recurAdd(newNode, remStr);
        charNode.keys.set(initChar, recurNode);
        return charNode;
      }
    }

    recurAdd(this.root, inStr);
  }

  this.isWord = function(inStr){
    //checks if an inputted word string is a word contained in the trie
    function recurSearch(charNode, charStr){
      let initChar = charStr[0];
      let remStr = charStr.slice(1);
      let currNode = charNode.keys.get(initChar);

      if(charStr.length == 1){
        if(currNode && currNode.end){
          return true;
        }
        else{
          return false;
        }
      }
      else{
        if(currNode){
          return recurSearch(currNode, remStr);
        }
        else{
          return false;
        }
      }
    }

    return recurSearch(this.root, inStr);
  }

  this.print = function(inStr){
    //returns all word strings in the trie, as an array of strings
    function recurSearch(charNode, prevStr){
      if(charNode.end){

        if(charNode.keys.size == 0){
          return [prevStr];
        }
        else{
          let strArr = [prevStr];

          for(let key of charNode.keys.keys()){
            let newStr = prevStr + key;
            let newNode = charNode.keys.get(key);
            let newArr = recurSearch(newNode, newStr);
            strArr.push(...newArr);
          }
          return strArr;
        }
      }
      else{
        let strArr = [];

        for(let key of charNode.keys.keys()){
          let newStr = prevStr + key;
          let newNode = charNode.keys.get(key);
          let newArr = recurSearch(newNode, newStr);
          strArr.push(...newArr);
        }
        return strArr;
      }
    }

    return recurSearch(this.root, "");
  }  
};

let trie = new Trie();
trie.add('add');
trie.add('ads');
trie.add('abc');
trie.isWord('abc');
trie.isWord('abx');
trie.isWord('a');
trie.print();