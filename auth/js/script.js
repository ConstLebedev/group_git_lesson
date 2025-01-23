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
        localStorage.setItem('user'JSON.stringify(user))
        const ok = document.createElement('div')
        ok.innerText = 'Вы авторизованы'
        document.body.append(ok)
    } else {
        const ok = document.createElement('div')
        ok.innerText = 'Неправильное имя пользователя или пароль'
        document.body.append(ok)
    }
}

function get 

const login_btn = document.querySelector('#login_btn')
login_btn.addEventListener('click', login)