var main = document.querySelector(".main");
var open = document.querySelector(".open");
var openNew = document.querySelector(".openNew");
var inp = document.querySelector("#inp");
var btn = document.querySelector("#btn");
var password = 12345;
var add = document.querySelector("#btna");

document.addEventListener("keydown", function (e) {

    if (e.which == 77 && event.ctrlKey) {
        open.style.display = "block";
    }
});

open.addEventListener("click", function () {
    openNew.style.display = "block";
});

open.addEventListener("keyup", function (e) {
    if (e.which == 13) {
        openNew.style.display = "block";
    }

    
});


btn.onclick = function () {
    inpu = inp.value;
    inpu = Number(inpu);
    console.log(password);
    console.log(inpu);

    if (inpu == password) {
        open.style.display = "none";
        openNew.style.display = "none";
    }
    else {
        var fal = document.getElementById("fal");
        var save = document.createTextNode("This Passwod Is Incorrect. Try Again");
        fal.appendChild(save);

        btn.style.display = "none";
        inp.style.display = "none";
        add.style.display = "block";
    }
}

add.addEventListener("click", function () {

    fal.style.display = "none";
    btn.style.display = "block";
    inp.style.display = "block";
    add.style.display = "none";
});