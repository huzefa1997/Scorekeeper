var p1Button = document.querySelector("#p1");
var p2Button = document.querySelector("#p2");
var p1Display = document.querySelector("#p1Display");
var p2Display = document.querySelector("#p2Display");
var reset = document.querySelector("#reset");
var input = document.querySelector("input");
var playingTo = document.querySelector("#playingTo");

var p1Score = 0;
var p2Score = 0;
var gameOver = false; 
var winningScore = 5; 

p1Button.addEventListener("click", function(){
	if(!gameOver){
		p1Score++;
		if(p1Score === winningScore){
			p1Display.classList.add("winner");
			gameOver = true; 
		}
		p1Display.textContent = p1Score;
	}
});  

p2Button.addEventListener("click", function(){
	if(!gameOver){
		p2Score++;
		if(p2Score === winningScore){
			p2Display.classList.add("winner");
			gameOver = true;
		}
		p2Display.textContent = p2Score;
	}
});

reset.addEventListener("click", function(){
	resetGame();
});

function resetGame(){
	p1Score = 0;
	p2Score = 0;
	p1Display.textContent = 0;
	p2Display.textContent = 0;
	p1Display.classList.remove("winner");
	p2Display.classList.remove("winner");
	gameOver = false;
}

input.addEventListener("change", function(){
	playingTo.textContent = input.value; 
	winningScore = Number(input.value);
	resetGame();

});
