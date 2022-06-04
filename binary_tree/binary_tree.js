"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BinaryTree = void 0;
const queue_1 = require("../queue/queue");
const tree_node_1 = require("../tree_node/tree_node");
class BinaryTree {
    setRoot(node) {
        this.rootNode = node;
    }
    addNode(key) {
        this.rootNode = this.addNodeByRecursion(this.rootNode, key);
    }
    addNodeByRecursion(currentNode, key) {
        if (currentNode === undefined) {
            return new tree_node_1.TreeNode(key);
        }
        if (key < currentNode.getKey()) {
            currentNode.leftChild = this.addNodeByRecursion(currentNode === null || currentNode === void 0 ? void 0 : currentNode.leftChild, key);
        }
        else if (key > currentNode.getKey()) {
            currentNode.rightChild = this.addNodeByRecursion(currentNode === null || currentNode === void 0 ? void 0 : currentNode.rightChild, key);
        }
        return currentNode;
    }
    levelOrderTraversal(from) {
        if (this.rootNode === null) {
            return [];
        }
        let list = [];
        let nodes = new queue_1.Queue();
        nodes.enqueue(this.rootNode);
        while (!nodes.isEmpty()) {
            let currentNode = nodes.dequeue();
            list.push(currentNode.getKey());
            if (from) {
                if ((currentNode === null || currentNode === void 0 ? void 0 : currentNode.getKey()) === from)
                    return list.reverse();
                if (from < currentNode.getKey() && (currentNode === null || currentNode === void 0 ? void 0 : currentNode.leftChild)) {
                    nodes.enqueue(currentNode.leftChild);
                }
                else if (from > currentNode.getKey() && (currentNode === null || currentNode === void 0 ? void 0 : currentNode.rightChild)) {
                    nodes.enqueue(currentNode.rightChild);
                }
            }
            if (!from) {
                if (currentNode === null || currentNode === void 0 ? void 0 : currentNode.leftChild)
                    nodes.enqueue(currentNode.leftChild);
                if (currentNode === null || currentNode === void 0 ? void 0 : currentNode.rightChild)
                    nodes.enqueue(currentNode.rightChild);
            }
        }
        return list;
    }
}
exports.BinaryTree = BinaryTree;
