"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BinaryTree = void 0;
const queue_1 = require("../queue/queue");
const tree_node_1 = require("../tree_node/tree_node");
class BinaryTree {
    constructor(node) {
        this.rootNode = node;
    }
    setRoot(node) {
        this.rootNode = node;
    }
    addNode(key) {
        this.rootNode = this.addNodeByRecursion(this.rootNode, key);
    }
    addNodeByRecursion(currentNode, key) {
        if (currentNode === null) {
            return new tree_node_1.TreeNode(key);
        }
        if (key < currentNode.getKey() && currentNode.leftChild) {
            currentNode.leftChild = this.addNodeByRecursion(currentNode.leftChild, key);
        }
        else if (key > currentNode.getKey() && currentNode.rightChild) {
            currentNode.rightChild = this.addNodeByRecursion(currentNode.rightChild, key);
        }
        return currentNode;
    }
    levelOrderTraversal(from) {
        if (this.rootNode === null) {
            return;
        }
        let nodes = new queue_1.Queue();
        nodes.enqueue(this.rootNode);
        while (!nodes.isEmpty()) {
            let currentNode = nodes.dequeue();
            console.log("key is:" + currentNode.getKey());
            if ((currentNode === null || currentNode === void 0 ? void 0 : currentNode.leftChild) !== null && (currentNode === null || currentNode === void 0 ? void 0 : currentNode.leftChild)) {
                nodes.enqueue(currentNode.leftChild);
            }
            if (currentNode === null || currentNode === void 0 ? void 0 : currentNode.rightChild) {
                nodes.enqueue(currentNode.rightChild);
            }
        }
    }
}
exports.BinaryTree = BinaryTree;
