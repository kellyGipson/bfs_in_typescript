export class TreeNode<T> {
  private key: T;
  leftChild?: TreeNode<T>;
  rightChild?: TreeNode<T>;

  constructor(key: T) {
    this.key = key;
  }

  getKey(): T {
    return this.key;
  }
}