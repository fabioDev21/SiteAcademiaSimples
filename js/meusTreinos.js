const addNovoTreinoBtn = document.querySelector('.addNovoTreino__btn')
const dialogForms = document.querySelector('#dialogForm')
const dialogElementoTreino = document.querySelector("#modalElementoTreino")
const elementoTreino = document.querySelectorAll(".elementoTreino")


const treinosProntos = {
    treino: [{
        id: 1,
        nome: "Treino iniciante",
        partes: "Costas, Bíceps e Tríceps",
        exercicios: {
            1: "Crucifixo Frontal",
            2: "Supino",
            3: "Polia"
        }
    },{
        id: 2,
        nome: "Treino força superior",
        partes: "Braços, peito e cardio",
        exercicios: {
            1: "Remada",
            2: "Barra",
            3: "Bicicleta"
        }
    },{
        id: 3,
        nome: "Treino geral light",
        partes: "Braços, Pernas e Cardio",
        exercicios: {
            1: "Supino",
            2: "Leg Press",
            3: "Esteira"
        }
    }]
    
}

// função para encontrar o botão de view de cada elemento e pesquisar dentro dos objetos qual treino deve ser mostrado no modal

elementoTreino.forEach(unBtn => {
    unBtn.addEventListener('click', el => {

        if(el.target.classList == "elementoTreino__btnView"){
            const elementoTreinoId = parseInt(el.target.parentElement.getAttribute("data-id"))
            
            const treinoEncontrado = treinosProntos.treino.find(treino => {
                return treino.id == elementoTreinoId
            });

            if(dialogElementoTreino.querySelector('.modalElementoTreino__container')){
                dialogElementoTreino.querySelector('.modalElementoTreino__container').remove()
            }

            dialogElementoTreino.showModal()
            dialogElementoTreino.setAttribute("data-id", `${treinoEncontrado.id}`)
            dialogElementoTreino.insertAdjacentHTML('afterbegin', `
            <div class="modalElementoTreino__container">
                <h3 class="modalElementoTreino__title">${treinoEncontrado.nome}</h3>
                <h4 class="modalElementoTreino__subtitle">${treinoEncontrado.partes}</h4>
                <ul>
                    <li>${treinoEncontrado.exercicios[1]}</li>
                    <li>${treinoEncontrado.exercicios[2]}</li>
                    <li>${treinoEncontrado.exercicios[3]}</li>
                </ul>
            </div>    
            `)
        } else{
            return
        }
        

    })
})

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

    const todasAsPartesExercitadas = coletaValuesESelectsDasPartesExercitadas()
    
    const novoTreinoCriado = {
        idCaixaTreino: idElemento,
        nome: nomeDoTreino,
        imgTreino: imagemDoTreino,
        exercicios: {
            parte1: todasAsPartesExercitadas[0],
            parte2: todasAsPartesExercitadas[1],
            parte3: todasAsPartesExercitadas[2],   
        }
    }
    treinosProntos.treino.push(novoTreinoCriado)
    mostraNovoTreino(novoTreinoCriado)
}

function coletaValuesESelectsDasPartesExercitadas(){
    const todosOsValuesCheckados = []
    const todosOsSelects = []

    const partesExercitadasValues = document.querySelectorAll('.tiposTreinos > label > input:checked')
    partesExercitadasValues.forEach( (el) => {
        todosOsValuesCheckados.push(el.defaultValue)
    })

    const partesExercitadasSelects = document.querySelectorAll('.partesExercLabels > select')
    partesExercitadasSelects.forEach( (el) => {
        todosOsSelects.push(el.value)
    })
    console.log(todosOsSelects)
    return (todosOsValuesCheckados, todosOsSelects)
}

function mostraNovoTreino({idCaixaTreino, nome, imgTreino, exercicios}){
    dialogForms.close()
    const caixaParaAddTreinos = document.querySelector("#treinosAdicionados")
    const novoTreino = `
        <div data-id="${idCaixaTreino}" class="elementoTreino" id="criado${idCaixaTreino}">
            <img src="${imgTreino}" alt="Imagem do treino adicionado">
            <div class="elementoTreino__titleNsubtitle">
                <h4>${nome}</h4>
                <p>${exercicios.parte1}, ${exercicios.parte2} e ${exercicios.parte3}</p>
            </div>
            <button id="btnView${idCaixaTreino}" class="elementoTreino__btnView">Visualizar</button>
        </div>`
    caixaParaAddTreinos.insertAdjacentHTML('beforeend', novoTreino)
    document.querySelector('body').style.gridTemplateRows = "15vh 150vh 15vh"
    
    // Localizo o botão de visualizar o treino e aguardo o evento de click nele. 
    const btnViewNewTreino = document.querySelector(`#btnView${idCaixaTreino}`)
    btnViewNewTreino.addEventListener("click", () => {        
        
        // Procura e assume o treino encontrado dentro dos treinos que já existem
        const treinoEncontrado = treinosProntos.treino.find(treino => {
            return treino.idCaixaTreino == idCaixaTreino
        });

        // Se o dialog já tem coisa dentro, ele exclui para a adição de novos elementos relacionado ao treino clicado.
        if(dialogElementoTreino.querySelector('.modalElementoTreino__container')){
            dialogElementoTreino.querySelector('.modalElementoTreino__container').remove()
        }

        // aqui ele mostra o modal, seta o atributo e insere os elementos na tela. Puxando os atributos do objeto.
        dialogElementoTreino.showModal()
        dialogElementoTreino.setAttribute("data-id", `${treinoEncontrado}`)
        dialogElementoTreino.insertAdjacentHTML('afterbegin', `
        <div class="modalElementoTreino__container">
            <h3 class="modalElementoTreino__title">${treinoEncontrado.nome}</h3>
            <h4 class="modalElementoTreino__subtitle">Exercícios treinados: </h4>
            <ul>
                <li>${treinoEncontrado.exercicios.parte1}</li>
                <li>${treinoEncontrado.exercicios.parte2}</li>
                <li>${treinoEncontrado.exercicios.parte3}</li>
            </ul>
        </div>    
        `)
    })  
}
    
    // estilizar a forma como o treino aparece e como a imagem do treino aparece, estilizar formulario
    // que seja possível editar o treino também,.muito necessário.
    // fazer o crud complete dessa página de treinos e refatorar o código para seu devido depois
    // fazer o condicionamento de parâmetros recebidos!!!