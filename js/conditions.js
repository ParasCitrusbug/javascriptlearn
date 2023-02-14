
// conditions of javascript
var num = 25
if (num >20){
    console.warn("num is geter 20")
}


// if else condition
if (num>50){
    console.log("very high num")

}else{
    console.log("num is smaller 50")
}


// nested condition
if (num>50){
    console.log("very big num")

}else if(num>35){
    console.log("num is big")
}else if(num>=25){
    alert("num is 25")
}else{
    console.error("num not found");
}

// javascript loops

//for loop
var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9]
// for (var i = 0; i<arr.length; i++ ){
//     console.log(arr[i])
// }

arr.forEach(function(element){
    console.log(element)
})


//while loop
var j = 0
while(j <arr.length){
    console.log(arr[j]*10)
    j++
}


//do while loop
var arr1 = [1, 2]
var k =0
do{
    console.log(arr1[k]+100)
    k++
}while(k < arr1.length)
