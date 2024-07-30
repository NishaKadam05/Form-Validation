function validationForm(){
    var fname=document.validateForm.fname.value;
    var lname=document.validateForm.lname.value;
    var email=document.validateForm.email.value;
    var city=document.validateForm.city.value;
    var phone=document.validateForm.phone.value;
    var address=document.validateForm.address.value;

    if(fname=="" || fname==null){
        alert("Please enter your first name");
        return false;
    }
    else if(lname=="" || lname==null){
        alert("Please enter your last name");
        return false;
    }
    else if(email=="" || email==null){
        alert("Please enter your email");
        return false;
    }
    else if(email===(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9._]+\.[a-zA-Z]{2,}$/)){
        alert("Please enter a valid email");
        return false;
    }
    else if(city=="" || city==null){
        alert("Please enter your city");
        return false;
    }
    else if(phone=="" || phone==null){
        alert("Please enter your phone no.");
        return false;
    }
    else if(phone.length!=10){
        alert("Please enter a valid phone no.");
        return false;
    }
    else if(address=="" || address==null){
        alert("Please enter your address");
        return false;
    }
    else{
        alert("Form Submitted Succesfully")
    }
}

function submit(){
    document.validateForm.submit();
    document.validateForm.reset();
}