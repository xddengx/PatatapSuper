// Make Color
function makeColor(red, green, blue, alpha){
	var color='rgba('+red+','+green+','+blue+', '+alpha+')';
	return color;
}

// Create random color #1
// http://paulirish.com/2009/random-hex-color-code-snippets/
function getRandomColor(){
	var red = Math.round(Math.random()*200+55);
	var green = Math.round(Math.random()*200+55);
	var blue=Math.round(Math.random()*200+55);
	var color='rgb('+red+','+green+','+blue+')';
	// OR	if you want to change alpha
	// var color='rgba('+red+','+green+','+blue+',0.50)'; // 0.50
	return color;
}


// Create random color #2
function getRandomColorTwo(){
    var red = Math.round(Math.random() * 254 + 1);
    var green = Math.round(Math.random() * 254 + 1);
    var blue = Math.round(Math.random() * 254 + 1);
    var color = 'rgb(' + red + ',' + green + ',' + blue + ')';
    return color;
}

// Make gradient
function makeGradient(){
    let grad = textureCtx.createLinearGradient(0, 0, 690, 0);
    grad.addColorStop(0, getRandomColor());
    grad.addColorStop(1 / 6, getRandomColor());
    grad.addColorStop(2 / 6, getRandomColor());
    grad.addColorStop(3 / 6, getRandomColor())
    grad.addColorStop(4 / 6, getRandomColor());
    grad.addColorStop(5 / 6, getRandomColor());
    grad.addColorStop(6 / 6, getRandomColor());
    return grad;
}

// Fade Away
