    const button = document.querySelector(".button");

    button.addEventListener("click",()=>{
    
    const text = document.querySelector(".text");

    let newLi = document.createElement("li");
    newLi.innerHTML=text.value;

    document.querySelector(".list").prepend(newLi)
    

});