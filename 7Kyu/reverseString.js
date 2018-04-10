function reverse (str) {
var newStr = ''
for(var i = 0; i <str.length; i++){
newStr += str[str.length-1 - i]
}
return newStr

}
reverse('hello')
