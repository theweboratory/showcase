const section3Content = document.querySelector('.section-3-content');

window.addEventListener('scroll', () => {
    if (window.pageYOffset + window.innerHeight >= section3Content.offsetTop + section3Content.offsetHeight / 2) {
        section3Content.classList.add('change')
    }
})
