function validationForm(){
    var fname=document.validateForm.fname.value;
    var lname=document.validateForm.lname.value;
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
    else if(city=="" || city==null){
        alert("Please enter your city");
        return false;
    }
    else if(phone=="" || phone==null){
        alert("Please enter your phone no.");
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