import React from "react";

const PasswordStrengthIndicator = ({ password }) => {
  // Regular expressions to check for lowercase, uppercase, numeric, and special characters
  const lowercaseRegex = /[a-z]/;
  const uppercaseRegex = /[A-Z]/;
  const numeric = /[0-9]/;
  const specialCharRegex = /[!@#$%^&*(),.?":{}|<>]/;

  // Check if the password meets the criteria
  const containsLowercase = lowercaseRegex.test(password);
  const containsUppercase = uppercaseRegex.test(password);
  const containsNumeric = numeric.test(password);
  const containsSpecialChar = specialCharRegex.test(password);

  // Determine the strength based on the criteria met
  let strength = "Very Weak";
  if (containsLowercase || containsUppercase || containsNumeric || containsSpecialChar) {
    strength = "Weak";
  }
  if ((containsLowercase + containsUppercase + containsNumeric + containsSpecialChar) >= 2) {
    strength = "Medium";
  }
  if ((containsLowercase + containsUppercase + containsNumeric + containsSpecialChar) >= 3) {
    strength = "Strong";
  }
  if ((containsLowercase + containsUppercase + containsNumeric + containsSpecialChar) === 4) {
    strength = "Very Strong";
  }

  // Define the default color and classes for the circles based on the strength
  const defaultColor = "bg-[#D9D9D9]";
  const circleClasses = {
    "Very Weak": [defaultColor, defaultColor, defaultColor, defaultColor, defaultColor],
    Weak: ["bg-[#EB0728]", defaultColor, defaultColor, defaultColor, defaultColor],
    Medium: ["bg-[#EB0728]", "bg-[#EB0728]", defaultColor, defaultColor, defaultColor],
    Strong: ["bg-[#92D16B]", "bg-[#92D16B]", "bg-[#92D16B]", defaultColor, defaultColor],
    "Very Strong": ["bg-[#92D16B]", "bg-[#92D16B]", "bg-[#92D16B]", "bg-[#92D16B]", "bg-[#92D16B]"],
  };

  const circleClassesToShow = circleClasses[strength];

  return (
    <div className="flex mt-4 gap-5">
      {circleClassesToShow.map((circleClass, index) => (
        <div key={index} className={`w-2 h-2 rounded-8 ${circleClass}`} />
      ))}
    </div>
  );
};


const Password = ({password,  setPassword, handlePasswordChange, errorMessage}) =>{
    // In your component where you render the password input and indicator:
return(
    <div className="w-full flex items-start">
  <input
    value={password}
    onChange={(e) => setPassword(e.target.value)}
    required
    type="password"
    name="password"
    id="password"
    data-cy="password"
    placeholder="Create Password"
    className={`
      ${
        (password.length > 0 && handlePasswordChange(password) !== "") ||
        (password.length < 4 && errorMessage === "Password is Required") ||
        (password.length < 4 && errorMessage === "Password is too short!") ||
        errorMessage === "Password Mismatch!!"
          ? "border-[1px] border-[#EB0728]"
          : ""
      }
      m-0 placeholder-[#707070] text-[15px] text-[#707070] w-full font-normal bg-[#E5E5E5] h-[40px] rounded-[30px] pl-5
    `}
  />
  <PasswordStrengthIndicator password={password} />
</div>
)
}
export default Password
