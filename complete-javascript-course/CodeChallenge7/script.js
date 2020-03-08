// Code Challenge 7
// CODING CHALLENGE


/*
--- Let's build a fun quiz game in the console! ---

1. Build a function constructor called Question to describe a question. A question should include:
a) question itself
b) the answers from which the player can choose the correct one (choose an adequate data structure here, array, object, etc.)
c) correct answer (I would use a number for this)

2. Create a couple of questions using the constructor

3. Store them all inside an array

4. Select one random question and log it on the console, together with the possible answers (each question should have a number) (Hint: write a method for the Question objects for this task).

5. Use the 'prompt' function to ask the user for the correct answer. The user should input the number of the correct answer such as you displayed it on Task 4.

6. Check if the answer is correct and print to the console whether the answer is correct ot nor (Hint: write another method for this).

7. Suppose this code would be a plugin for other programmers to use in their code. So make sure that all your code is private and doesn't interfere with the other programmers code (Hint: we learned a special technique to do exactly that).
*/


// make the whole thing a IIFE to hide the details
(function() {
// this is a function constructor for Question
    var Question = function(question, answers, correct) {
    this.question = question;
    this.answers = answers;
    this.correctAns = correct;
}

Question.prototype.isCorrect = function(choice) {
    return (choice === this.correctAns)
}

Question.prototype.display = function() {
    console.log('---------------');
    console.log(this.question);
    console.log('1. ' + this.answers[0]);
    console.log('2. ' + this.answers[1]);
    console.log('3. ' + this.answers[2]);
}

var selectionQuestion = function() {
    var index = Math.floor(Math.random()*3);
    return questions[index];
}

var getUserSelection = function(question) {
    // print the question
    question.display();
    var selection = parseInt(prompt('Please select the correct answer'));
    if (selection === -1){
        return(selection);
    } else {
        return (question.isCorrect(selection))
    }
}

var questions = [];
questions[0] = new Question('What is the best desktop computer?', ['iMac', 'Dell', 'HP'], 1);
questions[1] = new Question('What is the best body-on-frame off road vehicle?', ['Blazer', 'Bronco', 'Jeep'], 2);
questions[2] = new Question('Which of the following is a good programming language', ['Goop', 'Swamp', 'Javascript'], 3);

var score = 0;
function nextQuestion() {

    var response;

    response = getUserSelection(selectionQuestion());
    if (response !== -1){
        if (response) {
            console.log('CORRECT!!!');
            score += 1;
        } 
        else {
            console.log('Sorry, that is incorrect');
        }
        console.log('Score = ' + score);
        nextQuestion();
    }
};

nextQuestion();

})();
