function mySignupPage()
{
    const pattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    let Email = document.getElementById('email');
    let username = document.getElementById("username");
    let password = document.getElementById('password');
    let cpassword = document.getElementById('cpassword');
    let flag = 1;
    // Name
    if(username.value == "")
    {
        document.getElementById("userError").innerHTML = "*";
        flag = 0;
    }
    else if(username.value.length < 3)
    {
        document.getElementById("userError").innerHTML = "**";
        flag = 0;
    }
    else
    {
        document.getElementById("userError").innerHTML = "";
        flag = 1;
    }
    Email
    if(Email.value == "")
    {
        document.getElementById('userEmail').innerHTML = "*";
        flag = 0;
    }
    else if(Email.value.match(pattern))
    {
        document.getElementById('userEmail').innerHTML = "**";
        flag = 0
    }
    else
    {
        document.getElementById('userEmail').innerHTML = "";
        flag = 1;
    }
    password
    if(password.value == "")
    {
        document.getElementById('userPasswordError').innerHTML = "*";
        flag = 0;
    }
    else
    {
        document.getElementById('userPasswordError').innerHTML = "";
        flag = 1;
    }
    if(cpassword.value != password.value)
    {
        document.getElementById('userCpasswordError').innerHTML = "*password and conform not match";
        flag = 0;
    }
    else
    {
        document.getElementById('userCpasswordError').innerHTML = "";
        flag= 1;
    }
    // Gender
    let Gender = document.forms["myform"]["gender"];
    if(Gender[0].checked == false && Gender[1].checked == false && Gender[2].checked == false)
    {
        document.getElementById('genderError').innerHTML = "*";
        flag = 0;
    }
    else
    {
        document.getElementById('genderError').innerHTML = "";
        flag = 1;
    }
    // Terms and conditions
    var checked = document.forms["myform"]["agree"].checked;
    if (!checked) 
    {
        document.getElementById('checkboxError').innerHTML = "*";
        flag = 0;
    }
    else
    {
        document.getElementById('checkboxError').innerHTML = "";
        flag = 1;
    }
    if(flag)
    {
        return true;
    }
    else
    {
        return false
    }
}
function passwordFunction()
{
    var x = document.getElementById('password');
    var y = document.getElementById('eyeclose1');
    var z = document.getElementById('eyeopen1');
    if(x.type =='password')
    {
        x.type = 'text';
        y.style.display = 'none';
        z.style.display = 'block';
    }
    else
    {
        x.type = 'password';
        y.style.display = 'block';
        z.style.display = 'none';
    }
}
function cpasswordFunction()
{
    var x = document.getElementById('cpassword');
    var y = document.getElementById('eyeclose2');
    var z = document.getElementById('eyeopen2');
    if(x.type =='password')
    {
        x.type = 'text';
        y.style.display = 'none';
        z.style.display = 'block';
    }
    else
    {
        x.type = 'password';
        y.style.display = 'block';
        z.style.display = 'none';
    }
}