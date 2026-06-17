const ini = document.querySelector('#buttons')
const tog = document.querySelector("#toggle")
const parent = document.getElementById("body")
ini.addEventListener('click', function (e) {
    console.log("button pressed")
    const d = document.createElement('div')
    const userText = prompt("Enter your task:")
    d.textContent = userText
    d.style.color = "white"
    d.style.backgroundColor = "orange"
    d.style.margin = "12px"
    d.style.display = "flex"
    d.style.justifyContent = "space-between"
    d.style.alignItems = "center"
    parent.appendChild(d)

    const delBtn = document.createElement("button")
    delBtn.textContent = "-"
    delBtn.addEventListener("click", function () {
        d.remove();
    });

    d.appendChild(delBtn);

});
tog.addEventListener('click', function (e) {
    console.log("done")
    if (parent.style.backgroundColor === "white") {
        parent.style.backgroundColor = "black"
    }
    else {
        parent.style.backgroundColor = "white"
    }

})



