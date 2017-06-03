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
	function qAndA(question, answer, answer2, answer3, answer4){
		this.question=question;
		this.answer=answer;
		this.wrongAnswer1=answer2;
		this.wrongAnswer2=answer3;
		this.wrongAnswer3=answer4;

		// Load questions into an array as they're created
		questions.push(this);
	}

	// Creating question objects
	q1 = new qAndA('What is a Chocobo?', 'A giant yellow horse bird', 'A dinosaur', 'A birthday cake', 'An igloo');

	q2 = new qAndA('All your base are belong to who?', 'Us', 'Aliens', 'The Illuminati', 'David Hasselhoff');

	q3 = new qAndA('The princess is in another ...?', 'Castle', 'Apartment', 'Dimension', 'Car');

	q4 = new qAndA('Up, up, down, down, left, right, left, right, B, A, ...?', 'Start', 'Shift', 'Backspace', 'NBA');

	q5 = new qAndA('Samus is?', 'A female intergalactic warrior', 'A planet', 'A serotonin reuptake inhibitor', 'A vegetable');

	//Display the answers in random positions
	function randomAnswerPositions (){
		correctAnswerPosition = 1 + Math.floor(Math.random() * 3);
		if(correctAnswerPosition === 1){
			ans2 = 2;
			ans3 = 3;
			ans4 = 4;
		}
		else if(correctAnswerPosition === 2){
			ans2 = 1;
			ans3 = 3;
			ans4 = 4;
		}
		else if(correctAnswerPosition === 3){
			ans2 = 1;
			ans3 = 2;
			ans4 = 4;
		}
		else if(correctAnswerPosition === 4){
			ans2 = 1;
			ans3 = 2;
			ans4 = 3;
		}
	} 

	// Display the random answers
	function setHtmlAnswers (){
	$('#answer' + correctAnswerPosition).html(questions[theIndex]['answer']);
	$('#answer' + ans2).html(questions[theIndex]['wrongAnswer1']);
	$('#answer' + ans3).html(questions[theIndex]['wrongAnswer2']);
	$('#answer' + ans4).html(questions[theIndex]['wrongAnswer3']);
	}

	// To get a random question displayed 
	function showQuestion(){
		$('#showAnswer').html("");
		var ranNum = Math.floor(Math.random() * questions.length);
		theIndex = ranNum;
		timeMax=10;
		$('#theTimer').html(timeMax);
		$('#theQuestion').html(questions[theIndex]['question']);
		// To display that question's answers

	// to have the same random index as the question
	randomAnswerPositions();

	setHtmlAnswers();

	} // End of showQuestion();

	function countdown(){
		if(timeMax>0  && total!=0){
			timeMax--;
			$('#theTimer').html(timeMax);
		}
		else if(timeMax==0 && total!=0){
			clearInterval(countdownTime);
			$('#theQuestion').html("Time's up");
			$('#showAnswer').html("Correct answer: " + questions[theIndex]['answer']);
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

	// Start game and wait for user input. Update game and Win/Lose based on user's changes.
	initialGame();
	$('#answer' + correctAnswerPosition).click(function(){
		if(play===true){
			right++;
			total--;
			clearInterval(countdownTime);
			$('#theQuestion').html("Right!");
			if(total>0){
				setTimeout(initialGame, 3000);
			}
			else{
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
		}
	});
	$('#answer' + ans2).click(function(){
		if(play===true){
			wrong++;
			total--;
			clearInterval(countdownTime);
			$('#theQuestion').html("Sorry!");
			$('#showAnswer').html("Correct answer: " + questions[theIndex]['answer']);
			if(total>0){
				setTimeout(initialGame, 3000);
			}
			else{
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
		}
	});
	$('#answer' + ans3).click(function(){
		if(play===true){
			wrong++;
			total--;
			clearInterval(countdownTime);
			$('#theQuestion').html("Sorry!");
			$('#showAnswer').html("Correct answer: " + questions[theIndex]['answer']);
			if(total>0){
				setTimeout(initialGame, 3000);
			}
			else{
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
		}		
	});
	$('#answer' + ans4).click(function(){
		if(play===true){
			wrong++;
			total--;
			clearInterval(countdownTime);
			$('#theQuestion').html("Sorry!");
			$('#showAnswer').html("Correct answer: " + questions[theIndex]['answer']);
			if(total>0){
				setTimeout(initialGame, 3000);
			}
			else{
				play=false
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
	});
});