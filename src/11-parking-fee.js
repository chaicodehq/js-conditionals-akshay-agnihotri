/**
 * 🅿️ City Central Parking
 *
 * City Central Parking garage is the busiest in downtown. They need an
 * automated system to calculate parking fees. Different vehicle types
 * have different rates, and there's a daily maximum so customers
 * aren't overcharged.
 *
 * Rates (first hour / each additional hour):
 *   - "car":        $5 first hour, then $3/hour
 *   - "motorcycle": $3 first hour, then $2/hour
 *   - "bus":        $10 first hour, then $7/hour
 *
 * Daily Maximum (fee can never exceed this):
 *   - "car":        $30
 *   - "motorcycle": $18
 *   - "bus":        $60
 *
 * Rules:
 *   - Partial hours are rounded UP (e.g., 1.5 hours → 2 hours)
 *   - The fee should never exceed the daily maximum
 *   - If hours is 0 or negative, return -1
 *   - If vehicleType is not "car", "motorcycle", or "bus", return -1
 *
 * Examples:
 *   - car, 1 hour     → $5
 *   - car, 3 hours    → $5 + $3 + $3 = $11
 *   - car, 0.5 hours  → rounds up to 1 hour → $5
 *   - car, 24 hours   → $5 + 23×$3 = $74 → capped at $30
 *
 * @param {number} hours - Number of hours parked
 * @param {string} vehicleType - "car", "motorcycle", or "bus"
 * @returns {number} Parking fee or -1 for invalid input
 */
function helper(first, extra, hours, limit) {
  hours = Math.ceil(hours);

  let firstDay = hours - 24 <= 0 ? hours : 24;
  let fee = Math.min(limit, first + (firstDay - 1) * extra);
  hours -= firstDay;

  fee += Math.min(
    limit * Math.floor(hours / 24),
    Math.floor(hours / 24) * extra,
  );
  fee += Math.min(limit, hours % 24 * extra);
  return fee;
}
export function calculateParkingFee(hours, vehicleType) {
  if (hours <= 0) return -1;
  switch (vehicleType) {
    case "car":
      return helper(5, 3, hours, 30);
    case "motorcycle":
      return helper(3, 2, hours, 18);
    case "bus":
      return helper(10, 7, hours, 60);
    default:
      return -1;
  }
}
