// Don't change or delete this line! It waits until the DOM has loaded, then calls 
// the start function. More info: 
// https://developer.mozilla.org/en-US/docs/Web/Events/DOMContentLoaded
document.addEventListener('DOMContentLoaded', start)

function start () {
  // The first example is done for you. Uncomment the line below and reload the browser.
   one()
   two()
   three()
   makeVisible()
  // Your turn! Create a new function called `two`, then call it from here.
}

function one () {
  // First, we have to find the element:
  var one = document.getElementById('one')

  // Next, we apply a new CSS class to it:
  one.classList.add('blue')
}

function two () {
	document.getElementById('two').classList.add('green')
}
function three () {
	document.getElementById('three').classList.add('yellow')
}
function find(stuff) {

	var content = document.getElementsByClassName(stuff)
	//console.log("found: " + content)

	return content
}
//function makeVisible() {
// var test = document.getElementsByClassName('invisible')
//test[0].classList.add('red', 'visible')
//test[0].classList.add('visible')
//}
function makeVisible(){
find('invisible')[0].classList.add('red', 'visible')
}
// CREATE FUNCTION two HERE

// CREATE FUNCTION three HERE

// CREATE FUNCTION makeVisible HERE
