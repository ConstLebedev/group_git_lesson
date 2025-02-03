const name = prompt('')
let room = 1
// 1 -> 2, 3
// 2 -> 1, 3, 4

if (room == 1) {
    const message = name + ', Ты находишься в первой комнате. Перед тобой 2 двери. Куда пойдешь, налево или направо?'
    let answer = prompt(message)
    while (answer != 'налево' & answer != 'направо') {
        answer = prompt(message)
    }
    if (answer == 'налево') {
        room = 2
    } else {
        room = 3
    }
}
alert('Ты в комнате ' + room)