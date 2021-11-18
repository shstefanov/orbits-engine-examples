



const sum = 100000;



const years = 20;




let result = sum;


for(let i = 0; i < 20; i++){
	result += (result * 0.12);
	result -= (result * 0.04);
	console.log("year: " + (i+1), result );
}