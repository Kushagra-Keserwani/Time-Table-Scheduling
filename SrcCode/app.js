// $("ul").on("click","li", function(){
// 	$(this).toggleClass("completed");

// })
var firstYearNames = [] ;
var firstYearCodes = [] ;
var firstYearCredits = [] ;

var secondYearNames = [] ;
var secondYearCodes = [] ;
var secondYearCredits = [];

var thirdYearNames = [] ;
var thirdYearCodes = [] ;
var thirdYearCredits = [];

var finalYearNames = [] ;
var finalYearCodes = [] ;
var finalYearCredits = [];

$("ul").on("click", "span", function(event){
	// if($(this).attr("id") == 'firstYearList' ){
	$(this).parent().fadeOut("100ms",function(){
		var q = $(this).text();
		 if($(this).parent().attr("id") == 'firstYearList' ){
			 var i = firstYearCodes.indexOf(q.slice(q.length-4, q.length-1));
			firstYearNames.splice(i,1);
			firstYearCodes.splice(i,1);
			firstYearCredits.splice(i,1);
			console.log(firstYearCodes);
		 }
		 if($(this).parent().attr("id") == 'secondYearList' ){
			var i = secondYearCodes.indexOf(q.slice(q.length-4, q.length-1));
		   secondYearNames.splice(i,1);
		   secondYearCodes.splice(i,1);
		   secondYearCredits.splice(i,1);
		   console.log(secondYearCodes);
		}
		if($(this).parent().attr("id") == 'thirdYearList' ){
			var i = thirdYearCodes.indexOf(q.slice(q.length-4, q.length-1));
		   thirdYearNames.splice(i,1);
		   thirdYearCodes.splice(i,1);
		   thirdYearCredits.splice(i,1);
		   console.log(thirdYearCodes);
		}
		if($(this).parent().attr("id") == 'finalYearList' ){
			var i = finalYearCodes.indexOf(q.slice(q.length-4, q.length-1));
			finalYearNames.splice(i,1);
			finalYearCodes.splice(i,1);
			finalYearCredits.splice(i,1);
		   console.log(finalYearCodes);
		}
		 $(this).remove();
	})
	event.stopPropagation();

});





$("#firstYear input:nth-of-type(3)").on('keypress',function(evt){
	if(evt.which === 13){
		var n = $("#firstYear input:nth-of-type(1)").first().val();
		var a = $("#firstYear input:nth-of-type(2)").val();
		var c = $(this).val();
		
		$(this).val("");
		$("ul#firstYearList").append("<li><span class ='Del'><i class='fas fa-trash'> </i></span>" + n +"<span class='code'>"+ a +"</span><span class='credits'>"+ c +"</span></li>");
		$("#firstYear input:nth-of-type(1)").val("");
		$("#firstYear input:nth-of-type(2)").val("");
		firstYearNames.push(n);
		firstYearCodes.push(a);
		firstYearCredits.push(c);
		console.log(firstYearNames);
		console.log(firstYearCodes);
	}

});

$("#secondYear input:nth-of-type(3)").on('keypress',function(evt){
	if(evt.which === 13){
		var n = $("#secondYear input:nth-of-type(1)").first().val();
		var a = $("#secondYear input:nth-of-type(2)").val();
		var c = $(this).val();
		
		$(this).val("");
		$("ul#secondYearList").append("<li><span class ='Del'><i class='fas fa-trash'> </i></span>" + n +"<span class='code'>"+ a +"</span><span class='credits'>"+ c +"</span></li>");
		$("#secondYear input:nth-of-type(1)").val("");
		$("#secondYear input:nth-of-type(2)").val("");
		secondYearNames.push(n);
		secondYearCodes.push(a);
		secondYearCredits.push(c);
		console.log(secondYearNames);
		console.log(secondYearCodes);
	}

});

$("#thirdYear input:nth-of-type(3)").on('keypress',function(evt){
	if(evt.which === 13){
		var n = $("#thirdYear input:nth-of-type(1)").first().val();
		var a = $("#thirdYear input:nth-of-type(2)").val();
		var c = $(this).val();
		
		$(this).val("");
		$("ul#thirdYearList").append("<li><span class ='Del'><i class='fas fa-trash'> </i></span>" + n +"<span class='code'>"+ a +"</span><span class='credits'>"+ c +"</span></li>");
		$("#thirdYear input:nth-of-type(1)").val("");
		$("#thirdYear input:nth-of-type(2)").val("");
		thirdYearNames.push(n);
		thirdYearCodes.push(a);
		thirdYearCredits.push(c);
		console.log(a+" From third year");
		console.log(c+" From third year");
	}

});

$("#finalYear input:nth-of-type(3)").on('keypress',function(evt){
	if(evt.which === 13){
		var n = $("#finalYear input:nth-of-type(1)").first().val();
		var a = $("#finalYear input:nth-of-type(2)").val();
		var c = $(this).val();
		
		$(this).val("");
		$("ul#finalYearList").append("<li><span class ='Del'><i class='fas fa-trash'> </i></span>" + n +"<span class='code'>"+ a +"</span><span class='credits'>"+ c +"</span></li>");
		$("#finalYear input:nth-of-type(1)").val("");
		$("#finalYear input:nth-of-type(2)").val("");
		finalYearNames.push(n);
		finalYearCodes.push(a);
		finalYearCredits.push(c);
		console.log(a+" From final year");
		console.log(c+" From final year");
	}

});


$(".fa-plus").click(function(){
	$("input[type='text']").fadeToggle();
});
$('.singleBox').on('change', function(){
	getCheckboxes();
		if($(this).is(':checked')){
			$('div#checkboxes').show();
		}else{
			$('div#checkboxes').hide();
		}
	
});

function getCheckboxes(){
	var v = firstYearCodes.length;



var target = $('#checkboxes');
var x, y, checkbox;
for(x = 0; x < v; x++)
{
for(y = 0; y < v; y++)
{
   
	if(x == y){
	   checkbox = $('<input></input>', {
		'type': 'checkbox',
		'data-x': x,
		'data-y': y,
		'checked':true
		
	});}
	else{
	 checkbox = $('<input></input>', {
		'type': 'checkbox',
		'data-x': x,
		'data-y': y
		
		
	});
	}
	
	
	target.append(checkbox);
}
target.append($('<br>'));
}

// target.width(checkbox.outerWidth() * v + 2*v*25);

target.on('change', 'input:checkbox', function(){

var $this = $(this),
	x = $this.data('x'),
	y = $this.data('y'),
	checked = $this.prop('checked');
	
	if(x==y){
	alert('You cannot schedule same subjects at the same time');
	$this.prop('checked', true) 
	}else

alert('checkbox changed (' + x + ', ' + y + '): ' + checked);
 

});
}