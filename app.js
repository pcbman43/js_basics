let val;

val = document.getElementById('task-form')
val = document.getElementById('task-form').id
val = document.getElementById('task-form').className

const taskTitle = document.getElementById('task-title')

// style
taskTitle.style.background = '#333'
taskTitle.style.color = '#fff'
taskTitle.style.padding = '15px'
// taskTitle.style.display = 'none'

// content
taskTitle.textContent = 'Defined Tasks'
taskTitle.innerText = 'My Favorite Tasks'
taskTitle.innerHTML = '<b style="color: red">My Tasks</b>'


val = document.querySelector('#task-title')
val = document.querySelector('.card-title')
val = document.querySelector('ul')

// const task = document.querySelector('li')
// task.style.color = 'green'

val = document.querySelector('li:last-child')
// document.querySelector('li:nth-child(odd)').style.background = '#ccc'
// document.querySelector('li:nth-child(even)').style.background = '#f4f4f4'

// multiply elements

val = document.querySelectorAll('li')
oddLi = document.querySelectorAll('li:nth-child(odd)')

oddLi.forEach((li) => {
    li.style.background = '#ddd'
})

console.log(val)