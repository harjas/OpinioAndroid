function init(){
	document.addEventListener("deviceready",register,true);
	delete init;
}

function register(){
	$("#registerForm").on("submit",function(e){
		//$("$registerButton",this).attr("disabled","disabled");
		//document.write("inside register");
		var n = $("#name").val();
		var ph = $("#phonenumber").val();
		var em = $("#email",this).val();
		var u = $("#username",this).val();
		var p = $("#password",this).val();
		if(em!='' && u!='' && p!=''){
			//TODO: field validation
			$.post("https://web.engr.illinois.edu/~opinio2014/register.php",{fullname:n,phonenumber:ph,email:em,username:u,password:p},function(res){
				//document.write(res);
				//if(res[1] === 't'){
				 	window.location = "testcontacts.html";
				//}
				// else{
				// 	navigator.notification.alert("Username exists",function(){});		
				// }
			});	
		}
		else{
			navigator.notification.alert("field empty",function(){});
		}
	});
}

function validateEmail(email) { 
    var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
} 