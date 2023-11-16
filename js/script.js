const burgerBtn = document.querySelector('.nav__btn')
const burgerIconBtn = document.querySelector('.nav__burger-icon')
const mobileMenu = document.querySelector('.nav__mobile')
const body = document.querySelector('#body')
const mobileNavBtns = document.querySelector('.nav__btns')
const mobileNavBtn = mobileNavBtns.querySelectorAll('.nav__list-btn')
const allNavLists = document.querySelectorAll('.nav__list')
const allNavLinks = document.querySelectorAll('.nav__link')
const allContainers = document.querySelectorAll('.nav__link-container')

mobileMenu.addEventListener('click', (e) =>
{
    const activeList = e.target.closest('.nav__accordion')

    if(Boolean(activeList)){
        toggleAccordion(activeList)
    } else {
        return
    }
})

const closeAllAcordions = () => {
    allContainers.forEach(container =>
        container.setAttribute('aria-expanded', 'false'))
}

const toggleAccordion = (a) => {

    const containerToActivate = a.nextElementSibling
    
    const containerIsOpened = containerToActivate.getAttribute('aria-expanded')
    
    closeAllAcordions()

    if(containerIsOpened == 'true'){
        containerToActivate.setAttribute('aria-expanded', 'false')
    } else {
        containerToActivate.setAttribute('aria-expanded', 'true')
    }
}

const toggleMobileMenu = () => {
    mobileMenu.classList.toggle('active')

    isMobileMenuActive = mobileMenu.classList.contains('active')

    if(isMobileMenuActive){
        body.setAttribute('aria-hidden', 'true' )
        mobileMenu.setAttribute('aria-expanded', 'true' )
        burgerIconBtn.setAttribute('src', './img/icon-close.svg')
    } else {
        closeAllAcordions()
        body.setAttribute('aria-hidden', 'false' )
        mobileMenu.setAttribute('aria-expanded', 'false' )
        burgerIconBtn.setAttribute('src', './img/icon-hamburger.svg')

    }
}

const closeMobileMenu = () => {
    closeAllAcordions()
    
    mobileMenu.classList.remove('active')
    body.setAttribute('aria-hidden', 'false' )
        mobileMenu.setAttribute('aria-expanded', 'false' )
        burgerIconBtn.setAttribute('src', './img/icon-hamburger.svg')
}


burgerBtn.addEventListener('click', toggleMobileMenu)
mobileNavBtn.forEach(btn =>
    btn.addEventListener('click', toggleMobileMenu))

allNavLinks.forEach( navLink =>
    navLink.addEventListener('click', closeMobileMenu ))

