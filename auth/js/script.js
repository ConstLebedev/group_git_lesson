const users = [
    {
        login: 'user1',
        password: 'qwerty123'
    },
    {
        login: 'admin',
        password: 'one'
    }
]


function login(event) {
    event.preventDefault()
    const form = document.querySelector('#login_form')    
    const user = users.find((obj) => obj.login === form.login.value)
    if (user && user.password === form.password.value) {
<<<<<<< HEAD
        localStorage.setItem('user'JSON.stringify(user))
        const ok = document.createElement('div')
        ok.innerText = 'Вы авторизованы'
        document.body.append(ok)
=======
        localStorage.setItem('user', JSON.stringify(user))
        document.location.replace('page.html')
>>>>>>> e4cd5d8646d6936714b05bc442c48e1c10129c2b
    } else {
        const ok = document.createElement('div')
        ok.innerText = 'Неправильное имя пользователя или пароль'
        document.body.append(ok)
    }
}

function get 

function get_user() {
    const user = JSON.parse(localStorage.getItem('user'))
    return user
}

function logout() {
    localStorage.removeItem('user')
}

const login_btn = document.querySelector('#login_btn')
login_btn.addEventListener('click', login)