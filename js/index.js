const slides = document.querySelectorAll('.slide')
const inp = document.querySelector('#inp')
const mainInfo = document.querySelector('.info')
const days = document.querySelector('.days')

for (const slide of slides) {
    slide.addEventListener('click',() => {
        clearActivecClasses()

        slide.classList.add('active')
    })
}

function clearActivecClasses() {
    slides.forEach((slide) => { 
        slide.classList.remove('active')
    })
}

function render () {
    const productsStore=localStorageUtil.getProducts()
    headerPage.render(productsStore.length)
    productsPage
}