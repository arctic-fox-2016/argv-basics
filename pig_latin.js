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

let kata = []
let hasil = ""

process.argv.forEach((val, index, array) => {
 // console.log(`${index}: ${val}`);

  if (index > 1) {
    kata.push(val)
  }
})

for (var i = 0; i < kata.length; i++) {
  hasil += convert(kata[i]) + " "
}

console.log("\n\n\n-----------------------")
console.log(hasil)
console.log("-----------------------\n\n\n")


// Your CLI code here
