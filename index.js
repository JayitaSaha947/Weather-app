
//Getting the city from searching
var city;

document.getElementById("search1").onclick = function(){

	var city1 = document.getElementById("textName").value;
	sessionStorage.setItem("city",city1);
}
//Sending the searched value to a new page
document.getElementById("search2").onclick = function(){
	location.href = "index.html";
}


