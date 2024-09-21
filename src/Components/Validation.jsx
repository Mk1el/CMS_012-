export default function Validation(values) {
    let errors = {};
    const email_pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const password_pattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[a-zA-Z0-9]{8,}$/;

    if(values?.name){
    if (values.name === "") {
      errors.name = "Name should not be empty";
    } else if (values.name.length < 3 || values.name.length > 30) {
      errors.name = "Name must have at least three characters and no more than thirty characters";
    } else {
      errors.name = "";
    }
    }
    if (values.email === "") {
      errors.email = "Email should not be empty";
    } else if (!email_pattern.test(values.email)) {
      errors.email = "Invalid Email!!";
    } else {
      errors.email = "";
    }
  
    if (values.password === "") {
      errors.password = "Password should not be empty";
    } else if (!password_pattern.test(values.password)) {
      errors.password = "Password must contain at least one lowercase letter, one uppercase letter, and one number, and be at least 8 characters long";
    } else {
      errors.password = "";
    }
  
    return errors;
  }
  