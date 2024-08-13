const add = document.getElementById('add');
const sub = document.getElementById('subtract');
const reset = document.querySelector('.reset')
const heading = document.querySelector('#heading')
const changeBy = document.querySelector('#changeBy')

add.addEventListener('click',function(){
    const countValue = parseInt(heading.innerText); 
    const changeValue = parseInt(changeBy.value)
    heading.innerText = countValue+changeValue;
})


sub.addEventListener('click',function(){
    const countValue = parseInt(heading.innerText);
    const changeValue = parseInt(changeBy.value)
    heading.innerText = countValue-changeValue
})

reset.addEventListener('click',function(){
    heading.innerText = 0
})


