function cadastrar() {
    var Login = document.getElementById('logincad').value;
    var Senha = document.getElementById('senhacad').value;
    var listaUser = JSON.parse(localStorage.getItem('listaUser') || '[]')

    if(Login.trim()==''){
        Swal.fire(
            `Login nao pode estar vazio!`,
            '',
            'error'
          );
        return;
    }else if(Login.length <= 4){
        Swal.fire(
            `Login nao pode ter menos que 5 caracteres!`,
            '',
            'error'
          );
        return;
    }
     else if (Senha.trim() == '') {
        Swal.fire(
            `Senha nao pode estar vazia!`,
            '',
            'error'
          );
        return;
    } else if (Senha.length <= 4) {
        Swal.fire(
            `Senha nao pode ter menos que 5 caracteres!`,
            '',
            'error'
          );
        return;
        }
    

    for (let i = 0; i < listaUser.length; i++) {
        if (Login == listaUser[i].userCad) {
            Swal.fire(
                `Usuario ${Login} ja está cadastrado!`,
                '',
                'info'
              );
            return;
        }
    }

    listaUser.push(
        {
            userCad: logincad.value,
            senhaCad: senhacad.value
        }
    )
    localStorage.setItem('listaUser', JSON.stringify(listaUser))
    Swal.fire(
        'CADASTRO REALIZADO COM SUCESSO!',
        `Bem vindo: ${Login}`,
        'success'
      );
    limpar();

}

function limpar(){
    document.getElementById('logincad').value='';
    document.getElementById('senhacad').value='';
}


function logar() {
    var Login = document.getElementById('login').value;
    var Senha = document.getElementById('senha').value;

    var listaUser = JSON.parse(localStorage.getItem('listaUser')) || [];

    for (let i = 0; i < listaUser.length; i++) {
        if (Login == listaUser[i].userCad && Senha == listaUser[i].senhaCad) {
            var usuarioLogado = { login: Login };
            let token = Math.random().toString(16).substr(2);
            localStorage.setItem('token', token);
            localStorage.setItem('usuarioLogado', JSON.stringify(usuarioLogado));
            location.href = "index.html";
            return;
        }
    }
}

function sair() {
    localStorage.removeItem('token')
    window.location.href = 'login.html'
}

function redirect() {
    window.location.href = 'login.html'
}

