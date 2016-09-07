'use strict'

let pigLatin = (word) => {
  let firstLetter = word.charAt(0);
  if(isPowel(firstLetter)){
    return word
  }else{
    return `${word.substr(1)}${firstLetter}ay`;
  }
}

let isPowel = (char) => {
  return (/^[aeiou]$/i).test(char);
}

let convert = (sentence) => {
  let result = []
  let words = sentence.trim().split(/\s+/g)
  for (let i=0;i<words.length;i++) {
    result[i] = pigLatin(words[i])
  }

  return result.join(" ")
}

// Your CLI code here
// process.argv.forEach((val, index, array) => {
//     console.log(`${index}: ${val}`);
// });

let slice_1_2 = process.argv.slice(2,4)
let result = slice_1_2.toString().replace(',',' ')
console.log(result)
console.log(convert(result))

//console.log(pigLatin(process.argv[0,3]))
//let shift2 = shift1.shift()
//console.log(shift2)
//console.log(pigLatin(process.argv[3]))
