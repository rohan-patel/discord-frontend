export const validateLoginForm = ({ principal, password }) => {
  // const isPrincipalValid = validatePrincipal(princiapl);

  // const isEmailValid = validateEmail(principal);

  if (!(principal && password)) {
    return {
      value: false,
      message: "Please Enter all Credentials",
    };
  }
  // else if (!validatePassword(password)) {
  //   return {
  //     value: false,
  //     message:
  //       "Password should contain atleast 1 numeric, 1 Uppercase letter, 1 Lowercase letter and a Special Character",
  //   };
  // }

  return {
    value: true,
    message: "Login!",
  };
  // const isPasswordValid = validatePassword(password);
};

export const validateRegisterForm = ({ email, username, password }) => {
  const isPasswordValid = validatePassword(password);
  const isEmailValid = validateEmail(email);
  const isUsernameValid = validateUsername(username);

  if (!(email && password && username)) {
    return {
      value: false,
      message: "Please Enter all Credentials",
    };
  } else if (!isPasswordValid) {
    return {
      value: false,
      message:
        "Password should contain atleast 1 numeric, 1 Uppercase letter, 1 Lowercase letter and a Special Character",
    };
  } else if (!isEmailValid) {
    return {
      value: false,
      message: "Enter valid Email Address",
    };
  } else if (!isUsernameValid) {
    return {
      value: false,
      message:
        "Username should of atleast 3 and max 30 characters and should not contain .,;:'\"",
    };
  }
  return {
    value: true,
    message: "Register!",
  };
};

const validatePassword = (password) => {
  const passwordPattern =
    /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{6,12}$/;
  return passwordPattern.test(password);
};

const validatePrincipal = (principal) => {};

export const validateEmail = (email) => {
  const emailPattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  return emailPattern.test(email);
};

const validateUsername = (username) => {
  const usernamePattern =
    /^[A-Za-z][A-Za-z0-9_@!#%&\*\(\)=\?\*\+\$\^-~`\[\]\{\}\\\|<>\/]{3,29}$/;
  return usernamePattern.test(username);
};
