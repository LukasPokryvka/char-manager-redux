// calculate percentage in form xx.xx%
export const getPercentage = (a, b) => {
	return ((a / b) * 100).toFixed(2)
}

// compare function to sort array of objects
export const compareObjects = (a, b) => {
	if (a.name < b.name) {
		return 1
	}
	if (a.name > b.name) {
		return -1
	}
	return 0
}
