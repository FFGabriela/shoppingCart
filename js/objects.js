var load = function(){
	var params = new URLSearchParams(window.location.search);
	var id = params.get('id');
	var object = getProductFromList(id);

	document.getElementById('myimage').src=object.myimg;
	document.getElementById('myprice').innerHTML = object.myprice;
	document.getElementById('mydetails').innerHTML = object.mydetails.join("<br/>");
};

function addCart(){
	var params = new URLSearchParams(window.location.search);
	var id = params.get('id');
	var object = getProductFromList(id);

	var selectedOption = document.getElementById('mysize');
	//debugger;
	var size = selectedOption.options[selectedOption.selectedIndex].innerHTML;

	var myObject = {
		myId: id,
		mysize: size
	};

	localStorage.setItem('myCart', JSON.stringify(myObject));
	//debugger;
	location.href='cartTest.html'
}





				//$('#myDetails').html(object.description);
