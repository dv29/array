const flatten = (arr) => arr.reduce((acc, curr) => {
	if (!Array.isArray(curr)) {
		return acc.concat(curr);
	}
	return acc.concat(flatten(curr));
}, []);

module.exports = flatten;
