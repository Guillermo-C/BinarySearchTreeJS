/**
 * Created by ninjamemo on 6/2/17.
 */
/*console.log("what?")


var printMyName = function (name) {
    console.log("Your name is:" + name)
}

printMyName("Memo")*/

"use strict";

/*class Node {


    constructor(name){
        this.name = name;

        var namis = "WTF";
    }



    sayName(){
        console.log(this.name)
    }


}*/

/*var Node = {
    value:0,
    leftNode: null,
    rightNode:null,
    printVal: function () {
        console.log("Value: " + this.value)
    }
}*/

/*function Node(value, rightNode, leftNode) {
    this.value = value;
    this.rightNode = rightNode;
    this.leftNode = leftNode;
    this.printVal = function () {
        console.log("Value: " + this.value)
    };
}*/


function BinarySearchTree() {
    this.root = null;
}

BinarySearchTree.prototype= {

    //  Add a node to the binary tree.
    add: function () {

        //  Create node.
        var node = {
            value : value,
            leftNode: null,
            rightNode: null
        }

        //  Request node value.
        var value = prompt("Enter int value: ", 0);


        node.value = value;


        // Make current node the root, if root is empty.
        if(this.root === null){
            this.root = node;
            console.log("Node: " + node.value + " was added as root")
        }
        alert("Node value entered: " + node.value);
    }


}







