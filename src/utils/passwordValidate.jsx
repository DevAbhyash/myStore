export function validatePassword(email, password) {
  //Validate password function for validating email
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  const passwordRegex =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(
      password
    );
  if (!emailRegex) {
    return "Email Address is Invalid,try again";
  }
  if (!passwordRegex) {
    return "Password is Invalid,try again";
  }
  return true;
}
