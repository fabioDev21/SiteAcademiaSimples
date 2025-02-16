const addNovoTreinoBtn = document.querySelector('.addNovoTreino__btn')
const dialogForms = document.querySelector('#dialogForm')

addNovoTreinoBtn.addEventListener('click', () => {
    dialogForms.showModal()
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
                    <input type="checkbox" value="triceps">
                    <span>Tríceps</span>
                    <input type="checkbox" value="torsaoSentada">
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
                    <input type="checkbox" value="supino">
                    <span>Supino</span>
                    <input type="checkbox" value="crucifixoFrontal">
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
                    <input type="checkbox" value="flexaoPernas">
                    <span>Flexão Pernas</span>
                    <input type="checkbox" value="legPress">
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
    // const dadoImagemColetado = document.querySelector('#imagemDoTreino').files[0]
    // const imagemDoTreino = URL.createObjectURL(dadoImagemColetado)

    // const novoTreinoCriado = {
    //     idCaixaTreino: idElemento,
    //     nome: nomeDoTreino,
    //     parte: partesExercitadas,
    //     imgTreino: imagemDoTreino
    // }

    // mostraNovoTreino(novoTreinoCriado)
}

function mostraNovoTreino({idCaixaTreino, nome, parte, imgTreino}){

    const caixaParaAddTreinos = document.querySelector("#treinosAdicionados")
    const novoTreino = `
        <div class="elementoTreino" id="criado${idCaixaTreino}">
            
            <img src="${imgTreino}" alt="Imagem do treino adicionado">
            <div class="elementoTreino__titleNsubtitle">
                <h4>${nome}</h4>
                <p>${parte[0]}, ${parte[1]} e ${parte[2]}</p>
            </div>
            <button class="elementoTreino__btn">Visualizar</button>
        </div>` 
    caixaParaAddTreinos.insertAdjacentHTML('afterbegin', novoTreino)

    dialogForms.close()
     
    // estilizar a forma como o treino aparece e como a imagem do treino aparece, estilizar formulario
    // que seja possível editar o treino também,.muito necessário.
    // fazer o crud complete dessa página de treinos e refatorar o código para seu devido depois
    // fazer o condicionamento de parâmetros recebidos!!!


    // treino a adicionar quando e ele decidir criar um treino novo
    // <div id="treinosAdicionados" class="caixaTreinos">
    // <h3 class="mainContainer__title"> Aqui estão seus exercícios personalizados</h3>
    // </div>
    
    
    // últimos treinos para mostrar abaixo do gráfico do usuário em seu perfil
    // <div id="treinosUltimos" class="caixaTreinos">
    // <h3 class="mainContainer__title"> Estes forams seus últimos treinos</h3>
    // </div>
}