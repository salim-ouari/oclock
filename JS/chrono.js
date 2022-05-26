var setInitialValues = function () {
    laps = 0, millis = 0, secs = 0, mins = 0, hr = 0;
}

var setText = function (fieldID, text) {
    document.getElementById(fieldID).innerText = text;
}

var date,
    hrs,
    mins,
    secs,
    millis,
    laps,
    day,
    dayOfMonth,
    mon,
    yr,
    clockFunction,
    antemeridiem = '',
    days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

    function getTwoDigitResult(num) {
        return num < 10 ? '0' + num : num;
    }

    var toggleButtonText = function (buttonID) {
        var toggleButton = document.getElementById(buttonID);
        if (toggleButton.innerText == 'Start')
            toggleButton.innerText = 'Pause';
        else
            toggleButton.innerText = 'Start';
    }


// Fonction pour configurer l'écran initial avec tous les zéros
var setInitialScreen = function () {
    setText('stopwatch-milli', getTwoDigitResult(0));
    setText('stopwatch-sec', getTwoDigitResult(0));
    setText('stopwatch-min', getTwoDigitResult(0));
    setText('stopwatch-hr', getTwoDigitResult(0));
}

var showLapContainer = function () {
    var lapContainer = document.getElementById('laps-list');
    if (lapContainer.classList.contains('hidden'))
        lapContainer.classList.remove('hidden');
}

var hideLapContainer = function () {
    var lapContainer = document.getElementById('laps-list');
    if (!lapContainer.classList.contains('hidden'))
        lapContainer.classList.add('hidden');

    lapContainer.innerHTML = '';
}

var stopWatchFucntion;
var initStopWatch = function () {

    if (millis < 10) {
        setText('stopwatch-milli', getTwoDigitResult((++millis)));
    } else {
        if (secs < 60) {
            millis = 0;
            setText('stopwatch-milli', getTwoDigitResult(++millis));
            setText('stopwatch-sec', getTwoDigitResult(++secs));
        } else {
            if (mins < 59) {
                millis = 0;
                setText('stopwatch-milli', getTwoDigitResult(++millis));
                secs = 0;
                setText('stopwatch-sec', getTwoDigitResult(++secs));
                setText('stopwatch-min', getTwoDigitResult(++mins));
            } else {
                millis = 0;
                setText('stopwatch-milli', getTwoDigitResult(++millis));
                secs = 0;
                setText('stopwatch-sec', getTwoDigitResult(++secs));
                mins = 0;
                setText('stopwatch-min', getTwoDigitResult(++mins));
                hr = 0;
                setText('stopwatch-hr', getTwoDigitResult(hr));
                
            }
        }
    }
}


// Function pour débuter le chronomètre (start)
var startStopWatch = function () {
    stopWatchFucntion = setInterval(initStopWatch, 100);


}

// Function pour arrêter le chronomètre (pause)
var pauseStopWatch = function () {
    clearInterval(stopWatchFucntion);

}

var resetStopwatch = function () {
    pauseStopWatch();
    if (document.getElementById('toggleStopWatch').innerText == 'Pause')
        toggleButtonText('toggleStopWatch');
    hideLapContainer();
    setInitialScreen();
    setInitialValues();
}


// Fonction pour décider de démarrer ou d'arrêter le chronomètre
var toggleStopWatch = function () {
    if (this.innerText == 'Start') {
        startStopWatch();
        toggleButtonText('toggleStopWatch');
    } else {
        pauseStopWatch();
        toggleButtonText('toggleStopWatch');
    }
}

// Fonction pour stocker les tours du chronomètre
var captureLap = function () {
    return {
        milliseconds: millis,
        minutes: mins,
        seconds: secs,
        hours: hr
    }
}

// Fonction pour afficher les tours du chronomètre
var showLap = function () {
    var lap = captureLap();
    showLapContainer();
    var title = document.createElement('h4');
    title.innerText = `Tour ${++laps}`;
    var text = document.createElement('p');
    text.innerText = `Tour ${getTwoDigitResult(lap.hours)}:${getTwoDigitResult(lap.minutes)}:${getTwoDigitResult(lap.seconds)}:${getTwoDigitResult(lap.milliseconds)}`;
    var container = document.createElement('div');
    container.classList.add('lap-list-item');
    container.appendChild(title);
    container.appendChild(text);
    var parent = document.getElementById('laps-list');
    parent.prepend(container);

}

// Event listners registeration
var btnStopWatchToggler = document.getElementById('toggleStopWatch');
btnStopWatchToggler.addEventListener('click', toggleStopWatch);

var btnStopWatchResetter = document.getElementById('resetStopWatch');
btnStopWatchResetter.addEventListener('click', resetStopwatch);

var btnStopWatchCaptureLap = document.getElementById('lapStopWatch');
btnStopWatchCaptureLap.addEventListener('click', showLap);
