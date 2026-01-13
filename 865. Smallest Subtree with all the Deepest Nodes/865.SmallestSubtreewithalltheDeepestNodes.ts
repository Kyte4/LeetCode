import { TreeNode } from "../util/leetCodeType.ts";

/*
Для заданного корня бинарного дерева глубина каждого узла — это кратчайшее расстояние до корня.
Верните наименьшее поддерево, содержащее все самые глубокие узлы исходного дерева.
Узел называется самым глубоким, если его глубина максимальна среди всех узлов дерева.
Поддерево узла — это дерево, состоящее из этого узла и всех его потомков.

Examples:
 Вход: root = [3,5,1,6,2,0,8,null,null,7,4]
 Выход: [2,7,4]
 Объяснение: мы возвращаем узел со значением 2, отмеченный на схеме жёлтым цветом.
 Узлы, отмеченные синим цветом, являются самыми глубокими узлами дерева.
 Обратите внимание, что узлы 5, 3 и 2 содержат самые глубокие узлы в дереве,
 но узел 2 является наименьшим поддеревом среди них, поэтому мы возвращаем его. 
 Пример 2: 

 Входные данные: root = [1] 
 Выходные данные: [1] 
 Объяснение: корень — это самый глубокий узел в дереве. 
 Пример 3: 

 Входные данные: root = [0,1,3,null,2] 
 Вывод: [2]
 Объяснение: самый глубокий узел в дереве — 2, допустимыми поддеревьями являются поддеревья узлов 2, 1 и 0, но поддерево узла 2 является самым маленьким.


 
*/
// get max depth and elements count on deepest level
 
function subtreeWithAllDeepest(root: TreeNode | null): TreeNode | null {
    const nodeDfs = (node: TreeNode | null, level: number): [number, number, TreeNode | null ] => {
        if (node === null) {
            return [0, -1, null];
        }
		
        const [leftNodes, leftLevel, subLeftTree] = nodeDfs(node.left, level + 1);
        const [rightNodes, rightLevel, subRightTree] = nodeDfs(node.right, level + 1);
		
        if (leftNodes > 0 || rightNodes > 0) {
            if (rightLevel === leftLevel) {
                return [leftNodes + rightNodes, rightLevel, node ];
            } else if (rightLevel > leftLevel) {
                return [rightNodes, rightLevel, subRightTree];
            } else {
                return [leftNodes, leftLevel, subLeftTree];
            }
        }
		return [1, level, node];
    };
	
	let minSubTree = nodeDfs(root,0)
	
	return minSubTree[2];
}