//1:-

var ano = prompt ("Qual é o seu ano de nascimento?")
if (ano <= 2006){
alert('Você pode votar')
} else {
    alert('Você não poderá votar')
}


//2:-

let senha = parent(prompt('Digite a senha'))

if (senha == 1234){
    alert('Acesso Permitido')
}else{
    alert('Acesso Negado')
}


//3:-

let turno = prompt('Em Qual Turno Você Estuda?')

if (turno == 'Matutino'){
alert ('Bom Dia!')

}else if (turno == 'Tarde'){
    alert('Boa Tarde!')

}else if (turno == 'Noite'){
    alert('Boa Noite')

}else{
    alert('Valor Inválido')
}