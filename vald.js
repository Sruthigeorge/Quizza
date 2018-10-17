function val(){	
	var letters = /^[A-Za-z]+$/;
	var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
	var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    var pass_len = password.length;
	var email = document.getElementById("email").value;
	var repassword = document.getElementById("repassword").value;
	if (username == "" || password= "" || email= "" || repassword= "") {
		alert ("Please fill out the empty field(s)");
		return false;
	}
   else if(!username.match(letters))
	{
		alert('Username must have alphabet characters only');
		username.focus();
		return false;
	}
	else if(pass_len == 0 ||pass_len >= 12 || pass_len < 8){
		alert("Password should not be empty / length be between "+mx+" to "+my);
		password.focus();
		return false;
 
	}
	else if(!email.match(mailformat)){
	alert("You have entered an invalid email address!");
	email.focus();
	return false;	
	}
	else{
		return true;
	}
	
}


	
