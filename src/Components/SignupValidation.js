




const Signup_Validation = (values) => {
    let error = {};

    const emailPattern = /^[^\s]+@[^\s@]+\.[^\s@]+$/
    const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,20}$/;

    // This is the firstname validation
    if (values.firstname === "") {
        error.firstname = "First Name should not be empty"
    }

    else if (values.firstname.length > 30) {
        error.firstname = "First Name should not be more than 30 character"
    }

    else{
        error.firstname = ""
    }

    // This is the lastname validation
    if (values.lastname === "") {
        error.lastname = "Last Name should not be empty"
    }

    else if (values.lastname.length > 30) {
        error.lastname = "Last Name should not be more than 30 character"
    }

    else{
        error.lastname = ""
    }

    // This is the Email validation
    if (values.email === "") {
        error.email = "Email should not be empty"
    }

    else if (!emailPattern.test(values.email)) {
        error.email = "This is not the correct Email"
    }

    else {
        error.email = ""
    }

    // This is the country code validation
    if (values.countryCode === "") {
        error.countryCode = "Country Code should not be empty "
    }
    else{
        error.countryCode=""
    }

    // This is the Phone validation
    if (values.phone === "") {
        error.phone = "Country Code should not be empty "
    }

    else if (values.phone.length > 10) {
        error.phone = "Phone number should not contain more than 10 number"
    }
    else{
        error.phone = ""
    }


    // This is the password field 
    if (values.password === "") {
        error.password = "Password should not be empty"
    }

    else if (!passwordPattern.test(values.password)) {
        error.password = "This is not the strong password"
    }

    else {
        error.password = ""
    }


    //  This is for the confirm Password 
    if (values.confirmPassword != values.password) {
        error.password = "Confirm password and Password don't match"
    }
    else{
        error.confirmPassword = "";
    }

    if (values.dob == "") {
        error.dob = "Date should not be empty"
    }
    else{
        error.dob = ""
    }

    // This is for the gender validation
    if (values.gender == "") {
        error.gender = "There must be some gender"
    }
    else{
        error.gender=""
    }

    return error;
}

export default Signup_Validation;