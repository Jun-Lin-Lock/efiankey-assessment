import readline from 'readline';

const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout
});

rl.setPrompt(`Enter Price Amount: `);
rl.prompt();
rl.on('line', (amount) => {
	checkDiscount(amount);
});


function checkDiscount(amount) {
	
}