const nav = document.querySelector('#nav')
const cancel = document.querySelector('#cancel')
const bar = document.querySelector('#bar')
const message = document.querySelector('#message')



bar.addEventListener('click', function(){
    nav.style.display = 'block'
})


cancel.addEventListener('click', function(){
    nav.style.display = 'none'
})