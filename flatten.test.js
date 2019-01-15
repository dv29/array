const flatten = require('./flatten');

[
	{
		label: 'just deep enough',
		input: [1, 2, 3, [2, 3]],
		expected: [1, 2, 3, 2, 3],
	},
	{
		label: 'too deep',
		input: [1, 2, 3, [2, 3, [4, 5, 6]]],
		expected: [1, 2, 3, 2, 3, 4, 5, 6],
	},
	{
		label: 'very very deep',
		input: [1, 2, 3, [2, 3, [4, 5, 6, [7, 8, 9]]]],
		expected: [1, 2, 3, 2, 3, 4, 5, 6, 7, 8, 9],
	},
].forEach(({ label, input, expected }, i) => {
	test(`when array is ${label}`, () => {
		expect(flatten(input)).toStrictEqual(expected);
	});
});
