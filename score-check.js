function finalScore(result) {
  // Step 1: Check if input is a valid object
  if (typeof result !== "object" || result === null || Array.isArray(result)) {
    return "Invalid";
  }

  const { right, wrong, skip } = result;

  // Step 2: Check properties are numbers
  if (
    typeof right !== "number" ||
    typeof wrong !== "number" ||
    typeof skip !== "number"
  ) {
    return "Invalid";
  }

  // Step 3: Total must be 100
  if (right + wrong + skip !== 100) {
    return "Invalid";
  }

  // Step 4: Calculate score
  const score = right - wrong * 0.5;

  // Step 5: Return rounded score
  return Math.round(score);
}
// console.log(finalScore({ right: 67, wrong: 23, skip: 10 }));
