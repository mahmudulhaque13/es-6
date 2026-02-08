function validOtp(otp) {
  // Step 1: Check type
  if (typeof otp !== "string") {
    return "Invalid";
  }

  // Step 2: Check length
  if (otp.length !== 8) {
    return false;
  }

  // Step 3: Check starting characters
  if (!otp.startsWith("ph-")) {
    return false;
  }

  return true;
}
// console.log(validOtp("ph-10985")); // true
console.log(validOtp("ph-1234")); // false
// console.log(validOtp("abc-12345"));    // false
// console.log(validOtp(["ph-10985"]));   // "Invalid"
// console.log(validOtp(12345678));
