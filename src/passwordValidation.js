export const forbiddenPasswords = ["amG84h6yeQ", "mc9Q20pdjH", "jnT6Q2f8U5"];

/**
 * Checks if a given password is valid or invalid.
 * If valid it returns true, otherwise false
 * @param {string} password
 * @returns {boolean}
 */

function hasConsecutiveDigits(password) {
  const sequence = "0123456789876543210";
  const matches = password.match(/(\d){4}/g);
  return matches?.some((match) => sequence.includes(match));
}
export default function isValidPassword(password = "") {
  const hasDigits = (string) => /\d/.test(string);
  const hasUpperCase = (string) => /[a-z]/.test(string);
  const hasLowerCase = (string) => /[A-Z]/.test(string);
  const hasSpecialCharacter = (string) => !/^[a-zA-Z\d]+$/.test(string);

  const notInForbiddenPassword = (string) =>
    !forbiddenPasswords.includes(string);

  // The following line ensures, that password is always a string, like the number 128 -> string "128"
  if (typeof password !== "string") password = String(password);

  if (password.length !== 10) return false;

  if (hasSpecialCharacter(password)) return false;

  if (!hasDigits(password)) return false;
  if (!hasUpperCase(password)) return false;
  if (!hasLowerCase(password)) return false;
  if (!notInForbiddenPassword(password)) return false;

  if (new Set([...password]).size < 4) return false;

  if (hasConsecutiveDigits(password)) return false;
  return true;
}
