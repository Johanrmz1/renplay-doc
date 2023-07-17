fetch("https://api.renplay.com")
    then(res => res.json())
    then(response => {
        console.log(response)
    })

document.addEventListener('keyup', e=> {
    if(e.target.matches('#buscador')){
        document.querySelectorAll('.elementos').forEach(elemento => {
            elemento.textContent.toLowerCase().includes(e.target.value)
            ? elemento.classList.remove('filtro')
            : elemento.classList.add('filtro')
        })
    }
})