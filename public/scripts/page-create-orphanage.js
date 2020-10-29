//create map
const map = L.map('mapid').setView([-27.222633, -49.6455874], 16); // coordenadas e zoom

//create and add titleLayer
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);

//create icon 
const icon = L.icon({
    iconUrl: "/images/map-marker.svg",
    iconSize: [58, 68],
    iconAnchor: [29, 68],
    popupAnchor: [170, 2]
})

let marker;

//create an add marker 
map.on('click', (event)=>{
    const lat = event.latlng.lat;
    const lng = event.latlng.lng; 

    document.querySelector('[name=lat]').value = lat;
    document.querySelector('[name=lng]').value = lng;


    //remove icon
    marker && map.removeLayer(marker) 

    //add icon layer
    marker = L.marker([lat, lng], {icon})
    .addTo(map)

})

/* adicionar o campo de fotos */

function addPhotoField(){
    //pegar o container de fotos #images
    const container = document.querySelector('#images')
    
    //pegar o container para duplicar .new-image
    const fieldsContainer = document.querySelectorAll('.new-upload')

    //realizar o clode da ultima imagem adicionada
    const newFieldContainer = fieldsContainer[fieldsContainer.length - 1].cloneNode(true)

    //verificar se o campo esta vazio, se sim não adicionar mais container
    const input = newFieldContainer.children[0]

    if(input.value == ""){
        return
    } 

    //limpar campo antes de adicionar ao container da
    input.value = ""

    //adicionar o clone ao container de imagens
    container.appendChild(newFieldContainer)
}

function deleteField(event){
    const span = event.currentTarget

    const fieldsContainer = document.querySelectorAll('.new-upload')

    if(fieldsContainer.length <= 1) {
        //limpar o valor do campo
        span.parentNode.children[0].value = ""
        return
    }

    //DELETAR O CAMPO
    span.parentNode.remove();
}

//select yes or no
function toggleSelect(event){

     //retirar a class .active (dos botoes) 
     document.querySelectorAll('.button-select button')
     .forEach(function(button) {
        button.classList.remove('active')
     })

     //colocar a class .active nesse boatao clicado
     const button = event.currentTarget
     button.classList.add('active')

    //atualizar o escolhido com o valor selecionado
    const input = document.querySelector('[name="open_on_weekends"]')
    
    input.value = button.dataset.value
}

function validate(event){
    //validar se lat e lng estao preenchidos
    const needslatandlng = false;

    if(needslatandlng){
        event.preventDefault()
        alert('Selecione um ponto no mapa')
    }
 
}
