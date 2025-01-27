function login(event) {
    event.preventDefault()
    const form = document.querySelector('#login_form')    
    const users = JSON.parse(localStorage.getItem('users')) || []
    const user = users.find((obj) => obj.login === form.login.value)
    if (user && user.password === form.password.value) {
        localStorage.setItem('user', JSON.stringify(user))
        document.location.replace('page.html')
    } else {
        modal_message('Неправильное имя пользователя или пароль')
    }
}


function register(event) {
    event.preventDefault()
    const form = document.querySelector('#register_form')
    const users = JSON.parse(localStorage.getItem('users')) || []
    const user = users.find((obj) => obj.login === form.login.value)
    if (user) {
        modal_message('Такой пользователь уже существует')
        return
    }
    if (form.psw1.value !== form.psw2.value) {
        modal_message('Пароли не совпадают')
        return
    }
    const new_user = {login: form.login.value, password: form.psw1.value}
    add_user(new_user)
    document.location.replace('login.html')
}


function add_user(user) {
    const users =  JSON.parse(localStorage.getItem('users')) || []
    users.push(user)
    localStorage.setItem('users', JSON.stringify(users))
}


function modal_message(text) {
    const modal = document.querySelector('.modal')
    const myModal = new bootstrap.Modal(modal)
    document.querySelector('.modal-body > p').innerText = text
    myModal.show()
}


function get_user() {
    const user = JSON.parse(localStorage.getItem('user'))
    return user
}

function logout() {
    localStorage.removeItem('user')
}
