var draggables = document.querySelectorAll(".get");
var drops = document.querySelectorAll(".RightChild");

var send;

for (var draggable of draggables) {
    draggable.addEventListener("dragstart", function (e) {
        e.dataTransfer.setData("dragID", e.target.getAttribute("data-left"));
        e.target.classList.add("dragging");
    });
}
for (var draggable of draggables) {
    draggable.addEventListener("dragend", function (e) {
        e.target.classList.remove("dragging");
    });
}

for (var drop of drops) {
    drop.addEventListener("dragover", function (e) {
        e.preventDefault();

    });
}

for (var drop of drops) {
    drop.addEventListener("drop", function (e) {

        var dragID = e.dataTransfer.getData("dragID");
        var del = document.querySelector('[data-left="' + dragID + '"]');

        if(e.target.classList.contains("get")==false){
            e.target.appendChild(del);
        }

    });
}