// Business (or back-end) logic:

var add = function(number1, number2) {
	return number1 + number2;
};
var subtract = function(number1, number2) {
return number1 - number2;
};

var multiply = function(number1, number2) {
return number1 * number2;
};

var divide = function(number1, number2) {
return number1 / number2;
};

//User interface (or front-end) logic:

$(document).ready(function(){
	$("#add").click(function(event){
		event.preventDefault();
		var number1 = parseInt($("#input1").val());
		var number2 = parseInt($("#input2").val());
		var result =add(number1, number2);
		$("#output").text(result);
	});
	$("#subtract").click(function(event){
		event.preventDefault();
		var number1 = parseInt($("#input1").val());
		var number2 = parseInt($("#input2").val());
		var result =subtract(number1, number2);
		$("#output").text(result);
	});
	$("#multiply").click(function(event){
		event.preventDefault();
		var number1 = parseInt($("#input1").val());
		var number2 = parseInt($("#input2").val());
		var result =multiply(number1, number2);
		$("#output").text(result);
	});
	$("#divide").click(function(event){
		event.preventDefault();
		var number1 = parseInt($("#input1").val());
		var number2 = parseInt($("#input2").val());
		var result =divide(number1, number2);
		$("#output").text(result);
	});
});
