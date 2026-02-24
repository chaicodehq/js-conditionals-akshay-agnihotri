/**
 * 🔒 SecureApp Password Checker
 *
 * You're building the signup page for SecureApp, a new productivity tool.
 * The product manager wants a password strength meter that gives users
 * real-time feedback as they type their password.
 *
 * The checker evaluates 5 criteria:
 *   1. At least 8 characters long
 *   2. Contains at least one uppercase letter (A-Z)
 *   3. Contains at least one lowercase letter (a-z)
 *   4. Contains at least one number (0-9)
 *   5. Contains at least one special character (!@#$%^&*()_+-=[]{}|;:,.<>?)
 *
 * Strength levels based on how many criteria are met:
 *   - 0–1 criteria → "weak"
 *   - 2–3 criteria → "medium"
 *   - 4 criteria   → "strong"
 *   - All 5        → "very strong"
 *
 * Rules:
 *   - Empty string → "weak"
 *   - Non-string input → "weak"
 *
 * @param {string} password - The password to evaluate
 * @returns {string} "weak", "medium", "strong", or "very strong"
 */
function isContainsUpperCase(password) {
  const upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  for (let i = 0; i < password.length; i++) {
    if (upper.includes(password.charAt(i))) return true;
  }
  return false;
}
function isContainsLowerCase(password) {
  const lower = "abcdefghijklmnopqrstuvwxyz";
  for (let i = 0; i < password.length; i++) {
    if (lower.includes(password.charAt(i))) return true;
  }
  return false;
}
function isContainsDigit(password) {
  const digit = "0123456789";
  for (let i = 0; i < password.length; i++) {
    if (digit.includes(password.charAt(i))) return true;
  }
  return false;
}
function isContainsSpecialCharacter(password) {
  const specialCharacter = "!@#$%^&*()_+-=[]{}|;:,.<>?";
  for (let i = 0; i <password.length; i++) {
    if (specialCharacter.includes(password.charAt(i))) return true;
  }
  return false;
}
export function checkPasswordStrength(password) {
  if(typeof password !== "string") return "weak";
  let count=0;
  if (password.length >= 8) count++;
  if (isContainsUpperCase(password)) count++;
  if (isContainsLowerCase(password)) count++;
  if (isContainsDigit(password)) count++;
  if (isContainsSpecialCharacter(password)) count++;

  if(count<=1) return "weak";
  if(count<=3) return "medium";
  if(count<=4) return "strong";
  return "very strong";
}
