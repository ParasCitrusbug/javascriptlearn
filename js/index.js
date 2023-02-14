
//function to event

function hello(){
    alert("mouse click")
}


function dbclick(){
    alert("mouse double click click")
}


function contextmenu(){
    document.body.style.backgroundColor = "blue"
}


function mousedown(){
    document.body.style.backgroundColor = "gray"
}


function mouseout(){
    document.body.style.backgroundColor = "red"
}


function mouseup(){
    document.body.style.backgroundColor = "white"
}


function resize(){
    console.log("resize body")
}


function keypress(){
    alert("key press it")
}


function load(){
    alert("load succesfull")
}




// let pre = document.querySelectorAll(".container")[1].innerHTML
// firstContainer.addEventListener("mousedown",function(){
//     document.querySelectorAll('.container')[1].innerHTML = "<b> We have clicked</b>"
//     console.log("Clicked on Container")

// })

// firstContainer.addEventListener("mouseup",function(){
//     document.querySelectorAll('.container')[1].innerHTML = pre
    

// })

log = ()=>{
    console.log("log in create")
}
setTimeout(log, 2000);