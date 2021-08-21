window.onload = addElement;

function addElement(){

    //create new div element and add content

    var newdiv = document.createElement("div");
    var divContent = document.createTextNode("Hello, Guvi team");

    //add text node to div

    newdiv.appendChild(divContent);

    //add new content to DOM

    var cdiv = document.getElementById("div")

    cdiv.appendChild(newdiv)


}



    

