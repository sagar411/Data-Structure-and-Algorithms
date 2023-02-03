//1.	Write a function to reverse a string.

function Reverse(data){
let a,b =" " ;
    for(let i =data.length -1; i>=0; i--){
    a =data[i];
    b = b +a;
}
return b;
}

console.log(Reverse("Love"));