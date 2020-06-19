function validation(){

    var firstname = document.getElementById('fname').value;
    var secondname = document.getElementById('sname').value;
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
    var confirmpassword = document.getElementById('confirmpassword').value;


    if (firstname==""){
        document.getElementById('fnameid').innerHTML="**Please fill the first name";
        return false;
    }
    var pattern=/^[a-zA-Z]*$/;
    if((firstname=="")||!(pattern.test(firstname))){
        document.getElementById('fnameid').innerHTML="**Should contain only characters";
        return false;
    }
    


    if (secondname==""){
        document.getElementById('snameid').innerHTML="**Please fill the second name";
        return false;
    }
    var pattern=/^[a-zA-Z]*$/;
    if((secondname=="")||!(pattern.test(secondname))){
        document.getElementById('snameid').innerHTML="**Should contain only characters";
        return false;
    }



    if (email==""){
        document.getElementById('emailid').innerHTML="**Please fill the email id";
        return false;
    }
    var pattern=/^([a-zA-Z0-9\.-]+)@([a-zA-Z0-9-]+).([a-z]{2,5})(.[a-z]{2,4})?$/;
    if((email=="")||!(pattern.test(email))){
        document.getElementById('emailid').innerHTML="**Invalid email";
        return false;
    }



    if (password==""){
        document.getElementById('passwordid').innerHTML="**Please fill the password ";
        return false;
    }
    if ((password.length<5)||(password.length>15)){
        document.getElementById('passwordid').innerHTML="**please fill the  5 to 15 letters ";
        return false;
    }



    if (confirmpassword!==password){
        document.getElementById('confirmpasswordid').innerHTML="**Passwords are not matching";
        return false;
    }
    if (confirmpassword==""){
        document.getElementById('confirmpasswordid').innerHTML="**Please confirm password";
        return false;
    }
    
    
   
}