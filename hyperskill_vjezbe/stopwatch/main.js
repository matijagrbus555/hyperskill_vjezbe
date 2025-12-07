//stopwatch

let cs = 0
let sek = 0
let min = 0
let noviMin = 0
let noviSek = 0
let noviCs = 0

let stopped = false
let started = false

let brojStoperica = 0
let intervalIdStopwatch = 0


//functions stopwatch


function incrementAndFormatStopwatch() {
    cs += 1

    if (cs > 99) {
        sek += 1
        cs = 0

        if (sek > 59) {
            min += 1
            sek = 0

            if (min > 59) {
                min = 0
                sek = 0
                cs = 0
            }
        }
    }

    brojStoperica = `${min.toString().padStart(2, '00')}:${sek.toString().padStart(2, '00')}:${cs.toString().padStart(2, '0')}`
    document.getElementById("timer").innerHTML = brojStoperica
}


function start() {
    if (stopped) {
        min = noviMin
        sek = noviSek
        cs = noviCs
    }
    if (started) {
        return
    }
    started = true

    intervalIdStopwatch = setInterval(incrementAndFormatStopwatch, 10)
}

function stop() {
    noviMin = min
    noviCs = cs
    noviSek = sek
    clearInterval(intervalIdStopwatch)
    stopped = true
    started = false
}

function reset() {
    clearInterval(intervalIdStopwatch)
    min = 0
    sek = 0
    cs = 0
    stopped = false
    started = false
    document.getElementById("timer").innerHTML = "00:00:00"
    document.getElementById("laps").innerHTML = ''
}

function lap() {
    const krugovi = document.getElementById("laps")
    const krug = document.createElement("li")
    krugovi.appendChild(krug)
    const vrijemeKruga = document.createTextNode(brojStoperica)
    krug.appendChild(vrijemeKruga)
}





//timer



let minTimer = 0
let csTimer = 99
let sekTimer = 59
let noviCsTimer = 0
let noviSekTimer = 0
let noviMinTimer = 0

let pausedTimer = false
let startedTimer = false

let intervalIdTimer = 0

document.getElementById("unosTimer").value = 0


//functions timer

function decrementAndFormatTimer() {

    minTimer = parseInt(document.getElementById("unosTimer").value) - 1
    csTimer -= 1

    if (csTimer < 0) {
        sekTimer -= 1
        csTimer = 99


        if (sekTimer < 0) {
            krajTimera()
        }
    }


    let formatTimer = `${minTimer.toString().padStart(2, '00')}:${sekTimer.toString().padStart(2, '00')}:${csTimer.toString().padStart(2, '0')}`
    document.getElementById("prikazTimer").innerHTML = formatTimer
}


function startTimer() {
    let brojTimera = parseInt(document.getElementById("unosTimer").value)

    if (startedTimer) {
        return
    }

    if (pausedTimer) {
        csTimer = noviCsTimer
        sekTimer = noviSekTimer
        minTimer = noviMinTimer
    }

    if (brojTimera <= 0) {
        window.alert("broj timera mora biti pozitivan ili veci od nule")
        return
    }


    intervalIdTimer = setInterval(decrementAndFormatTimer, 10)
    startedTimer = true
}


function pauseTimer() {
    noviCsTimer = csTimer
    noviSekTimer = sekTimer
    noviMinTimer = minTimer
    clearInterval(intervalIdTimer)
    startedTimer = false
    pausedTimer = true
}


function resetTimer() {
    clearInterval(intervalIdTimer)
    csTimer = 99
    sekTimer = 59
    setTimeout(() => {
        document.getElementById("prikazTimer").innerHTML = ''
        document.getElementById("unosTimer").value = 0
    }, 10)
    startedTimer = false
}


function krajTimera() {
    window.alert("za pristup dodatnim funkcijama donirati na IBAN HR32847294782744")
    resetTimer()
}