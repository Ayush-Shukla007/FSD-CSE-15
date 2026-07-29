const num=[1,2,3,4,5];
const even=num.filter((i)=>(i%2==0));
console.log("nums",num);
console.log("nums",even);
const sqr=even.map((i)=>(i*i));
console.log(sqr);
const sum=square.reduce((i,s)=>(i+s));
console.log("sum",sum);