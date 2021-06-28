/**
 * 过滤对象中的数组、空字符、null值
 * 产生新对象
 */
export default obj => {
	let i = {}
	Object.keys(obj).forEach(key => {
		if (obj[key] != null && obj[key].toString().trim() != "" && !(obj[key] instanceof Array)) {
			i[key] = obj[key]
		}
	})
	return i
}
