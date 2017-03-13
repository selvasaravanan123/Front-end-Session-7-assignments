
var sum = findSum([1,2,3]);

console.log("sum of numbers : " +sum);


var sum1 = findSum([1,2,3,4,5,6,7,8,9,10]);

console.log("sum of numbers : " +sum1);

function findSum(arr) {
	var sum = 0;

	for(var i=0;i<arr.length;i++){
		sum += arr[i];
	}

	return sum;
}