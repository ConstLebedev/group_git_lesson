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
        localStorage.setItem('user', JSON.stringify(user))
        document.location.replace('page.html')
    } else {
        const ok = document.createElement('div')
        ok.innerText = 'Неправильное имя пользователя или пароль'
        document.body.append(ok)
    }
}


function get_user() {
    const user = JSON.parse(localStorage.getItem('user'))
    return user
}

function logout() {
    localStorage.removeItem('user')
}

const login_btn = document.querySelector('#login_btn')
login_btn.addEventListener('click', login)