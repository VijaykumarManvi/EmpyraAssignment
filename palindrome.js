function palindrome(word) {
return (word === word.split('').reverse().join(''))
}
console.log(palindrome('madam'))
console.log(palindrome('vijay'))