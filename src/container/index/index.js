class Slider {
    static #content = null  //це <div class="slider__content"> з index.hbs
    static #left = null     // кнопка вліво з index.hbs
    static #right = null       // кнопка вправо з index.hbs
    static #count = 1  //к-сть картинок на екрані
    static #max = null  // к-сть картинок(у нас 4 картинки,4 рядки в index.hbs)

    static init = () => {
        this.#content = document.querySelector('.slider__content')  //document.querySelector шукає перший елем.в '.slider__content' і присвоює полю #content
        this.#left = document.querySelector('.slider__button--left') //document.querySelector шукає перший елем.в '.slider__button--left' і присвоює полю #left
        this.#right = document.querySelector('.slider__button--right')
        this.#max = this.#content.childElementCount  // показує скільки елементів(картинок в <div class="slider__content"> з index.hbs)
        
        this.#left.onclick = () => this.#slide('left')
        this.#right.onclick = () => this.#slide('right')
    }
    static #slide = (side) => {
        const offsetWidth = this.#content.offsetWidth
        const scrollLeft = this.#content.scrollLeft
        const scrollWidth = this.#content.scrollWidth

        let scroll = 0

        if(side === 'left') {
            if(this.#count === 1 || scrollLeft === 0) {
                this.#count = this.#max
                scroll = (this.#count - 1) * offsetWidth
            } else {
                this.#count -= 1
                scroll = (this.#count - 1) * offsetWidth
            }
        }

        if(side === 'right') {
            if(this.#count === this.#max || scrollLeft === scrollWidth - offsetWidth) {
                this.#count = 1
                scroll = 0
            } else {
                this.#count += 1
                scroll = (this.#count - 1) * offsetWidth
            }
        }

        this.#content.scrollTo({
            top: 0,
            left: scroll,
            behavior: 'smooth',
        })
    }
}

Slider.init()

class Header {
    static #height = null  //це <div class="slider__content"> з index.hbs
    static #wrapper = null     // кнопка вліво з index.hbs
    static #button = null 
    static #isOpen = false

    static init() {
        this.#height = document.querySelector('.header__bottom',).offsetHeight 
        this.#wrapper = document.querySelector('.header__wrapper',)
        this.#button = document.querySelector('.header__button')
        this.#button.onclick = this.toggle 
    }

    static toggle = () => {
        if(this.#isOpen) {
            this.#button.classList.replace(
                'header__button--close',
                'header__button--open',
            )
            this.#wrapper.style.height = 0
        } else {
            this.#button.classList.replace(
                'header__button--open',
                'header__button--close',
                )
            this.#wrapper.style.height = `${this.#height}px`
        }
        this.#isOpen = !this.#isOpen
    }
}

Header.init()