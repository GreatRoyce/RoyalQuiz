let clock = new Date();
    let hr = clock.getHours();
    let mins = clock.getMinutes();
    let realTime = `${hr}:${mins.toString().padStart(2, '0')}`;
    document.getElementById('timer').innerHTML = realTime;


//for toggle

    let openClose = document.getElementById('toggle');
    openClose.addEventListener('click', function(press){
        if(press.target.id === 'show' || press.target.closest('#show'))  return;

        const swatch = document.getElementById('show')
        swatch.style.display = swatch.style.display === 'none' ? 'block' : 'none'
        

    })


//for feedback

let feedbackButton = document.getElementById('feedback');
feedbackButton.style.padding = '6px';
feedbackButton.style.marginLeft = '76%';
feedbackButton.style.rotate = '270deg';
feedbackButton.style.marginTop = '31%';
feedbackButton.style.position = 'fixed'


    let timegreeting = `Welcome to the Royal Quiz,  The current time is:`
    let timegreet = new SpeechSynthesisUtterance(timegreeting)
    speechSynthesis.speak(timegreet)

    let timespeak = new SpeechSynthesisUtterance(realTime);
    speechSynthesis.speak(timespeak);

window.onload = timegreet;
