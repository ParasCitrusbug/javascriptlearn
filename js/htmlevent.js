var el = document.getElementById("firstcontainer")
// console.log(el.innerHTML)
// console.log(el.innerText)
// el.style.background = "green"
var ele = document.getElementsByClassName("container")
console.log(ele)
ele[0].innerHTML = "jahjhajhajasjg"
ele[1].style.background = "red"
ele[2].style.color = "white"
ele[2].style.border = "2px solid black"
ele[0].classList.add("bg-primary")


var classele = document.querySelector(".container")
console.log(classele)


tn = document.getElementsByTagName("p")
console.log(tn)


ct = document.createElement("p")
ct.innerText = "created element"
console.log(ct)

tn[1].appendChild(ct)
ct2 = document.createElement("b")
ct2.innerHTML = "bold created element"
tn[1].replaceChild(ct2, ct)


firstcontainer2.addEventListener('mousedown', function(){
        document.querySelectorAll('.container')[1].innerHTML = "<b> We have clicked</b>"
        console.log("Mouse down when clicked on Container");
    })


firstcontainer3.addEventListener('mouseup', function(){
        document.querySelectorAll('.container')[2].innerHTML = "<b> We have clicked</b>"
        console.log("Mouse down when clicked on Container");
    })


createel = document.createElement("p")
createel.innerHTML = "this is paragraph jhgjhgjhhghgjhgjhgjgjh"
x = document.getElementsByClassName("container")[3].appendChild(createel)
console.log(x)
 




let mydate = new Date()
console.log(mydate.getDate())
console.log(mydate.getFullYear())
console.log(mydate.getDay())
console.log(mydate.getHours())
console.log(mydate.getMinutes())
console.log(mydate.getTime())