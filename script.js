const arr = [1, 2, 3, 4, 1, 0, 2, 2];

const divide = (arr, n) => {
  const result = [];
  let currentChunk = [];
  let currentSum = 0;

  for (let num of arr) {
    // Check if adding the current number would exceed the max sum
    if (currentSum + num > n) {
      // If it does, push the current chunk to the result and start a new one
      result.push(currentChunk);
      currentChunk = [];
      currentSum = 0;
    }
    
    // Add the current number to the current chunk
    currentChunk.push(num);
    currentSum += num;
  }

  // Add any remaining numbers in the last chunk to the result
  if (currentChunk.length) {
    result.push(currentChunk);
  }

  return result;
};

const n = parseInt(prompt("Enter n: "), 10);
alert(JSON.stringify(divide(arr, n)));
