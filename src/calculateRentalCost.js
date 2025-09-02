/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const LONG_TERM = 7;

  const SHORT_TERM = 3;

  const LONG_TERM_DISCOUNT = 50;

  const SHORT_TERM_DISCOUNT = 20;

  let result = days * 40;

  if (days >= SHORT_TERM && days < LONG_TERM) {
    result -= SHORT_TERM_DISCOUNT;
  }

  if (days > LONG_TERM - 1) {
    result -= LONG_TERM_DISCOUNT;
  }

  return result;
}

module.exports = calculateRentalCost;
