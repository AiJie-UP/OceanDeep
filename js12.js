window.onload=function(){
	var name= document.querySelector("#name");
	var pass= document.querySelector("#pass");
	var div1= document.querySelector("#s1");
	var div2= document.querySelector("#s2");
	var register= document.querySelector("#register");
	var login= document.querySelector("#login");
	var cancel= document.querySelector("#cancel");
	var flag1=false;
	var flag2=false;

	name.addEventListener("blur",function(){
		if(name.value.length!=5){
			div1.innerHTML="please input 5 number.";
		}else if(/[\d]{5}/.test(name.value)==false){
			div1.innerHTML="please input 5 number.";
		}else {flag1=true;div1.innerHTML=""}
	});
	pass.addEventListener("blur",function(){
		if(pass.value.length!=5){
			div2.innerHTML="please input 5 number.";
		}else if(/[\d]{5}/.test(pass.value)==false){
			div2.innerHTML="please input 5 number.";
		}else {flag2=true;div2.innerHTML=""}
	});
	register.addEventListener("click",function(){
		if(localStorage.getItem(name.value)!=null){
			confirm("the username have already exist,please change.");
			return(0);
		}
		var str1=name.value;
		var str2=pass.value;
		if(flag1&&flag2){
			localStorage.setItem(str1,str2);
			confirm("successful!");
		}
	});
	login.addEventListener("click",function(){
		
		if(pass.value==localStorage.getItem(name.value)){
			confirm("you did it!");
			location=("oceandeep/onepiece.html");
		}
		else confirm("username or password is wrong!");
	});
	cancel.addEventListener("click",function(){
		if(pass.value==localStorage.getItem(name.value)){
			localStorage.removeItem(name.value);
			confirm("cancel successfully!");
		}
		else confirm("username or password is wrong!");
	});
	for(i=0;;i++){
			{
				if(localStorage.key(i)!=null) console.log("users");
					else break;
			}
}


}
