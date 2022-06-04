import { Queue } from "../queue/queue";
import { TreeNode } from "../tree_node/tree_node";

export class BinaryTree<H> {
  private rootNode: TreeNode<H> | undefined;

  setRoot(node: TreeNode<H>) {
    this.rootNode = node;
  }

  public addNode(key: H): void {
    this.rootNode = this.addNodeByRecursion(this.rootNode, key);
  }

  public addNodeByRecursion(currentNode: TreeNode<H> | undefined, key: H): TreeNode<H> {
    if(currentNode === undefined) {
      return new TreeNode<H>(key);
    }

    if(key < currentNode.getKey()) {
      currentNode.leftChild = this.addNodeByRecursion(currentNode?.leftChild, key);
    } else if(key > currentNode.getKey()) {
      currentNode.rightChild = this.addNodeByRecursion(currentNode?.rightChild, key);
    }

    return currentNode;
  }

  public levelOrderTraversal(from?: H): H[] {
    if(this.rootNode === null) {
      return [];
    }

    let list: H[] = [];
    let nodes: Queue<TreeNode<H>> = new Queue<TreeNode<H>>();

    nodes.enqueue(this.rootNode!);
    
    while(!nodes.isEmpty()) {
      let currentNode: TreeNode<H> | undefined = nodes.dequeue();
      list.push(currentNode!.getKey());

      if(from) {
        if(currentNode?.getKey() === from) return list.reverse();
        if(from < currentNode!.getKey() && currentNode?.leftChild) {
          nodes.enqueue(currentNode.leftChild);
        } else if (from > currentNode!.getKey() && currentNode?.rightChild) {
          nodes.enqueue(currentNode.rightChild);
        }
      }

      if(!from) { 
        if(currentNode?.leftChild) nodes.enqueue(currentNode.leftChild);
        if(currentNode?.rightChild) nodes.enqueue(currentNode.rightChild);
      }
    }

    return list;
  }
}