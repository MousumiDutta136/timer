let num = process.argv.slice(2);
let secondArray = [];
for(let second of num){
  secondArray.push(Number(second));  
}

for(let second of secondArray) {
  if(second === undefined || isNaN(second) || (second <= 0)) {
    return false;
  }else {
    setTimeout(() => {
    process.stdout.write('\x07');
    }, second * 1000); 
  }
}

