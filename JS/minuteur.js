window.addEventListener("DOMContentLoaded", (event) => {
    
    /*Récupération des boutons */
    var start = document.querySelector('.btn-success')
    var pause = document.querySelector('.btn-danger')
    var reset = document.querySelector('.btn-warning')

    /*Récupération des inputs servant au temps du chronomètre */
    var h = document.querySelector('#heur')
    var m = document.querySelector('#min')
    var s = document.querySelector('#sec')
    /*Récupération de l'élément HTML pour l'affichage du message de fin */
    var fin = document.querySelector('.fin') 

    var debutChrono = null

    /**
     * Function minuteur() : 
     * gére les incrémentations des heures, minutes et secondes , affiche le message de fin du compte à rebours et arrête l'éxecution de setInterval
     */
    function minuteur()
    {

        if(h.value == 0 && m.value == 0 && s.value == 0){
            h.value = 0
            m.value = 0
            s.value = 0
            fin.innerHTML = "Fin du compte à rebours"
            clearInterval(debutChrono)
        } else if (s.value != 0){
            s.value--
        } else if (m.value != 0 && s.value == 0){
            s.value = 59
            m.value--
        } else if (h.value != 0 && m.value == 0){
            m.value = 60
            h.value--
        } 
        return 
    }

    /**
     * Fonction stopMinuteur()
     * clearInterval : arrête l'éxecution automatique de setInterval
     */
    function stopMinuteur()
    {
        clearInterval(debutChrono)
    }
    
    /**
     * Aprés pression sur le bouton start
     * Si les values en input ne sont pas toutes égales à 0
     * On fait disparaitre le bouton play et on affiche le pause, on supprime l'éventuel display d'erreur des input et on supprime l'eventuel 
     * message de fin de chrono puis on démarre le setInterval qui éxecutera la fonction minuteur() chaque secondes
     */
    start.addEventListener('click', function() {
        if(h.value==0 && m.value==0 && s.value==0 ){
            h.style.border = '1px solid #ff0256'
            m.style.border = '1px solid #ff0256'
            s.style.border = '1px solid #ff0256'
        } else {
            if (h.value < 100){
                if (m.value < 60){
                    if (s.value < 60){
                        start.classList.add('none')
                        pause.classList.remove('none')
                        fin.innerHTML = ""
                        h.style.border = "none"
                        m.style.border = 'none'
                        s.style.border = 'none'

                        function startInterval(){
                            debutChrono = setInterval(function() {
                                minuteur()
                            }, 1000)
                        }
                        startInterval()
                    } else {
                        s.style.border = '1px solid #ff0256'
                    }
                } else {
                    m.style.border = '1px solid #ff0256'
                }
                
            } else {
                h.style.border = '1px solid #ff0256'
            }
        }
    })

    /**
     * Aprés pression du bouton pause : 
     * clearInterval arrête l'éxecution de setInterval
     * disparition du bouton pause et apparition du bouton start
     */
    pause.addEventListener('click', function() {
        clearInterval(debutChrono)
        start.classList.remove('none')
        pause.classList.add('none')
    })

    /**
     * Reset ou remise à 0 des valeurs des varibles 'temps', suppression d'eventuel message de fin et arrêt du minuteur
     */
    reset.addEventListener('click', function() {
        h.value = 0
        m.value = 0
        s.value = 0
        fin.innerHTML = ""
        stopMinuteur()
    })
})