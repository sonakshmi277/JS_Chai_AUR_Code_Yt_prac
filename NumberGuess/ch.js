const correct = 12
const b = document.querySelector('#subt')
b.addEventListener('click', function (e) {
    e.preventDefault()
    const ans = Number(document.querySelector('#guessField').value)
    if (document.querySelector('.lastResult').innerHTML > 0) {
        if (ans === correct) {
            const r = document.querySelector(".result")
            r.innerHTML = "YESS"
        }
        else {
            const r = document.querySelector(".result")
            r.innerHTML = "NOO"
            let guessR = document.querySelector('.lastResult').innerHTML
            guessR = guessR - 1
            document.querySelector('.lastResult').innerHTML = guessR
            const pr = document.querySelector('.guesses')
            pr.innerHTML += ans + " "

        }
    }
    else {
        console.log("STOP")
    }

});