const { readFileSync,  writeFileSync } = require('fs');

const first = readFileSync('./content/first.txt', 'utf-8')
console.log(first);

const second = readFileSync('./content/second.txt', 'utf-8')

console.log(second)

writeFileSync('./content/read-sync.txt', `Here is the result of ${first} and ${second}`)
writeFileSync('./content/first.txt', `Here is the result of ${first} and ${second}`, {flag: "a"})
writeFileSync('./content/second.txt', `Here is the result of ${first} and ${second}`)
