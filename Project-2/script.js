const startButton = document.getElementById('startButton');

startButton.addEventListener('click', function() {
    startButton.remove();
    const resetButton = document.createElement('button');
    resetButton.classList.add('center-button');
    resetButton.innerText = 'Reset';
    resetButton.addEventListener('click', function() {
        location.reload();
    });
    document.body.appendChild(resetButton);
    const img = document.createElement('img');
    img.style.width = "250px";
    img.style.height = "250px";
    img.style.display = "block";
    img.style.margin = "20px auto";
    document.body.appendChild(img);
    const countdown = document.createElement('div');
    countdown.classList.add('countdown');
    document.body.appendChild(countdown);
    const inhaleAudio = new Audio('./img and sounds/breath-in.mp3');
    const exhaleAudio = new Audio('./img and sounds/breath-out.mp3');
    let time = 4;
    let timer, holdTimer, releaseTimer;
    function startCycle() {
        time = 4;
        inhaleAudio.play();
        img.src = './img and sounds/Inhale.png';
        countdown.innerText = "Inhale - "+time+"s";
        timer = setInterval(function() {
            countdown.innerText = "Inhale - "+time+"s";
            time--;
            if (time < 0) {
                clearInterval(timer);
                time = 4;
                img.src = './img and sounds/Hold.png';
                countdown.innerText = "Hold - "+time+"s";
                holdTimer = setInterval(function() {
                    countdown.innerText = "Hold - "+time+"s";
                    time--;
                    if (time < 0) {
                        clearInterval(holdTimer);
                        time = 4;
                        img.src = './img and sounds/Exhale.png';
                        countdown.innerText = "Exhale - "+time+"s";
                        exhaleAudio.play();
                        releaseTimer = setInterval(function() {
                            countdown.innerText = "Exhale - "+time+"s";
                            time--;
                            if (time < 0) {
                                clearInterval(releaseTimer);
                                startCycle();
                            }
                        }, 1000);
                    }
                }, 1000);
            }
        }, 1000);
    }
    startCycle();
});