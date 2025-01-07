export const checkValidData = (email,password) => {

//const isNameValid = /^\p{L}+[\p{L}\p{Pd}\p{Zs}']*\p{L}+$|^\p{L}+$/.test(name);
const isEmailValid =  /^[a-zA-Z0-9_.+\-]+[\x40][a-zA-Z0-9.\-]+\.[a-zA-Z]{2,}$/.test(email);
const isPasswordValid = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@$!%*#?&^_-]).{8,}/.test(password); 

if(!isEmailValid) return "Email ID is not valid";
if(!isPasswordValid) return "Password is not valid";
//if(!isNameValid) return "Name is not valid";

return null;

};