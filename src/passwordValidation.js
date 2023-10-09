export const forbiddenPasswords = ["amG84h6yeQ", "mc9Q20pdjH", "jnT6Q2f8U5"];

/**
 * Checks if a given password is valid or invalid.
 * If valid it returns true, otherwise false
 * @param {string} password
 * @returns {boolean}
 */

function hasConsecutive(str){
  const consecutive="1234567890987654321";
  const matches=str.match(/\d+/gi)?.filter(x=>x.length>3)
  console.log(matches)
 for(x of matches){
      if(consecutive.startsWith(x)||consecutive.endsWith(x)) {return true }}
 return false
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

    return true
  
}
