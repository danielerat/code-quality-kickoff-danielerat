export const forbiddenPasswords = ["amG84h6yeQ", "mc9Q20pdjH", "jnT6Q2f8U5"];

/**
 * Checks if a given password is valid or invalid.
 * If valid it returns true, otherwise false
 * @param {string} password
 * @returns {boolean}
 */

function hasConsecutive(password){
  const sequence = '0123456789876543210';
  const matches = password.match(/(\d){4}/g);
  return matches?.some((match) => sequence.includes(match));
}
export default function isValidPassword(password = "") {
  // The following line ensures, that password is always a string, like the number 128 -> string "128"
  if (typeof password !== "string") password = String(password);
  //Length
  if(password.length !== 10) return false;
  
if(!(/^[a-zA-Z\d]+$/.test(password))) return false
  if(
    !(/\d/.test(password)) ||
    !(/[a-z]/.test(password)) ||
    !(/[A-Z]/.test(password))) 
   
    return false
    if (new Set([...password]).size<4) return false;
  if(forbiddenPasswords.includes(password)) return false;
  
  if (new Set([...password]).size<4) return false;
    if(hasConsecutive(password)) return false
    return true
  
}
