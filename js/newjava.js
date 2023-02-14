// string
var str = "jshjhjhsddjsdj"
console.log(str)
d = str.replace("j", "o")
console.log(d)


// array 
var arr = ["paras", "fan",null, 52, true]

console.log(arr.length)
x  = arr.pop()
console.log(x)
s = arr[1]
console.log(s)

arr[0] = "milan"
console.log(arr)

document.getElementById("demo").innerHTML = arr +" to string:  "+ arr.toString() +" join: "+ arr.join("*")

arr.push("58")
console.log(arr)
arr[6] = "paras"
console.log(typeof arr)

l  = Array.isArray(arr)
console.log(l, arr instanceof Array)


// array methods
const fruits = ["Banana", "Orange", "Apple", "Mango"];

n = fruits.shift()
console.log(n)
console.log(fruits)
m = fruits.unshift("banana")
console.log(m)
console.log(fruits)

arr.concat(fruits)
console.log(arr)

fruits.splice(1,1 , "kiwi", "lemon")
console.log(fruits)
console.log(fruits.sort())
console.log(fruits.reverse())

const num1 = [40, 100, 1, 5, 25, 10];
console.log(num1.sort())
console.log(num1.sort(function (a,b){return a-b}))
console.log(num1.sort(function (a,b){return b-a}))


num1.forEach(function(element){
    console.log(element)
})

x = num1.map(function(element){
    return (element)*2
})
console.log(x)

k = num1.filter(function(element){
    return (element)>=25
})
console.log(k)


q = num1.some(function(element){
    return (element)>25
})
console.log(q)


w = num1.indexOf(25)
console.log(w)

e = Array.from("jkhfjkshjk")
console.log(e)


r = e.keys()
for (i of r){
    console.log(i)
}

t = e.entries()
for (i of t){
    console.log(i)
}

