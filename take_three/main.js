alert("JS is working");

var Button = document.getElementsByTagName('button')[5];

var display = function(val){
	
	document.getElementById('bigresult').value += val;
}

Button.onclick="console.log('this is working')";