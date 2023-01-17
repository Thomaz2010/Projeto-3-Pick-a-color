
const colors = ['Red', 'Black', 'Blue', 'Yellow', 'Purple', 'Green']
const btn = document.getElementById('btn')
const colorName = document.querySelector('.color') // pegando a classe para associar no text 
// usando o metodo query     

// no click 
btn.addEventListener('click', function () {
    const randomColor = getRandonColor() // associando a variavel 
    document.body.style.background = colors[randomColor]  //aplicando a cor no Background
    colorName.textContent = colors[randomColor] //inserindo a cor associada 

    //console.log(randomColor)
})

// Gerando um numero randomico

function getRandonColor() {
    return Math.floor(Math.random() * colors.length)
}

