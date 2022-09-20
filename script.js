function Entrou(){
    let a = document.getElementById("Resultado")
    let esp = document.getElementById("id3")
    a.style.textAlign = 'center'
    a.style.borderRadius = '5px, 5px, 5px'
    a.innerHTML = '<strong>DIGITE O NUMERO!</strong>'
    esp.innerHTML = "<P>PREPARANDO CONTA...</P>"

}
function Sair(){
    let a = document.getElementById("Resultado")
    a.innerText = 'Perencha os campos acima para apresentar o resultado'
    a.style.background = ''
    a.style.textAlign = 'center'
    a.style.borderRadius = '5px, 5px, 5px'
    let esp = document.getElementById("id3")
    esp.innerHTML = "..."
}

function Somar(){
    var qsomar = window.document.getElementById("operação")
    qsomar.innerHTML = "+"
}
function Subtrair(){
    var qsomar = window.document.getElementById("operação")
    qsomar.innerHTML = "-"
}
function Verificar(){
    var opcao = document.getElementsByName("opera")
    var valor1 = window.document.getElementById("valor")
    var valor2 = window.document.getElementById("valor2")
let a = document.getElementById("Resultado")
    if (opcao[0].checked){
        var resultado = Number(valor1.value) + Number(valor2.value)
        var results = window.document.getElementById("id3")
        results.style.background = "white"
        results.innerHTML = "O valor é: " + resultado
        a.innerHTML = "Pressione o botão para realizar a subtração!"
    }
    else if (opcao[1].checked){
        var resultado = Number(valor1.value) - Number(valor2.value)
        var results = window.document.getElementById("id3")
        results.style.background = "white"
        results.innerHTML = "O valor é: " + resultado
        a.innerText = "Pressione o botão para realizar a soma!"
    }
    
}
document.addEventListener("keypress", function(e){

    if (e.key === "Enter") {
        const btn = document.querySelector("#ver");
        btn.click();
    }
});

