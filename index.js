"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const binary_tree_1 = require("./binary_tree/binary_tree");
let tree = new binary_tree_1.BinaryTree();
tree.addNode(7);
tree.addNode(8);
tree.addNode(4);
tree.addNode(3);
tree.addNode(5);
tree.addNode(2);
tree.addNode(9);
tree.addNode(11);
console.log(tree.levelOrderTraversal(5));
/*
*        7
*     4     8
*   3   5     9
* 2             11
*
*/ 
