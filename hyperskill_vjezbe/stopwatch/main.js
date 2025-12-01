let ms = 0
let sek = 0
let min = 0
let stopped = false
let broj = 0
function logika() {
    ms += 1

    if (ms > 99) {
        sek += 1
        ms = 0

        if (sek > 59) {
            min += 1
            sek = 0

            if (min > 59) {
                min = 0
                sek = 0
                ms = 0
            }
        }
    }

    broj = `${min.toString().padStart(2, '00')}:${sek.toString().padStart(2, '00')}:${ms.toString().padStart(2, '00')}`
    document.getElementById("timer").innerHTML = broj

}

let intervalId = 0

function start() {
    if (stopped) {
    }
    
    intervalId = setInterval(logika, 10)
}

function stop() {
    clearInterval(intervalId)
    stopped = true
}


