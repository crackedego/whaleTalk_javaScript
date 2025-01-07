let input = 'turpentine and turtles';
const vowels = ['a', 'e', 'i', 'o', 'u'];
const resultArray = [];

for (let i = 0; i < input.length; i++){
  if (input[i] === 'e' || input[i] === 'u'){
    resultArray.push(input[i]); 
  }
  for (let v = 0; v < vowels.length; v++){
    if (input[i] === vowels[v]){
      resultArray.push(vowels[v]);
    }
  }
}

let resultString = resultArray.join('');

console.log(resultString.toUpperCase());
