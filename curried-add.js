// Write a function called curriedAdd. If you give this function a number, it returns a new function to you. If you give this function no arguments, it returns the total of all the numbers you’ve passed to it so far.

function curriedAdd(total, nums = []) {
	if (total === undefined) {
		let sum = 0;
		for (let num of nums) {
			sum += num;
		}
		return sum;
	}
	nums.push(total);

	return function (num) {
		return curriedAdd(num, nums);
	};
}

module.exports = { curriedAdd };
