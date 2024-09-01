export default function currencyConverter(quantity: number): string {
  // Ensure the quantity is a valid number
  if (isNaN(quantity)) {
    return "$0.00";
  }

  // Convert the number to a fixed 2 decimal places
  const fixedNumber = Math.abs(quantity).toFixed(2);

  // Split the number into whole and decimal parts
  const [wholePart, decimalPart] = fixedNumber.split(".");

  // Add commas for thousands
  const formattedWholePart = wholePart.replace(/\B(?=(\d{3})+(?!\d))/g, ",");

  // Combine the parts with the dollar sign and handle negative numbers
  const formattedAmount = `$${formattedWholePart}.${decimalPart}`;
  return quantity < 0 ? `-${formattedAmount}` : formattedAmount;
}
