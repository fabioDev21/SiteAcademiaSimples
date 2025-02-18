const addNovoTreinoBtn = document.querySelector('.addNovoTreino__btn')
const btnFecharBoxNovoTreino = document.querySelector('.addNovoTreinoBox__btnFechar')
const dialogForms = document.querySelector('#dialogForm')

addNovoTreinoBtn.addEventListener('click', () => {
    dialogForms.showModal() 
    btnFecharBoxNovoTreino.addEventListener('click', () => {
        dialogForms.close()
    })

})

const formMeusTreinos = document.querySelector('#adicionarNovoFrm')
formMeusTreinos.addEventListener('submit', (e) => {
    e.preventDefault()
    criaNovoTreino()
})

const partesExercitadas = document.querySelectorAll('.partesExercInpt')
partesExercitadas.forEach((selectItem, index) => {
    selectItem.addEventListener('change', el => {
        const elPaiDoSelectItem = document.querySelectorAll(".partesExercLabels")[index]

        if(elPaiDoSelectItem.querySelector('.tiposTreinos')){
            elPaiDoSelectItem.querySelector('.tiposTreinos').remove()
        }

        if(el.target.value === 'alongamento'){
            elPaiDoSelectItem.insertAdjacentHTML('beforeend', 
            `
            <div class='tiposTreinos'>
                <label for="tiposTreinosAlongamento">
                    <input type="checkbox" value="Tríceps">
                    <span>Tríceps</span>
                    <input type="checkbox" value="Torsão Sentada">
                    <span>Torsão sentada</span>
                </label>
            </div>                
            `)
        } else if(el.target.value === 'parteSuperior'){

            if(elPaiDoSelectItem.querySelector('.tiposTreinos')){
                elPaiDoSelectItem.querySelector('.tiposTreinos').remove()
            }

            elPaiDoSelectItem.insertAdjacentHTML('beforeend', 
            `
            <div class='tiposTreinos'>
                <label for="tiposTreinosSuperior">
                    <input type="checkbox" value="Supino">
                    <span>Supino</span>
                    <input type="checkbox" value="Crucifixo Frontal">
                    <span>Crucifixo frontal</span>
                </label>
            </div>                
            `)
        } else if(el.target.value === 'parteInferior'){

            if(elPaiDoSelectItem.querySelector('.tiposTreinos')){
                elPaiDoSelectItem.querySelector('.tiposTreinos').remove()
            }

            elPaiDoSelectItem.insertAdjacentHTML('beforeend', 
            `
            <div class='tiposTreinos'>
                <label for="tiposTreinosInferior">
                    <input type="checkbox" value="Flexão Pernas">
                    <span>Flexão Pernas</span>
                    <input type="checkbox" value="Leg Press">
                    <span>Leg Press</span>
                </label>
            </div>                
            `)
        } else if(el.target.value === 'cardio'){

            if(elPaiDoSelectItem.querySelector('.tiposTreinos')){
                elPaiDoSelectItem.querySelector('.tiposTreinos').remove()
            }

            elPaiDoSelectItem.insertAdjacentHTML('beforeend', 
            `
            <div class='tiposTreinos'>
                <label for="tiposTreinosCardio">
                    <input type="checkbox" value="Esteira">
                    <span>Esteira</span>
                    <input type="checkbox" value="Bicicleta">
                    <span>Bicicleta</span>
                    <input type="checkbox" value="Natação">
                    <span>Natação</span>
                </label>
            </div>                
            `)
        } else{

            if(elPaiDoSelectItem.querySelector('.tiposTreinos')){
                elPaiDoSelectItem.querySelector('.tiposTreinos').remove()
            }

            elPaiDoSelectItem.insertAdjacentHTML('beforeend', 
            `
            <div class='tiposTreinos'>
                <span> Você precisa escolher um grupo para treinar! </span>
            </div>                
            `)
            
        }

    })
})

function criaNovoTreino(){
    const idElemento = Date.now()
    const nomeDoTreino = document.querySelector('#nomeTreinoInpt').value
    

    /* Explicação desta lógica: 
        Pegamos o primeiro arquivo selecionado (files[0]).  
        Criamos uma URL temporária com URL.createObjectURL(imagemArquivo),
        que permite exibir a imagem sem precisar enviá-la para um servidor.
    */
    const dadoImagemColetado = document.querySelector('#imagemDoTreino').files[0]
    const imagemDoTreino = URL.createObjectURL(dadoImagemColetado)

    const todasAsPartesExercitadas = coletaValuesDasPartesExercitadas()
    console.log(todasAsPartesExercitadas)
    
    const novoTreinoCriado = {
        idCaixaTreino: idElemento,
        nome: nomeDoTreino,
        parte1: todasAsPartesExercitadas[0],
        parte2: todasAsPartesExercitadas[1],
        parte3: todasAsPartesExercitadas[2],
        imgTreino: imagemDoTreino
    }
    
    console.log(novoTreinoCriado)
    mostraNovoTreino(novoTreinoCriado)
}

function coletaValuesDasPartesExercitadas(){
    const todosOsValuesGrupos = []
    const partesExercitadasValues = document.querySelectorAll('.tiposTreinos > label > input:checked')

    partesExercitadasValues.forEach( (el) => {
        todosOsValuesGrupos.push(el.defaultValue)
    })

    return todosOsValuesGrupos
}


function mostraNovoTreino({idCaixaTreino, nome, parte1, parte2, parte3, imgTreino}){

    console.log(parte1, parte2, parte3)
    const caixaParaAddTreinos = document.querySelector("#treinosAdicionados")
    const novoTreino = `
        <div class="elementoTreino" id="criado${idCaixaTreino}">
            
            <img src="${imgTreino}" alt="Imagem do treino adicionado">
            <div class="elementoTreino__titleNsubtitle">
                <h4>${nome}</h4>
                <p>${parte1}, ${parte2} e ${parte3}</p>
            </div>
            <button class="elementoTreino__btn">Visualizar</button>
        </div>` 
    caixaParaAddTreinos.insertAdjacentHTML('beforeend', novoTreino)
    document.querySelector('body').style.gridTemplateRows = "15vh 150vh 15vh"

    dialogForms.close()
    
    // estilizar a forma como o treino aparece e como a imagem do treino aparece, estilizar formulario [feito]
    // que seja possível editar o treino também,.muito necessário.
    // fazer o crud complete dessa página de treinos e refatorar o código para seu devido depois
    // fazer o condicionamento de parâmetros recebidos!!! [feito]    
    
}