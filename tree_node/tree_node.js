"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TreeNode = void 0;
class TreeNode {
    constructor(key) {
        this.key = key;
    }
    getKey() {
        return this.key;
    }
    getLeftChild() {
        return this.leftChild;
    }
    getRightChild() {
        return this.rightChild;
    }
    setLeftChild(leftNode) {
        this.leftChild = leftNode;
    }
    setRightChild(rightNode) {
        this.leftChild = rightNode;
    }
}
exports.TreeNode = TreeNode;
