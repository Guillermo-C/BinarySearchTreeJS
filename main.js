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

/**
 *
 * @class BinarySearchTree
 * @constructor
 */

function BinarySearchTree() {

    /**
     *
     * @property root -Is the root
     * @type Object
     *
     */
    this.root = null;





}

BinarySearchTree.prototype = {

    //  Add a node to the binary tree.
    add: function () {

        //  Request node value.
        var value = parseInt(prompt("Enter int value: ","0"), 10);

        //  Create node.
        var node = {
            value : value,
            leftNode: null,
            rightNode: null,
            respectiveRoot: 0
        },
            current;            //  Reference this new node as 'current'.

        node.value = value;


        // Make current node the root, if root is empty.
        if(this.root == null){
            this.root = node;
            console.log("Node: " + node.value + " was added as root")
        }
        else{

            current = this.root;

            while(true){

                //  Value is less than current node value. Go left.
                if(value < current.value){

                    if(current.leftNode == null){
                        current.leftNode = node;
                        node.respectiveRoot = current.value; // Test
                        console.log("Node: " + node.value + " added to the left");
                        console.log("respectiveRoot: " + node.respectiveRoot);
                        break;
                    }
                    else{
                        current = current.leftNode;
                    }


                }
                //  Value is more than current node value. Go right.
                else if (value > current.value){

                    if(current.rightNode == null){
                        current.rightNode = node;
                        node.respectiveRoot = current.value;
                        console.log("Node: " + node.value + " added to the right");
                        console.log("respectiveRoot: " + node.respectiveRoot);
                        break;
                    }
                    else{
                        current = current.rightNode;
                    }

                }
                //  If value entered is equal to previously entered number, just ignore it.
                else{
                    console.log("Duplicate value,"+ value +" ignored!");
                    break;
                }
            }

        }

        console.log("--------");

    },

    //  Print all the elements pre-order format.
    preOrder : function(node) {

        if(node!= null){
            console.log(node.value + " ");
            preOrder(node.leftNode);
            preOrder(node.rightNode);
        }


        //current = this.root;

    }


};







