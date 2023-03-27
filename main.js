const input = document.querySelector('#username')
const errorBox = document.querySelector('.error')
const btn = document.querySelector('.send-btn')
const radios = document.querySelectorAll('input[type="radio"]')
const errorEnd = document.querySelector('.error-end')
const finish = document.querySelector('.finish')


// const names = ['admin', 'qwerty']



input.addEventListener('input', () => {
    errorBox.textContent = ''
} )



btn.addEventListener('click', (e) => {

    let status = 0

    if (!(input.value.match(/[a-z0-9]/))) {
        errorBox.textContent = 'Имя должно начинатся с маленькой буквы и цифры'
    }
    else if (input.value.length < 5) {
        errorBox.textContent = 'Имя слишком короткое'
    }
    else if (input.value.indexOf(' ') !== -1) {
        errorBox.textContent = 'Имя не должно содержать пробелов'
    } else {
        errorBox.textContent = ''
        status += 1 
    }

    let selectRadio = null
    radios.forEach((radio) => {
        if (radio.checked) {
            selectRadio = radio
            status += 1
        }
        console.log( radio.checked);
        if (!selectRadio) {
        errorEnd.textContent = 'Обязательно нужно сделать выбор'
        
    }  else {
        errorEnd.textContent = ''
        input.value = ''
    }
    })

    for (i = 0; i <= status; i++) {
        if (status === 2) {
        finish.textContent = 'Авторизация успешна!'
        } else finish.textContent = ''
    }

})