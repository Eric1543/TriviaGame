$(document).ready(function(){

	// Initial game state
	var theIndex=0;
	var right = 0;
	var wrong = 0;
	var total = 5;
	var play = true;
	var questions = [];
	var timeMax = 10;
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


	// To get a random question displayed
	function showQuestion(){
		$('#showAnswer').html("");
		var ranNum = Math.floor(Math.random() * questions.length);
		theIndex = ranNum;
		timeMax=10;
		$('#theTimer').html(timeMax);
		$('#theQuestion').html(questions[theIndex]['question']);
		// To display that question's answers

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

	randomAnswerPositions();
	
	function setHtmlAnswers (){
	$('#answer' + correctAnswerPosition).html(questions[theIndex]['answer']);
	$('#answer' + ans2).html(questions[theIndex]['wrongAnswer1']);
	$('#answer' + ans3).html(questions[theIndex]['wrongAnswer2']);
	$('#answer' + ans4).html(questions[theIndex]['wrongAnswer3']);
	}

	setHtmlAnswers();
console.log("corr" + correctAnswerPosition);
} // End of showQuestion();
console.log("corr" + correctAnswerPosition);
	



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
			console.log(wrong + "total" + total)
		}
		else{
			$('#theQuestion').html('Game Over Man!');
			clearInterval(countdownTime);
			$('#answer1').html('Thanks for playing!')
			$('#answer2').html('Right Answers: ' + right);
			$('#answer3').html('Wrong Answers: ' + wrong);
			$('#answer4').html('Play Again? Y or N?');
			$('theTimer').remove();
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

	// Start game and wait for user input. Update game and Win/Lose based on user's changes.
	initialGame();
	$('#answer' + correctAnswerPosition).click(function(){
		right++;
		total--;
		clearInterval(countdownTime);
		$('#theQuestion').html("Right!");
		if(total>0){
			setTimeout(initialGame, 3000);
			console.log(total);
		}
		else{
			$('#theQuestion').html('Game Over Man!');
			clearInterval(countdownTime);
			$('#answer1').html('&nbsp;')
			$('#answer2').html('Right Answers: ' + right);
			$('#answer3').html('Wrong Answers: ' + wrong);
			$('#answer4').html('&nbsp;');
		}

	});
	$('#answer' + ans2).click(function(){
		wrong++;
		total--;
		clearInterval(countdownTime);
		$('#theQuestion').html("Sorry!");
		if(total>0){
			setTimeout(initialGame, 3000);
		}
		else{
			$('#theQuestion').html('Game Over Man!');
			clearInterval(countdownTime);
			$('#answer1').html('&nbsp;')
			$('#answer2').html('Right Answers: ' + right);
			$('#answer3').html('Wrong Answers: ' + wrong);
			$('#answer4').html('&nbsp;');
		}
	});
	$('#answer' + ans3).click(function(){
		wrong++;
		total--;
		clearInterval(countdownTime);
		$('#theQuestion').html("Sorry!");
		if(total>0){
			setTimeout(initialGame, 3000);
		}
		else{
			$('#theQuestion').html('Game Over Man!');
			clearInterval(countdownTime);
			$('#answer1').html('&nbsp;')
			$('#answer2').html('Right Answers: ' + right);
			$('#answer3').html('Wrong Answers: ' + wrong);
			$('#answer4').html('&nbsp;');
		}		
	});
	$('#answer' + ans4).click(function(){
		wrong++;
		total--;
		clearInterval(countdownTime);
		$('#theQuestion').html("Sorry!");
		if(total>0){
			setTimeout(initialGame, 3000);
		}
		else{
			$('#theQuestion').html('Game Over Man!');
			clearInterval(countdownTime);
			$('#answer1').html('&nbsp;')
			$('#answer2').html('Right Answers: ' + right);
			$('#answer3').html('Wrong Answers: ' + wrong);
			$('#answer4').html('&nbsp;');
		}		
	});
});