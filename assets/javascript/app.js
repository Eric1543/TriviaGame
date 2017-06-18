$(document).ready(function(){

	// Initialized global game variables
	// Game counters
	var right = 0;
	var wrong = 0;
	var total = 5;
	// Variable to hold random number for the array
	var theIndex=0;
	var play = true;
	var questions = [];
	// Variable for the timer per question
	var timeMax = 10;
	// Variables to randomize the answers positions on the page
	var	correctAnswerPosition = 0;
	var	ans2 = 0;
	var	ans3 = 0;
	var	ans4 = 0;

	// Class constructor for questionAndAnswer object
	function qAndA(question, answer1, answer2, answer3, answer4){
		this.question=question;
		this.answer1=answer1;
		this.answer2=answer2;
		this.answer3=answer3;
		this.answer4=answer4;

		// Load questions into an array as they're created
		questions.push(this);
	}

	// Creating question objects
	q1 = new qAndA('What is a Chocobo?', 'A giant yellow horse bird', 'A dinosaur', 'A birthday cake', 'An igloo');

	q2 = new qAndA('All your base are belong to who?', 'Aliens', 'Us', 'The Illuminati', 'David Hasselhoff');

	q3 = new qAndA('The princess is in another ...?', 'Apartment', 'Dimension', 'Car', 'Castle');

	q4 = new qAndA('Up, up, down, down, left, right, left, right, B, A, ...?', 'Shift', 'Backspace', 'Start', 'NBA');

	q5 = new qAndA('Samus is?', 'An intergalactic bounty hunter', 'A planet', 'A serotonin reuptake inhibitor', 'A vegetable');

	// To get a random question displayed 
	function showQuestion(){
		$('#showAnswer').html("");
		var ranNum = Math.floor(Math.random() * questions.length);
		theIndex = ranNum;
		timeMax=10;
		$('#theTimer').html(timeMax);
		$('#theQuestion').html(questions[theIndex]['question']);
		// To display that question's answers
		for(var i = 1; i<qAndA.length; i++){
		$('#answer' + i).html(questions[theIndex]['answer' + i]);
		}
	} 

	// The countdown timer and conditions
	function countdown(){
		if(timeMax>0  && total!=0){
			timeMax--;
			$('#theTimer').html(timeMax);
		}
		else if(timeMax==0 && total!=0){
			clearInterval(countdownTime);
			$('#theQuestion').html("Time's up");
			switch(theIndex){
				case 0:
					$('#showAnswer').html("Correct answer: " + questions[theIndex]['answer1']);
					break;
				case 1:
					$('#showAnswer').html("Correct answer: " + questions[theIndex]['answer2']);
					break;
				case 2:
					$('#showAnswer').html("Correct answer: " + questions[theIndex]['answer4']);
					break;
				case 3:
					$('#showAnswer').html("Correct answer: " + questions[theIndex]['answer3']);
					break;
				case 4:
					$('#showAnswer').html("Correct answer: " + questions[theIndex]['answer1']);
					break;
			}
			wrong++;
			total--;
			setTimeout(initialGame, 3000);
		}
		else{
			$('#theQuestion').html('Game Over Man!');
			clearInterval(countdownTime);
			$('#answer1').html('Right Answers: ' + right);
			$('#answer2').html('Wrong Answers: ' + wrong);
			$('#answer3').html('&nbsp;');
			$('#answer4').html('Click here to play again!');
			$('#answer4').click(function(){
					gameReset();
				});	
		}
	}

	var countdownTime = 0;
	function startCountdown(){
		countdownTime = setInterval(countdown, 1000);
	}

	function initialGame(){
		startCountdown();
		showQuestion();
	}

	function gameReset(){
		right=0;
		wrong=0;
		total=5;
		timeMax=10;
		play=true;
		clearInterval(countdownTime);
		initialGame();
	}

	function gameOverScreen(){
		play=false;
		$('#theQuestion').html('Game Over Man!');
		clearInterval(countdownTime);
		$('#answer1').html('Right Answers: ' + right);
		$('#answer2').html('Wrong Answers: ' + wrong);
		$('#answer3').html('&nbsp;');
		$('#answer4').html('Click here to play again!');
		$('#answer4').click(function(){
			gameReset();
		});
	}

	function wrongAnswer(){
		wrong++;
		total--;
		clearInterval(countdownTime);
		$('#theQuestion').html("Sorry!");
		switch(theIndex){
				case 0:
					$('#showAnswer').html("Correct answer: " + questions[theIndex]['answer1']);
					break;
				case 1:
					$('#showAnswer').html("Correct answer: " + questions[theIndex]['answer2']);
					break;
				case 2:
					$('#showAnswer').html("Correct answer: " + questions[theIndex]['answer4']);
					break;
				case 3:
					$('#showAnswer').html("Correct answer: " + questions[theIndex]['answer3']);
					break;
				case 4:
					$('#showAnswer').html("Correct answer: " + questions[theIndex]['answer1']);
					break;
			}
	}

	function rightAnswer(){
		right++;
		total--;
		clearInterval(countdownTime);
		$('#theQuestion').html("Right!");
	}

	// Start game and wait for user input. Update game and Win/Lose based on user's changes.
	initialGame();
	$('#answer1').click(function(){
		if(play===true){
			if(theIndex==0 || theIndex==4){
				rightAnswer();
				if(total>0){
					clearInterval(countdownTime);
					setTimeout(initialGame, 3000);
				}
				else{
					gameOverScreen();
				}
			}
			else{
				wrongAnswer();
				if(total>0){
					clearInterval(countdownTime);
					setTimeout(initialGame, 3000);
				}
				else{
					gameOverScreen();
				}
			}
		}
	});
	$('#answer2').click(function(){
		if(play===true){
			if(theIndex==1){
				rightAnswer();
				if(total>0){
					clearInterval(countdownTime);
					setTimeout(initialGame, 3000);
				}
				else{
					gameOverScreen();
				}
			}
			else{
				wrongAnswer();
				if(total>0){
					clearInterval(countdownTime);
					setTimeout(initialGame, 3000);
				}
				else{
					gameOverScreen();
				}
			}
		}
	});
	$('#answer3').click(function(){
		if(play===true){
			if(theIndex==3){
				rightAnswer();
				if(total>0){
					clearInterval(countdownTime);
					setTimeout(initialGame, 3000);
				}
				else{
					gameOverScreen();
				}
			}
			else{
				wrongAnswer();
				if(total>0){
					clearInterval(countdownTime);
					setTimeout(initialGame, 3000);
				}
				else{
					gameOverScreen();
				}
			}
		}		
	});
	$('#answer4').click(function(){
		if(play===true){
			if(theIndex==2){
				rightAnswer();
				if(total>0){
					clearInterval(countdownTime);
					setTimeout(initialGame, 3000);
				}
				else{
					gameOverScreen();
				}	
			}
			else{
				wrongAnswer();
				if(total>0){
					clearInterval(countdownTime);
					setTimeout(initialGame, 3000);
				}
				else{
					gameOverScreen();
				}
			}	
		}
	});
});