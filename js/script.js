const allContainer = document.querySelector(`.allContainer`)
window.addEventListener(`load`, () => {
    const treinosAdicionados = document.querySelector('#treinosAdicionados')
    const treinosUltimos = document.querySelector('#treinosUltimos')
    const treinosProntos = document.querySelector('#treinosProntos')
    const imgPlaceholderSemTreinos = `<img src="../assets/imgs/img-sem-treinos.png">`

    if(!treinosAdicionados.children.length < 1 || !treinosUltimos.children.length < 1 || !treinosProntos.children.length < 1){
        treinosAdicionados.insertAdjacentHTML(`beforeend`, imgPlaceholderSemTreinos)
        treinosUltimos.insertAdjacentHTML(`beforeend`, imgPlaceholderSemTreinos)
        treinosProntos.insertAdjacentHTML(`beforeend`, imgPlaceholderSemTreinos)
    }


})

const formMeusTreinos = document.querySelector('#adicionarNovoFrm')
formMeusTreinos.addEventListener('submit', (e) => {
    e.preventDefault()
    criaNovoTreino()
})

function criaNovoTreino(){
    const idElemento = Date.now()
    const nomeDoTreino = document.querySelector('#nomeTreinoInpt').value
    const qntSeries = document.querySelector('#qntSeriesInpt').value
    const parteExercitada = document.querySelector('#parteExercInpt').value
    const cargaExercicio = document.querySelector('#cargaExercicio').value



    /* Explicação desta lógica: 
        Pegamos o primeiro arquivo selecionado (files[0]).  
        Criamos uma URL temporária com URL.createObjectURL(imagemArquivo),
        que permite exibir a imagem sem precisar enviá-la para um servidor.
    */ 
    const dadoImagemColetado = document.querySelector('#imagemDoTreino').files[0]
    const imagemDoTreino = URL.createObjectURL(dadoImagemColetado)

    const novoTreinoCriado = {
        idCaixaTreino: idElemento,
        nome: nomeDoTreino,
        series: qntSeries,
        parte: parteExercitada,
        carga: cargaExercicio,
        imgTreino: imagemDoTreino
    }

    mostraNovoTreino(novoTreinoCriado)
}

function mostraNovoTreino({idCaixaTreino, nome, series, parte, carga, imgTreino}){


    const caixaParaAddTreinos = document.querySelector("#treinosAdicionados")
    const novoTreino = `
        <div id="treino${idCaixaTreino}" class="elementoTreino">
            <img src="${imgTreino}" alt="Imagem do treino adicionado">
            <h4>${nome} - ${parte}</h4>
            <p>Características: </p>
            <p>Repetições ou Séries: ${series}</p>
            <p>Carga: ${carga}</p>
        </div>` 
    caixaParaAddTreinos.insertAdjacentHTML('afterbegin', novoTreino)

    // estilizar a forma como o treino aparece e como a imagem do treino aparece, estilizar formulario
    // que seja possível editar o treino também,.muito necessário.
    // fazer o crud complete dessa página de treinos e refatorar o código para seu devido depois
    // fazer o condicionamento de parâmetros recebidos!!!

}