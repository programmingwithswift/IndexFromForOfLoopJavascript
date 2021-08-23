const shoppingList = [
	'bread',
	'milk',
	'pie',
	'juice'
]

for (const index of shoppingList.keys()) {
	console.log(`${shoppingList[index]} at ${index}`)
}

for (const [index, shoppingItem] of shoppingList.entries()) {
	console.log(`${shoppingItem} at ${index}`)
}
