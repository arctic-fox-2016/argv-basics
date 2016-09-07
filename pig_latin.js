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

  return result.join("")
}

// let kata =''
// console.log(kata +=`${word}`);

//   let nama = ""
  let kata = ""
// // Your CLI code here

// process.argv.forEach((val, index, array) =>  {
//   console.log(`${index}: ${val}`);
//   if(index > 1){
//     console.log(nama += `${val}`);
//   }
// });

process.argv.forEach((val, index, array) =>  {

  if(index > 1){
  (kata += `${val}`);
  }
});
 console.log(convert(kata));
