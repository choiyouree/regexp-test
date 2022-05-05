const str = `ht
010-1234-5678
thesecion@gmail.com
http://www.omdapi.com/?apikey=7035c60c&s=frozen
The quick brown fox jumps over the lazy dog.
abbcccdddd
`

console.log(str.match(/(?<=\@).{1,}/g))