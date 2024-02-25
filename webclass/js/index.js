window.addEventListener('scroll', setScrollVar)
window.addEventListener('resize', setScrollVar)

function setScrollVar() {
    const htmlElement = document.documentElement
    const percentOfScreenHeightScrolled = htmlElement.scrollTop / htmlElement.clientHeight
    htmlElement.style.setProperty('--scroll', Math.min(percentOfScreenHeightScrolled * 100, 100))
}

setScrollVar()

const observer = new IntersectionObserver(entries => {
    for (let i = entries.length - 1; i >= 0; i--) {
        const entry = entries[i]
        if (entry.isIntersecting) {
            document.querySelectorAll('[data-img]').forEach(img => {
                img.classList.remove('show')
            })
            const img = document.querySelector(entry.target.dataset.imgToShow)
            if (img) {
                img.classList.add('show')
            }
            break
        }
    }
})
document.querySelectorAll('[data-img-to-show]').forEach(section => {
    observer.observe(section)
})

