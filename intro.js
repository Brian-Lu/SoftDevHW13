var recent = 0;
var previous = 1;

/* Javascript Function and Variable Syntax from Mr. Brown
//send diagnostic output to console
//(Ctrl-Shift-J in Chromium & Firefox to reveal console)
console.log("AYO");

var i = "hello";
var j = 20;


//assign an anonymous fxn to a var
var f = function(x) {
    var j=30;
    return j+x;
};


//(define fact (lambda (n) ...)
var fact = function(n) {
    var prod=1;
    for ( ; n > 1 ; n--){
	prod = prod * n;
    }
    return prod;
};


//(define fact (lambda (n) ...)
var factR = function(n) {
    if ( n<=1 ) {
	return 1;
    }
    else {
	return n * factR(n-1);
    }
};


//add list item
var addItem = function(text) {
    var list = document.getElementById("thelist");
    var newitem = document.createElement("li");
    newitem.innerHTML = text;
    list.appendChild(newitem);
};


//remove specified item from list
var removeItem = function(n) {
    var listitems = document.getElementsByTagName('li');
    listitems[n].remove();
};


var red = function() {
    var items = document.getElementsByTagName("li");
    for(var i = 0; i < items.length; i++) {
	items[i].classList.add('red');
    }
};


//instantiate an object
var o = { 'name' : 'Thluffy',
	  age : 15,
	  items : [10, 20, 30, 40],
	  morestuff : {a : 1, b : 'ayo'},
	  func : function(x) {
	      return x+30;
	  }
	};
*/

function reset(turner) {
    document.getElementById("h").innerHTML = "Hello World!";
}

function remove(turner) {
    this.remove();
}

function setTo(e) {
    document.getElementById("h").innerHTML = this.innerHTML;
}

var list = document.getElementsByTagName("li");
// console.log(list)
for (var i = 0; i < list.length; i++) {
    list[i].addEventListener("click", remove);
    list[i].addEventListener("mouseover", setTo);
    list[i].addEventListener("mouseout", reset);
}

function add(turner) {
    var list = document.getElementById("thelist");
    newChild = document.createElement("li");
    newChild.innerHTML = "New Thing!";
    newChild.addEventListener("click", remove);
    newChild.addEventListener("mouseout", reset);
    newChild.addEventListener("mouseover", setTo);
    list.appendChild(newChild);
}

document.getElementById("b").addEventListener("click", add);

