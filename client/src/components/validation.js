export default (data) => {
    let  errors = {};

    if(!data.email.includes('@')){
        errors.e1 = 'Email is not valid';
    }
    if(!data.email){
        errors.e2 = 'Enter Email'
    }
    if(data.email.length > 35){
        errors.e3 = 'missing characters'
    }
    if(!/\d/.test(data.password)){
        errors.e4 = 'Enter at least one number'
    }
    if(data.password.length < 6 || data.password.length > 10){
        errors.p2 = 'Invalid password'
    }
    return errors
};