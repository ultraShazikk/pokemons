
var elList = document.querySelector(".pokemon__list");



function renderPokemon(_pokemons) {


    // createElement
    for(var i = 0; i < _pokemons.length; i++){
        var newLi = document.createElement('li')
        var newImg = document.createElement('img')
        var newTitle = document.createElement('h3')
        var newText = document.createElement('p')
        var newKg = document.createElement('span')
        var newAge = document.createElement('span')
        var newBtn = document.createElement('buttons')

        // setatribute
        newLi.setAttribute("class", "pokemon__item")
        newImg.setAttribute("src", _pokemons[i].img)
        newImg.setAttribute("class", _pokemons[i].name)
        newImg.setAttribute("width", 157)
        newImg.setAttribute("height", 157)
        newTitle.setAttribute("class", "pokemon__title")
        newText.setAttribute("class", "pokemon__text")
        newKg.setAttribute("class", "pokemon__kg")
        newAge.setAttribute("class", "pokemon__age")
        newBtn.setAttribute("class", "button")
        newBtn.setAttribute("data-uuid", "close")
        newBtn.setAttribute("type", "button")

        // textcontent
        newTitle.textContent = _pokemons[i].name
        newText.textContent = _pokemons[i].type
        newKg.textContent = _pokemons[i].weight
        newAge.textContent = _pokemons[i].height
        newBtn.textContent = "❤️"

        // appenchild
        newLi.appendChild(newImg)
        newLi.appendChild(newTitle)
        newLi.appendChild(newText)
        newLi.appendChild(newKg)
        newLi.appendChild(newAge)
        newLi.appendChild(newBtn)
        elList.appendChild(newLi)

    }
}


renderPokemon(pokemons)

var ButtonLike = document.querySelectorAll(".button");
var TextLike = document.querySelector(".cound");
var cound = 0;

setInterval(function add(){
    TextLike.textContent = cound
},500)


for(var i=0; i < ButtonLike.length; i++){
    ButtonLike[i].addEventListener("click", (evt) => {
        if(evt.target.dataset.uuid == "close") {
            cound += 1;
            evt.target.dataset.uuid = "open";
        }else if(evt.target.dataset.uuid == "open") {
            cound -= 1;
            evt.target.dataset.uuid = "close";
        }
    })
}