// 3.	Write a function to find the factorial of a number.

const factorial = (data)=>{
    let after_factor =1;
    for(let i = 1; i <=data;i++ ){
        after_factor =  after_factor* i;
    }
    return after_factor;
}

let fac=factorial(10);
console.log(fac);