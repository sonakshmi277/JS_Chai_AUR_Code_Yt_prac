const h = document.querySelector('#height')
const w = document.querySelector('#weight')
const b = document.querySelector('button')
const r = document.querySelector('#results')

b.addEventListener('click', function (e) {

    e.preventDefault()

    const val1 = h.value;
    const val2 = w.value;
    const ans = val2 / ((val1 / 100) * (val1 / 100))
    if (ans < 18.6) {
        r.innerHTML = "under weight"
    }
    else if (ans >= 18.6 || ans <= 24.9) {
        r.innerHTML = "normal range"
    }
    else {
        r.innerHTML = "overweight"
    }

});