let xhr = new XMLHttpRequest()

let cpf = window.document.getElementById('cpf')
let email = window.document.getElementById('email-confirmado')
let senha = window.document.getElementById('senha-confirmada')
let nome = window.document.getElementById('nome')
let sobrenome = window.document.getElementById('Sobrenome')
let nascimento = window.document.getElementById('nascimento')
let rg = window.document.getElementById('rg')
let sexo = window.document.getElementById('sexo')
let cep = window.document.getElementById('cep')
let endereco = window.document.getElementById('endereco')
let num_endereco = window.document.getElementById('num-endereco')
let bairro = window.document.getElementById('bairro')
let complemento = window.document.getElementById('complemento')
let cidade = window.document.getElementById('cidade')
let estado = window.document.getElementById('estado')
let telefone = window.document.getElementById('telefone')
let celular = window.document.getElementById('celular')
let form = window.document.getElementById('form')
let documento;

xhr.responseType = "json"

form.addEventListener('submit', function (event) {
    event.preventDefault();



    let dados = {
       cpf: cpf.value,
       email: email.value,
       senha: senha.value,
       nome: nome.value,
       sobrenome: sobrenome.value,
       nascimento: nascimento.value,
       rg: rg.value,
       sexo: sexo.value,
       cep: cep.value,
       endereco: endereco.value,
       num_endereco: num_endereco.value,
       bairro: bairro.value,
       complemento: complemento.value,
       cidade: cidade.value,
       estado: estado.value,
       telefone: telefone.value,
       celular: celular.value,
    }

    xhr.onreadystatechange = function(){
        if(xhr.readyState == 4 && xhr.status == 201){
            window.alert('Cadastro feito com sucesso!')
            documento = xhr.response
            console.log(documento)
        }
    }


    xhr.open("POST","https://reqres.in/api/users?page=2",true)
    xhr.send(dados)

    
})




