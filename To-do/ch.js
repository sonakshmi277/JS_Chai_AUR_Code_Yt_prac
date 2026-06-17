const ini = document.querySelector('#buttons')

ini.addEventListener('click', function (e) {
    console.log("button pressed")
    const d = document.createElement('div')
    const userText = prompt("Enter your task:")
    d.textContent = userText
    d.style.color = "white"
    d.style.backgroundColor = "orange"
    d.style.margin = "12px"

    parent = document.getElementById("body")
    parent.appendChild(d)
    
    
    const delBtn = document.createElement("button")
    delBtn.textContent = "-"
    delBtn.addEventListener("click", function () {
        d.remove();
    });

    d.appendChild(delBtn);

});

