var draggables = document.querySelectorAll(".get");
var drops = document.querySelectorAll(".RightChild");

var send;

for (var draggable of draggables) {
    draggable.addEventListener("dragstart", function (e) {
        send = e.target.getAttribute("data-left");
    });
}
for (var draggable of draggables) {
    draggable.addEventListener("dragend", function (e) {
        e.target.remove();
    });
}

for (var drop of drops) {
    drop.addEventListener("dragover", function (e) {
        e.preventDefault();

    });
}

var temp = true;

for (var drop of drops) {
    drop.addEventListener("drop", function (e) {

        var newDiv = document.createElement("div");
        newDiv.className = "getNew";
        var text = document.createTextNode(send);
        newDiv.appendChild(text);
        newDiv.className = "getNew";
        var Save = e.target;
        var Common = Save.appendChild(newDiv);
        temp = e.target.children[0].classList.contains("getNew");

        

        // if(temp!=e.target.children[0].classList.contains("getNew")){
        //     var newDiv = document.createElement("div");
        //     newDiv.className = "getNew";
        //     var text = document.createTextNode(send);
        //     newDiv.appendChild(text);
        //     newDiv.className = "getNew";
        //     var Save = e.target;
        //     var Common = Save.appendChild(newDiv);
        //     temp=e.target.children[0].classList.contains("getNew");
        //     console.log(temp);
        // }
        // else{
        //     temp=e.target.children[0].classList.contains("getNew");
        // }


    });
}