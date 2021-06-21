var Bird = document.getElementById('Bird')
var Cat = document.getElementById('Cat')
var Dog = document.getElementById('Dog')
var Bark = document.getElementById('Bark')
var Meow = document.getElementById('Meow')
var Birdsong = document.getElementById('Birdsong')

Bird.addEventListener('click', function() {
    Birdsong.play()
})
Cat.addEventListener('click', function() {
    Meow.play()
})
Dog.addEventListener('click', function() {
    Bark.play()
})