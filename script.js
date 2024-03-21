document.addEventListener('DOMContentLoaded', function() {
    const startButton = document.getElementById('startButton');
    const restartButton = document.getElementById('restartButton');
    const numberDisplay = document.getElementById('numberDisplay');
    const counterDisplay = document.getElementById('counter');
    const gameOverPopup = document.getElementById('gameOverPopup');

    let counter = 0;
    let gameOver = false;

    startButton.addEventListener('click', startGame);
    restartButton.addEventListener('click', restartGame);

    function startGame() {
        gameOver = false;
        counter = 0;
        counterDisplay.textContent = counter;
        gameOverPopup.style.display = 'none';
        generateRandomNumber();
    }

    function restartGame() {
        startGame();
    }
    function generateRandomNumber() {
        if (!gameOver) {
            const randomNumber = Math.floor(Math.random() * 10);
            const randomPositionX = Math.random() * (window.innerWidth - 200); // Adjust 200 as needed
            const randomPositionY = Math.random() * (window.innerHeight - 200); // Adjust 200 as needed
            numberDisplay.textContent = randomNumber;
            numberDisplay.style.left = randomPositionX + 'px';
            numberDisplay.style.top = randomPositionY + 'px';
            const keydownHandler = function(event) {
                if (event.key === randomNumber.toString()) {
                    counter++;
                    counterDisplay.textContent = counter;
                    generateRandomNumber();
                } else {
                    counter = 0;
                    endGame();
                }
                document.removeEventListener('keydown', keydownHandler);
            };
            document.addEventListener('keydown', keydownHandler);
        }
    }
    
    

    function endGame() {
        gameOver = true;
        numberDisplay.textContent = '';
        gameOverPopup.style.display = 'block';
        document.body.classList.add('shake');
        setTimeout(() => {
            document.body.classList.remove('shake');
        }, 500); // Adjust the time as needed
    }
    
});
