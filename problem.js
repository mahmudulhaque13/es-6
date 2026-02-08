function newPrice(currentPrice, discount) {
  // Validation
  if (
    typeof currentPrice !== "number" ||
    typeof discount !== "number" ||
    discount < 0 ||
    discount > 100
  ) {
    return "Invalid";
  }

  // Calculate discount
  const discountAmount = (currentPrice * discount) / 100;
  const finalPrice = currentPrice - discountAmount;

  // Return with 3 decimal places as string
  return finalPrice.toFixed(3);
}

console.log(newPrice(1500, 20));
