import { Queue } from "../queue/queue";
import { TreeNode } from "../tree_node/tree_node";

export class BinaryTree<H> {
  private rootNode: TreeNode<H>;

  constructor(node: TreeNode<H>) {
    this.rootNode = node;
  }

  setRoot(node: TreeNode<H>) {
    this.rootNode = node;
  }

  public addNode(key: H): void {
    this.rootNode = this.addNodeByRecursion(this.rootNode, key);
  }

  public addNodeByRecursion(currentNode: TreeNode<H>, key: H): TreeNode<H> {
    if(currentNode === null) {
      return new TreeNode<H>(key);
    }

    if(key < currentNode.getKey() && currentNode.leftChild) {
      currentNode.leftChild = this.addNodeByRecursion(currentNode.leftChild, key);
    } else if(key > currentNode.getKey() && currentNode.rightChild) {
      currentNode.rightChild = this.addNodeByRecursion(currentNode.rightChild, key);
    }

    return currentNode;
  }

  public levelOrderTraversal(from?: number) {
    if(this.rootNode === null) {
      return;
    }

    let nodes: Queue<TreeNode<H>> = new Queue<TreeNode<H>>();

    nodes.enqueue(this.rootNode);
    while(!nodes.isEmpty()) {
      let currentNode: TreeNode<H> | undefined = nodes.dequeue();

      console.log("key is:" + currentNode!.getKey());

      if(currentNode?.leftChild !== null && currentNode?.leftChild) {
        nodes.enqueue(currentNode!.leftChild);
      }

      if(currentNode?.rightChild) {
        nodes.enqueue(currentNode.rightChild);
      }
    }
  }
}