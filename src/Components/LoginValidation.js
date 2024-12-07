



const LoginValidation=(values)=>{
    let error = {};

    const emailPattern = /^[^\s]+@[^\s@]+\.[^\s@]+$/
    const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,20}$/;

    if(values.email === ""){
        error.email = "Email should not be empty"
    }

    else if(!emailPattern.test(values.email)){
        error.email = "This is not the correct Email"
    }
    
    else{
        error.email = ""
    }



    if(values.password === ""){
        error.password = "Password should not be empty"
    }

    else if(!passwordPattern.test(values.password)){
        error.password = "This is not the strong password"
    }
    
    else{
        error.password = ""
    }

    return error;
}

export default LoginValidation;