let r = "programming"
let vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U']

const countVowel = r.split('').filter(f=> vowels.includes(f)).length
console.log(countVowel)


