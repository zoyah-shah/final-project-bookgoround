function createCircle(){
	// creates a div
	var circle = document.createElement("div");
	// assign class to the div
	circle.classList.add("circle");
	// insert div into the document
	var container = document.getElementById("container");
	container.appendChild(circle);
}

for (var i = 0; i < 100; i++){
	createCircleElement();
}

function createCircleElement(){
	var div = document.createElement("circleElement");
	div.classList.add("circleElement");
//   random position
  div.style.left = Math.random()* 6500 + "px";
  div.style.top = Math.random()* 800 + "px";
	var container = document.getElementById('container');
	container.appendChild(div);



// !!!!!! ADD BACK WHEN I WANT THE BACKGROUND ANIMATION!!!!!!!
// 	setInterval(function() {
//      createCircleElement(); // adds more every 5sec
//   },5000);
// //
// 	if (createCircle = 5) {
// 		setTimeout(createCircle);
// 		// window.stop();
// 		// removeChild(div);
// 	}
// }
