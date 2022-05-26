document.addEventListener('DOMContentLoaded', (event) => {

    //CREATION ET AFFICHAGE DE L'HORLOGE  ----------------------------------------

    const display = document.getElementById('clock');
    
    function updateTime(){
        let date = new Date();
        let hour = date.getHours();
        let minutes = date.getMinutes();
        let seconds = date.getSeconds();

        if (hour<10) {
            hour = '0'+hour
        }

        if (minutes<10) {
            minutes ='0'+ minutes
        }

        if (seconds<10) {
            seconds = '0'+ seconds
        }

        display.innerText=`${hour}:${minutes}:${seconds}`;

        return date;

    }

    setInterval(updateTime, 1000);

})


document.addEventListener('DOMContentLoaded', (event) => {


    //CREATION ET PARAMETRAGE DE L'ALARME  ----------------------------

    const audio = new Audio('https://assets.mixkit.co/sfx/preview/mixkit-alarm-digital-clock-beep-989.mp3');
    audio.loop = true;
    const alarmInput = document.querySelector("input[name='alarm']");
    const setAlarm = document.getElementById('set-alarm');
    const clearAlarm = document.getElementById('clear-alarm');
    const alarmList = document.getElementById('alarm-list');


    let alarmTime = null;
    let alarmTimeout = null;

    //Récupère l'heure saisie dans l'input de l'alarme
    alarmInput.addEventListener('change', (event) => {
        alarmTime = alarmInput.value ;
    })

    let hoursLeft = 0;
    let minutesLeft = 0;
    let secondsLeft = 0;

    //Permet de set l'alarm si on appuie sur le bouton
    setAlarm.addEventListener('click', (event) => {

        //Si l'input est rempli alors...
        if(alarmTime) {

            const alarmTime = alarmInput.value + ':00'
            const current = new Date();
            
            const li = document.createElement('li');
            li.setAttribute('class', 'alarm-element'); 
            let alarmText = document.getElementById('alarm-text').value.toUpperCase(); 


            let currentTime = new Date();
            let alarmDate = currentTime.toLocaleDateString('en');
            let alarmString = alarmDate + ' ' +alarmTime ;
            let alarmSetTime = new Date(alarmString);
            var stringDay = '';
            let timeToAlarm = '';

            if ( alarmText != '') {
                alarmText = alarmText + ' : '
            }

            //Si l'heure de l'larme est supérieure à l'heure actuelle on considère que l'alarme est pour le jour J
            //sinon l'alarme est pour le lendemain;
            if (currentTime < alarmSetTime) {
                timeToAlarm = new Date(alarmSetTime);
                stringDay = "aujourd'hui à ";
        
            } else { 
                alarmSetTime.setDate(alarmSetTime.getDate() + 1)
                timeToAlarm = new Date(alarmSetTime);
                stringDay = "demain à ";

            }
            
            alarmList.appendChild(li);
             
            const timeout = timeToAlarm.getTime() - currentTime.getTime();
            let hoursLeft = Math.trunc((timeout / 1000 / 60 / 60));
            let minutesLeft = Math.trunc((timeout / 1000 / 60) - (hoursLeft*60))
            let secondsLeft = Math.trunc((timeout / 1000 ) - (hoursLeft*60*60) - (minutesLeft*60))
            let frTimeToAlarm = timeToAlarm.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'});

            function alarmTimer(){

                if ( secondsLeft != 0) {
                    secondsLeft --;
        
                } else if ( minutesLeft != 0 && secondsLeft == 0) {
                    minutesLeft --;
                    secondsLeft = 59;
                    
                } else if ( hoursLeft != 0 && minutesLeft == 0 && secondsLeft == 0) {
                    hoursLeft --;
                    minutesLeft= 59;
                    secondsLeft = 59;

                }

                let stringAlarm = alarmText + stringDay + frTimeToAlarm + ' dans '+hoursLeft+ ' heures, '+minutesLeft + ' minutes, '+secondsLeft + ' secondes' ;

                if(hoursLeft == 0 && minutesLeft == 0 && secondsLeft == 0) {
                    stringAlarm = alarmText + frTimeToAlarm + ' passée ! ';
                    li.setAttribute('class', 'passed')

                }
 
                li.innerText = stringAlarm;
            
            }

            alarmTimeout = setTimeout(()=>audio.play(), timeout);
            alert(alarmText);  
        }

        setInterval(alarmTimer, 1000);
    })

  
    //Permet d'unset l'alarm si on appuie sur le bouton
    clearAlarm.addEventListener('click', (event) => {
        audio.pause();
    })
   

})