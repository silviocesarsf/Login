let email = document.querySelector('.inp__email')
let senha = document.querySelector('.inp__senha')
let box = document.querySelector('.box-login')

function validarSenha(){
    if(email.value != 'silvio14dmc@gmail.com' && senha.value != 'silviocesar'){
        box.classList.add('error-login')
    } else {
       box.classList.add('sucess-login')
    }
}

function abrirMenu() {
    let menu = document.querySelector('.menu-resp')
    if(menu.classList.contains('.open')){
        menu.classList.remove('.open')
    } else {
        menu.classList.add('.open')
    }
}

document.querySelector('.menu-hamburguer').addEventListener('click', abrirMenu)
document.querySelector('.btn__login').addEventListener('click',validarSenha)