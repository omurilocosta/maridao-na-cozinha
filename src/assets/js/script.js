function adicionarIngrediente() {
    let div = document.createElement("div")
    div.innerHTML = `
        <div class="inputs-ingredientes">
            <input type="text" name="ingredientes[]" placeholder="Ingrediente">
            <input type="text" name="quantidades[]" placeholder="Quantidade">
        </div>
                `
    document.getElementById("add-ingredientes-area").appendChild(div)
}

function adicionarPasso() {
    let i = document.querySelectorAll(".inputs-preparos").length + 1
    let div = document.createElement("div")
    div.innerHTML = `
                <div class="inputs-preparos">
                    <input type="text" name="passos[]" placeholder="Passo ${i}">
                </div>`
    document.getElementById("add-preparos-area").appendChild(div)
}