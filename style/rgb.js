var numColors = 6;
var colorSquare = document.querySelectorAll(".square");
var rgbColor = generateRandomColors(numColors);
var pickedColor = random();
var colorDisplay = document.querySelector("#colorDisplay");
	colorDisplay.textContent = pickedColor;
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var easyButton = document.querySelector("#easy");
var hardButton = document.querySelector("#hard");



// Difficulty leve easy
easyButton.addEventListener("click",function(){
	easyButton.classList.add("selected");
	hardButton.classList.remove("selected");
	numColors = 3;
	rgbColor = generateRandomColors(numColors);
	pickedColor = random();
	colorDisplay.textContent = pickedColor ;
	for(var i=0;i<colorSquare.length;i++){
		if(rgbColor[i]){
			colorSquare[i].style.backgroundColor = rgbColor[i];
		}else{
			colorSquare[i].style.display = "none";
		}
	}
});


// Difficulty level hard
hardButton.addEventListener("click",function(){
	easyButton.classList.remove("selected");
	hardButton.classList.add("selected");
	numColors = 6;
	rgbColor = generateRandomColors(numColors);
	pickedColor = random();
	colorDisplay.textContent = pickedColor ;
	for(var i=0;i<colorSquare.length;i++){
		if(rgbColor[i]){
			colorSquare[i].style.backgroundColor = rgbColor[i];
		
			colorSquare[i].style.display = "block";
		}
	}
});



// Reset button to provide new colors
resetButton.addEventListener("click",function(){

	// change colors of squares
	rgbColor = generateRandomColors(numColors);
	// change picked color
	pickedColor = random();
	// change display color
	colorDisplay.textContent = pickedColor;
	// Display message changes
	messageDisplay.textContent = "";
	// diplay changed colors
	for(var i=0;i<colorSquare.length;i++){
		colorSquare[i].style.backgroundColor = rgbColor[i];
	}
	// change background after winning
	h1.style.backgroundColor = "rgb(5,77,99)";
	// again change button name
	resetButton.textContent = "New Colors";
});


// Loop for checking the clicked answer and provicing colors to other blocks
for(var i=0;i<colorSquare.length;i++){
	
		colorSquare[i].style.backgroundColor = rgbColor[i];

		colorSquare[i].addEventListener("click",function(){
			// Grab clicked color
			var clickedColor = this.style.backgroundColor ;
			// compare the color
			if(clickedColor === pickedColor){
				h1.style.backgroundColor = pickedColor;
				resetButton.textContent = "TryAgain?";
				for(var i=0;i<colorSquare.length;i++){
				colorSquare[i].style.backgroundColor = pickedColor;
				}
				messageDisplay.textContent = "Correct!";
			}
			else{
				this.style.backgroundColor = "rgb(15, 13, 33)";
				messageDisplay.textContent = "TryAgain";
			}
		});
		
}


// Function for generating array of random colors
function generateRandomColors(num){
	//create an array
	var arr= []
	// pick Randomm Colors
	for(var i=0;i<num;i++){
		arr.push(randomColors());
	}
	// Return an array
	return arr;
}


// Function for generating random colors
function randomColors(){
	// r color
	var r = Math.floor(Math.random()*256);
	// g color
	var g = Math.floor(Math.random()*256);
	// b color
	var b = Math.floor(Math.random()*256);
	return "rgb(" + r + ", " + g + ", " + b + ")";
}


// Function for selecting any random correct color
function random(){
var random =	Math.floor(Math.random()* rgbColor.length);
return rgbColor[random];
}

