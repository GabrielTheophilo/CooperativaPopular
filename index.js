function submeter() {
    const inputNome = document.getElementById('clienteNome');
    const inputEmail = document.getElementById('clienteEmail');
    const div = document.getElementById('resposta');
    let e = document.createElement('p');
    e.innerText = inputNome.value + ', sua mensagem foi enviada com sucesso!';
    div.appendChild(e);
    
}