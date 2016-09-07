'use strict'

let pigLatin = (word) => {
  let firstLetter = word.charAt(0);
  if(isPowel(firstLetter)){
    return word+"ay"
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
let argc = process.argv.length
if(argc< 3){
  console.log("Silahkan tambahkan argumen")
    console.log("contoh : node pig_latin.js sahbana dan kun")
} else{
let wordy =""
process.argv.forEach((val, index, array) => {

   if(index > 1) wordy += pigLatin(val) + " "
  })
console.log(`${wordy}`)
}
