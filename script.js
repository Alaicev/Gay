const butNo = document.getElementById("not")
const butYes = document.getElementById("yes")

function getRandomArbitrary(min, max) {
    return  Math.random() * (max - min) + min;
}


butNo.addEventListener('mouseover',() => {
butNo.style.left = `${getRandomArbitrary(0, 100)}%`
butNo.style.top = `${getRandomArbitrary(0, 100)}%`
})

butYes.addEventListener('click', () => {
    alert("А я знал))))")
})
butNo.addEventListener('click', () => {
    alert("Нерасраивайся")
})


