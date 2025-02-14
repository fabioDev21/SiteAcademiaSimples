const formMeusTreinos = document.querySelector('#adicionarNovoFrm')
formMeusTreinos.addEventListener('submit', (e) => {
    e.preventDefault()
    criaNovoTreino()
})

function criaNovoTreino(){
    const nomeDoTreino = document.querySelector('#nomeTreinoInpt').value
    const qntSeries = document.querySelector('#qntSeriesInpt').value
    const parteExercitada = document.querySelector('#parteExercInpt').value

    const novoTreinoCriado = {
        nome: nomeDoTreino,
        series: qntSeries,
        parte: parteExercitada
    }

    mostraNovoTreino(novoTreinoCriado)
}

function mostraNovoTreino({nome, series, parte}){
    console.log(`O nome do seu novo treino é: ${nome}, com ${series} series necessárias e você deve treinar a ${parte}!`)

    // corrigir detalhes de amostragem no console, por exemplo a parte precisa mostrar separado e fora que deve-se mostrar o treino na tela da página.
    // que seja possível editar o treino também,.muito necessário.
    // fazer o crud complete dessa página de treinos e refatorar o código para seu devido depois
    // fazer o condicionamento de parâmetros recebidos!!!

}