export class TreeNode<T> {
  private key: T;
  private leftChild?: TreeNode<T>;
  private rightChild?: TreeNode<T>;

  constructor(key: T) {
    this.key = key;
  }

  getKey(): T {
    return this.key;
  }

  getLeftChild(): TreeNode<T> | undefined {
    return this.leftChild;
  }

  getRightChild(): TreeNode<T> | undefined {
    return this.rightChild;
  } 

  setLeftChild(leftNode: TreeNode<T>) {
    this.leftChild = leftNode;
  } 

  setRightChild(rightNode: TreeNode<T>) {
    this.leftChild = rightNode;
  } 
}