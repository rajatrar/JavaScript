
let number = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = localStorage.getItem('highscore') ? Number(localStorage.getItem('highscore')) : 0;
document.querySelector('.highscore').textContent = highscore;

document.querySelector('.check').addEventListener('click',function() {
    const guess = Number(document.querySelector('.guess').value)
    if(!guess){
        document.querySelector('.message').textContent = "No Number";
    }
    else if(guess === number){
        document.querySelector('.message').textContent = "Correct Number!";
        document.querySelector('body').style.backgroundColor = '#60b347';
        document.querySelector('.number').textContent = number;
        if (score > highscore) {
            highscore = score;
            localStorage.setItem('highscore', highscore);
            document.querySelector('.highscore').textContent = highscore;
        }
    }
    else if(guess > number){
        document.querySelector('.message').textContent = "Too High!";
        score--;
        document.querySelector('.score').textContent = score;

    }
    else if(guess < number){
        document.querySelector('.message').textContent = "Too Low!";
        score--;
        document.querySelector('.score').textContent = score;
    }
})

document.querySelector('.again').addEventListener('click',function() {
    score = 20;
    number = Math.trunc(Math.random() * 20) + 1;
    document.querySelector('.message').textContent = "Start guessing...";
    document.querySelector('.score').textContent = score;
    document.querySelector('.number').textContent = '?';
    document.querySelector('.guess').value = '';
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.highscore').textContent = highscore;
});

// Add keypress event for Enter key to trigger check
addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        document.querySelector('.check').click();
    }
    if (event.key === 'Escape') {
        document.querySelector('.again').click();
    }
});

