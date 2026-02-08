function gonoVote(votes) {
  // Step 1: Check if input is an array
  if (!Array.isArray(votes)) {
    return "Invalid";
  }

  let haCount = 0;
  let naCount = 0;

  // Step 2: Count votes
  for (let vote of votes) {
    if (vote === "ha") {
      haCount++;
    } else if (vote === "na") {
      naCount++;
    }
  }

  // Step 3: Compare counts
  if (haCount > naCount) {
    return true;
  } else if (haCount === naCount) {
    return "equal";
  } else {
    return false;
  }
}
// console.log(gonoVote(["ha", "na", "ha", "na"]));
// console.log(gonoVote(["ha", "na", "na"]));
