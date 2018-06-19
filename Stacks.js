var homeworkStack = ["BIO12","HIS80","MAT122","PSY44"];

var tmpStack = [];
var hwLen = homeworkStack.length - 1;
for(let i = 0; i < hwLen; i++){
    tmpStack.push(homeworkStack[i])
}

tmpStack = [...tmpStack, "CS50"];

homeworkStack = tmpStack;
