
function saveHouse(){
    let area = document.querySelector("input[name='area']").value
    let number = document.querySelector("input[name='number']").value
    let neighborhood = document.querySelector("input[name='neighborhood']").value
    let city = document.querySelector("input[name='city']").value

    let newList = document.createElement("li")
    newList.innerText = " Área:  " + area + " m². " +  "  Número: " + number +  " Bairro: " + neighborhood + " (" + city + "). " + "\n" + "\n"

    let removeButton = document.createElement("button")
    removeButton.type = "button"
    removeButton.innerText = "Remover"
    removeButton.setAttribute("onclick" , "removeHouse(this)")

    newList.appendChild(removeButton)

    document.getElementById("house-list").appendChild(newList)

    
}

function removeHouse(button){
    let liToRemove = button.parentNode
    document.getElementById("house-list").removeChild(liToRemove)

}
