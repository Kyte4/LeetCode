import { TreeNode } from "../util/leetCodeType";

/*Дано корневое дерево бинарного дерева. Разделите бинарное дерево на два поддерева,
удалив одно ребро, так,  чтобы произведение сумм поддеревьев было максимальным.
Верните максимальное произведение сумм двух поддеревьев. 
Поскольку ответ может быть слишком большим, верните его по модулю 109 + 7.
Обратите внимание, что ответ нужно максимизировать до взятия остатка от деления, а не после.
*/

function getTotalSum(root: TreeNode | null): number {
    if (root === null) {
        return 0;
    }

    let leftSum = getTotalSum(root.left)
	let rightSum = getTotalSum(root.right)
	let totalSum = leftSum + rightSum + root.val 
	
	return totalSum;
};



function maxProduct(root: TreeNode | null): number {
	let totalSum = getTotalSum(root)
	let maxProd = 0
	function productNode(node: TreeNode | null): number{
		if (node === null) return 0; 
		
		let left = productNode(node.left);
		let right = productNode(node.right);
		let subtreeSum = node.val + left + right  
		let product = (totalSum - subtreeSum) * subtreeSum  
		
		if (product > maxProd) { maxProd = product}
		
		return subtreeSum;
	}
	productNode(root)
	const MOD = 1e9 + 7
	return maxProd % MOD
}