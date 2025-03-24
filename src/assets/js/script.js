function adicionarIngrediente() {
    let div = document.createElement("div")
    div.innerHTML = `
        <input type="text" name="ingredientes[]" placeholder="Ingrediente">
        <input type="text" name="quantidades[]" placeholder="Quantidade">`
    document.getElementById("ingredientes").appendChild(div)
}

function adicionarPasso() {
    let i = 1
    let div = document.createElement("div")
    div.innerHTML = `<input type="text" name="passos[]" placeholder="Passo ${i}">`
    document.getElementById("passos").appendChild(div)
}