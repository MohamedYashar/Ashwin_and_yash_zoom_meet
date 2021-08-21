// //create Element

// var para = document.createElement("p");

// // take a newtext

// var nw = document.createTextNode(" this is my new para");

// para.appendChild(nw);


// var parent = document.getElementById("div1");
// var child = document.getElementById("p1");

// // replacing para with child

// parent.replaceChild(para,child);




var para = document.createElement("p");
var content = document.createTextNode("I am Ashwin ");
para.appendChild(content);


var parent = document.getElementById("div1");
var child = document.getElementById("p1");


// TO ADD NEW PARA AND ELEMENT
parent.appendChild(para);


// TO REPLACE PARA WITH NEW ELEMENT
parent.replaceChild(para, child)



// 1.HOW TO CREATE ELEMENT IN DOM
// 2.CHANGING STYLES USING JS DOM
// 3. REPLACING METHOD TO CHANGE ELEMENT CONTENT
// 4. ADDING LIST OF EMEMENTS IN ADROP DOWN