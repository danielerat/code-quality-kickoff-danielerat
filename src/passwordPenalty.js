/**
 * Calculates the sum of penalty points for a given password.
 * Double characters like `aa` count as 1 penalty point, triples and more are 2 points.
 * It returns the sum of penalty points for a password or 0.
 * @param {string} password
 * @returns {number}
 */
export default function penaltyPoints(password = "") {
  // The following line ensures, that password is always a string, like the number 128 -> string "128"
  if (!password) return 0;
  if (typeof password !== "string") password = String(password);

  // Regex to match Adjacent&Similar characters
  const regex = /(\w)\1+/g;
  const sequences = password.match(regex);
  if (!sequences) return 0;

  return sequences.reduce((acc, val) => {
    val.length === 2 ? (acc += 1) : (acc += 2);
    return acc;
  }, 0);
}
