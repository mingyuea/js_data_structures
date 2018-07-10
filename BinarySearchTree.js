/*The BST uses the Node function to create leaf nodes. The BST has 
methods for:

finding the minimum/maximum value present, adding nodes,
finding whether a specific value is present in the BST, what the 
minimum/maximum heights are, whether the tree is balanced, in-order
traversal, pre-order traversal, post-order traversal, breadth first
traversal, deletion of a node(with one, two, or no children), and inversion.
*/


var displayTree = (tree) => console.log(JSON.stringify(tree, null, 2));

function Node(value) {
    this.value = value;
    this.left = null;
    this.right = null;
}


function BinarySearchTree() {
    this.root = null;
    // change code below this line
    this.findMin = function(){  
        //finds minimum value in a BST assuming all nodes are number values
        let hasLeft = true;
        let minVal;
        let currNode = this.root;

        if(this.root == null){
            return null;
        }

        while(hasLeft){
            if(currNode.left == null){
                minVal = currNode.value;
                hasLeft = false;
            }
            else{
                currNode = currNode.left;
            }
        }
        return minVal;
    }

    this.findMax = function(){
        //finds maximum
        let hasRight = true;
        let maxVal;
        let currNode = this.root;

        if(this.root == null){
            return null
        }

        while(hasRight){
            if(currNode.right == null){
                maxVal = currNode.value;
                hasRight = false;
            }
            else{
                currNode = currNode.right;
            }
        }

        return maxVal;
    }

    this.add = function(elem){
        //recursively adds nodes to BST
        function recurAdd(node, dir){
            if(node[dir] == null){
                node[dir] = new Node(elem);
                return undefined;
            }
            else if(node[dir].value == elem){
                return null;
            }
            else if(node[dir].value > elem){
                recurAdd(node[dir], 'left');
            }
            else{
                recurAdd(node[dir], 'right');
            }
        }

        let res = recurAdd(this, 'root');
        return res;
    }


    this.isPresent = function(elem){
        //returns a boolean telling whether a value is present in the BST
        if(this.root == null){
            return false;
        }
        else{
            function recurSearch(node, dir){
                if(node[dir] == null){
                    console.log('empty result');
                    return false;
                }
                else if(node[dir].value > elem){
                    console.log("went right");
                    return recurSearch(node[dir], 'left');
                    
                }
                else if(node[dir].value < elem){
                    console.log('went left');
                    return recurSearch(node[dir], 'right');
                    
                }
                else if(node[dir].value == elem){
                    console.log('found equal');
                    return true;
                }
            }

            return recurSearch(this, 'root');
        }
    }


    this.findMaxHeight = function(){
        //finds the maximum height of the tree
        function recurPath(node){
            if(node.left == null && node.right == null){
                return 0;
            }
            else if(node.left == null){
                return(1 + recurPath(node.right));
            }
            else if(node.right == null){
                return(1 + recurPath(node.left));
            }
            else{
                let lPath = recurPath(node.left);
                let rPath = recurPath(node.right);

                if(lPath > rPath){
                    return(1 + lPath);
                }
                else{
                    return(1 + rPath);
                }
            }
        }

        if(this.root == null){
            return (-1);
        }
        else{
            return recurPath(this.root);
        }
    }

    this.findMinHeight = function(){
        //returns the smalles height of the tree
        function recurPath(node){
            if(node.left == null && node.right == null){
                return 0;
            }
            else if(node.left == null){
                return(1 + recurPath(node.right));
            }
            else if(node.right == null){
                return(1 + recurPath(node.left));
            }
            else{
                let lPath = recurPath(node.left);
                let rPath = recurPath(node.right);

                if(lPath < rPath){
                    return(1 + lPath);
                }
                else{
                    return(1 + rPath);
                }
            }
        }

        if(this.root == null){
            return (-1);
        }
        else{
            return recurPath(this.root);
        }       
    }

    this.isBalanced = function(){
        //checks whether the tree is balanced
        let maxHt = this.findMaxHeight();
        let minHt = this.findMinHeight();

        if((maxHt - minHt) > 1){
            return false;
        }
        else{
            return true;
        }
    }

   this.inorder = function(){
        let travArr = [];

        function recurTrav(node){
            if(node.left == null && node.right == null){
                console.log("leaf: " + node.value);
                travArr.push(node.value);
                return;
            }
            else if(node.right == null){
                console.log("right is null, val: " + node.value);
                recurTrav(node.left);
                travArr.push(node.value);
                return;
            }
            else if(node.left == null){
                console.log("left is null, val:" + node.value);
                travArr.push(node.value);
                recurTrav(node.right);
                return;
            }
            else{
                console.log("no nulls:");
                recurTrav(node.left);
                travArr.push(node.value);
                recurTrav(node.right);
            }
        }

        if(this.root == null){
            return null;
        }
        recurTrav(this.root);
        return travArr;
    }

    this.preorder = function(){
        let travArr = [];

        function recurTrav(node){
            if(node.left == null && node.right == null){
                travArr.push(node.value);
                return;
            }
            else if(node.left && node.right){
                travArr.push(node.value);
                recurTrav(node.left);
                recurTrav(node.right);
                return;
            }
            else if(node.right == null){
                travArr.push(node.value);
                recurTrav(node.left);
                return;
            }
            else{
                travArr.push(node.value);
                recurTrav(node.right);
                return;
            }
        }

        if(this.root == null){
            return null;
        }
        recurTrav(this.root);
        return travArr;
    }

    this.postorder = function(){
        let travArr = [];

        function recurTrav(node){
            if(node.right == null && node.left == null){
                travArr.push(node.value);
                return;
            }
            else if(node.right && node.left){
                recurTrav(node.left);
                recurTrav(node.right);
                travArr.push(node.value);
                return;
            }
            else if(node.left == null){
                recurTrav(node.right);
                travArr.push(node.value);
                return;
            }
            else{
                recurTrav(node.left);
                travArr.push(node.value);
                return;
            }
        }

        if(this.root == null){
            return null;
        }
        recurTrav(this.root);
        return travArr;
    }

    this.levelOrder = function(){
        let travArr = [];
        let queArr = [this.root];
        let fullQue = true;

        if(this.root == null){
            return null;
        }

        while(fullQue){
            let headElem = queArr.shift();
            travArr.push(headElem.value);

            if(headElem.left && headElem.right){
                queArr.push(headElem.left);
                queArr.push(headElem.right);
            }
            else if(headElem.right == null && headElem.left == null){
                
            }
            else if(headElem.left){
                queArr.push(headElem.left);
            }
            else{
                queArr.push(headElem.right);
            }

            if(queArr.length == 0){
                fullQue = false;
            }
        }

        return travArr;
    }

    this.reverseLevelOrder = function(){
        let travArr = [];
        let queArr = [this.root];
        let fullQue = true;

        if(this.root == null){
            return null;
        }

        while(fullQue){
            let headElem = queArr.shift();
            travArr.push(headElem.value);

            if(headElem.left && headElem.right){
                queArr.push(headElem.right);
                queArr.push(headElem.left);
            }
            else if(headElem.right == null && headElem.left == null){
                
            }
            else if(headElem.right){
                queArr.push(headElem.right);
            }
            else{
                queArr.push(headElem.left);
            }

            if(queArr.length == 0){
                fullQue = false;
            }
        }

        return travArr;
    }

    this.remove = function(remVal){
        let rootNode = this.root;

        function recurSearch(node, elem){
            if(node.value > elem){
                if(node.left == null){
                    return null;
                }
                else if(node.left.value == elem){
                    return [node, node.left, [node.left.left, node.left.right], 'left'];
                }
                else{
                    return recurSearch(node.left, elem);
                }
            }
            else{
                if(node.right == null){
                    return null;
                }
                else if(node.right.value == elem){
                    return [node, node.right, [node.right.left, node.right.right], 'right'];
                }
                else{
                    return recurSearch(node.right, elem);
                }
            }
        }
 
        function findNextMin(elem){
            let elemWrapper = recurSearch(rootNode, elem);
            let currNode;

            if(elem == rootNode.value){
                currNode = rootNode.right;
            }
            else{
                currNode = elemWrapper[1].right;
            }
            let hasLeft = true;

            while(hasLeft){
                if(currNode.left == null){
                    hasLeft = false;
                }
                else{
                    currNode = currNode.left;
                }
            }

            return currNode;
        }

        if(this.root == null){
            return null;
        }
        else if(this.root.value == remVal){
            if(this.root.left && this.root.right){
                let repNode = findNextMin(this.root.value);
                let repWrapper = recurSearch(this.root, repNode.value);
                let repParent = repWrapper[0];

                repNode.left = this.root.left;
                if(repNode != this.root.right){                
                    repParent.left = repNode.right;
                    repNode.right = this.root.right;
                }
                this.root = repNode;
            }
            else if(this.root.left){
                this.root = this.root.left;
            }
            else if(this.root.right){
                this.root = this.root.right;
            }
            else{
                this.root = null;
                return;
            }
        }
        else{
            let nodeArr = recurSearch(this.root, remVal);
            if(nodeArr == null){
                return null;
            }

            let branchDir = nodeArr[3];
            
            if(nodeArr[2][0] && nodeArr[2][1]){
                let repNode = findNextMin(remVal);
                let targNode = nodeArr[1];
                let targParent = nodeArr[0];
                let targDir = nodeArr[3];
                let repWrapper = recurSearch(targNode, repNode.value);
                let repParent = repWrapper[0]; 

                targParent[targDir] = repNode;

                if(repParent == targNode){                  
                    if(repNode.right){
                        repNode.right.right = targNode.right;
                    }
                    else{
                        repNode.right = targNode.right;
                    }
                }
                else{
                    repParent.left = repNode.right;
                    repNode.right = targNode.right;
                    repNode.left = targNode.left;
                }

            }
            else if(nodeArr[2][0]){
                nodeArr[0][branchDir] = nodeArr[2][0];
            } 
            else if(nodeArr[2][1]){
                nodeArr[0][branchDir] = nodeArr[2][1];
            }
            else{
                nodeArr[0][branchDir] = null;
            }
        }
    }

    this.invert = function(){
        function recurInv(targNode){
            let tmpNode;
            if(targNode == null){
                return;
            }
            else if(targNode.right || targNode.left){
                tmpNode = targNode.right;
                targNode.right = targNode.left;
                targNode.left = tmpNode;
                recurInv(targNode.right);
                recurInv(targNode.left);
            }
            else{
                return;
            }
        }

        if(this.root == null){
            return null;
            
        }
        else{
            recurInv(this.root);
        }
    }
}