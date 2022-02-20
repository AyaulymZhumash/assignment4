function printText( el ){
	let letterTimeout = 20
	let text = el.innerHTML
	let i = 1
	let print__fn = function(){
			if( i <= text.length ){
				el.innerHTML = text.substr( 0, i );
				setTimeout( arguments.callee, letterTimeout );
			}
			i++;
		}
	print__fn() // init
};
// init
let el = document.getElementById( 'my-text' )
printText( el );

var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}

function mouseDown() {
  document.getElementById("myP").style.color = "red";
}

function mouseUp() {
  document.getElementById("myP").style.color = "green";
}

$(function(){
  $('.good p').hide(2000).show(2000);
});
