/*
Synchronous code
Synchronous code is executed line by line, in the order it's written. Each operation waits for the previous one to complete before moving on to the next one.



*/
function sum(n) {
	let ans = 0;
	for (let i = 1; i <= n; i++) {
		ans = ans + i
	}
	return ans;
}

const ans1 = sum(100);
console.log(ans1);
const ans2 = sum(1000);
console.log(ans2);
const ans3 = sum(10000);
console.log(ans3);





const fs = require("fs");

const contents = fs.readFileSync("a.txt", "utf-8");
console.log(contents);

const contents2 = fs.readFileSync("b.txt", "utf-8");
console.log(contents2);





//readFileSync is synchoronous while the , redFile is asynchoronous 

function print(err, data){
    console.log(data);
}
// Here the print function is not called , its a callback 
   // a.txt --> hello 
fs.readFile("b.txt","utf-8",print);   // b.txt --> How are you ?

console.log("Done!");

/*OUTPUT:- 
Done!
hello
How are you ?*/

function printFile(err,data){
    if(err){
        console.log("File not Found");
    }else{
        console.log(data);
    }
}

fs.readFile("aas.txt","utf-8",printFile); //Here since the 

console.log("Done");