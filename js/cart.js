let myCart;

var load = function(){
  myCart = JSON.parse(localStorage.getItem('myCart'));
	debugger;
  var object = getProductFromList(myCart.myId);
	document.getElementById('myImage').src=object.myimg;
	document.getElementById('mySize').innerHTML = myCart.mysize;
	document.getElementById('myPrice').innerHTML = object.myprice;
	calculateTotal();
}

function calculateTotal(){
	var object = getProductFromList(myCart.myId);
	let price = object.myprice;
	let quantity = document.getElementById('myQuantity').value;
	document.getElementById('mySubtotal').innerHTML = price * quantity;
}
