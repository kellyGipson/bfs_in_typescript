import { BinaryTree } from "./binary_tree/binary_tree";
import { TreeNode } from "./tree_node/tree_node";

let tree = new BinaryTree<number>(new TreeNode<number>(7));
tree.addNode(8);
tree.addNode(4);
tree.addNode(3);
tree.addNode(5);
tree.addNode(2);
tree.addNode(9);
tree.addNode(11);
tree.levelOrderTraversal();