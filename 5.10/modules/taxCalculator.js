const TAX_RATE = 0.1;

function calculateTax(income) {
  return income * TAX_RATE;
}

module.exports = { calculateTax };
