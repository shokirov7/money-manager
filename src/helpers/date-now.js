const helperDate = {
	nowDate(start_date) {
		const arr = start_date.split('-')

		return arr.join('-')
	},
	newDate() {
		const getDate = new Date()
		const year = getDate.getFullYear()
		const moth = getDate.getMonth()
		const month = moth + 1
		const day = getDate.getDate()

		return `${year}-${month < 10 ? '0' + month : month}-${
			day < 10 ? '0' + day : day
		}`
	},
	lastMonth() {
		
		const getDate = new Date()
		const year = getDate.getFullYear()
		const mont = getDate.getMonth() 
		const moth = mont == 0 ? 12 : mont -1

		const month = moth  + 1
		const day = getDate.getDate()

		return `${year}-${month < 10 ? '0' + month : month}-${
			day < 10 ? '0' + day : day
		}`
	}
}

export default helperDate