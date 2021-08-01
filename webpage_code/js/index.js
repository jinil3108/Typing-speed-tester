

function login()
{
    var userEmail = document.getElementById("username1").value;
    var userPassword = document.getElementById("password1").value;

    if(userEmail == '' || userPassword == '')
    {
      alert("Please Enter the given details");
    }
    else
    {
      window.open('./main1.html');
    }
   
}

function signup()
{
    var userEmail = document.getElementById("email1").value;
    var userPassword = document.getElementById("password1").value;
    var userConfirmPassword = document.getElementById("confirmpassword1").value;

    if (userPassword != userConfirmPassword)
    {
        alert("Passwords do not match!");
    }
    else if(userPassword == '' || userConfirmPassword == '' || userEmail == '')
    {
        alert("Please fill the details");
    }
    else
    {
      window.open('./main1.html');
    }
    
}

