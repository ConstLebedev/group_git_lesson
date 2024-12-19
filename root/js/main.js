const tabs = document.querySelector('.tabs')
var instance = M.Tabs.init(tabs);
document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.modal');
    var instances = M.Modal.init(elems);
});
const tasks = [];
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
}
function cb_change(event) {
    console.log(event.target.checked )
update_list()
}
function update_list() {
    uncompleted.innerHTML = ""
    completed.innerHTML = ""
    for (t of tasks )
         {
            
                const item = document .createElement('li')
                item.className = 'collection-item'
                item.innerHTML = `<div class="row valign-wrapper">
  <div class="left-align">
    <label>
      <input type="checkbox" ${'checked' ? t.status : ''}/>
      <span></span>
    </label>
  </div>
  <div class="col">${t.text}</div>
    <div class="right-align">
    <a class="btn-floating red "><i class="material-icons">delete</i></a>
 
</div>
</div>
`
if (t.status) {
          completed.append(item)  }
          else {
            uncompleted.append(item)
          }
         }

const cbs = document.querySelectorAll('input[type="checkbox"]')
for(cb of cbs) {
    cb.addEventListener('click', cb_change)
}



}