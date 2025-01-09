const tabs = document.querySelector('.tabs')
var instance = M.Tabs.init(tabs);

document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.modal');
    var instances = M.Modal.init(elems);
    update_list()
});



const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
const form = document.querySelector('#form')
const bnt = document.querySelector('#submit')
const uncompleted = document.querySelector('#tasks > .collection')
const completed = document.querySelector('#completed > .collection')
bnt.addEventListener('click', add_task)

function add_task() {
    const task = {
        text: form.task_text.value,
        status: false
    }
    tasks.push(task)
    update_list()
    localStorage.setItem('tasks', JSON.stringify(tasks))
}

function cb_change(index) {
    tasks[index].status = !tasks[index].status    
    update_list()
    localStorage.setItem('tasks', JSON.stringify(tasks))
}

function update_list() {
    uncompleted.innerHTML = ""
    completed.innerHTML = ""
    for (let i=0; i<tasks.length; i++) {
        t = tasks[i]
        const item = document.createElement('li')
        item.className = 'collection-item'
        item.innerHTML = `<div class="row valign-wrapper">
<div class="col s1">
    <label>
    <input type="checkbox" ${t.status ? 'checked' : ''} onclick="cb_change(${i})" />
    <span></span>
    </label>
</div>
<div class="col s10">${t.text}</div>
<div class="right-align">
    <a class="btn-floating red delete-btn">
        <i class="material-icons" onclick="delete_task(${i})">delete</i>
    </a>
</div>
</div>
`
        if (t.status) {
            completed.append(item)
        } else {
            uncompleted.append(item)
        }
    }
}

function delete_task(index) {
    tasks.splice(index, 1)
    update_list()
    localStorage.setItem('tasks', JSON.stringify(tasks))
}