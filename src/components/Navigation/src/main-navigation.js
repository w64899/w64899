export default () => {
    const header = document.querySelector('.navigation')
    const scrollStopNavOut = new CustomEvent('scrollStopNavOut', {
        bubbles: true,
    })

    if (!header) {
        return
    }

    const DOMReplacementElement = header.parentElement.querySelector(
        '.navigation__dom-replacement')
    const menu = header.querySelector('.navigation__main-menu')
    const primaryButton = header.querySelector('.navigation__primary-button')
    const projectHasStickySubNav = false
    let lastScrollTop = 0
    let headerScrollTimeout = null

    const debounce = (func, wait, immediate) => {
        let timeout
        return function () {
            let context = this, args = arguments
            let later = function () {
                timeout = null
                if (!immediate) {
                    func.apply(context, args)
                }
            }
            let callNow = immediate && !timeout
            clearTimeout(timeout)
            timeout = setTimeout(later, wait)
            if (callNow) {
                func.apply(context, args)
            }
        }
    }
    const moveItemsToDrawer = (itemsBefore, itemsAfter) => {
        itemsBefore.forEach((item) => menu.gravity.registerBeforeWrapper(item))
        itemsAfter.forEach((item) => menu.gravity.registerAfterWrapper(item))
        menu.gravity.moveExternalElements()
        document.body.classList.add('navigation--initialized')
    }

    moveItemsToDrawer([], [primaryButton])

    const navObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            header.classList.toggle('at-the-top', entry.isIntersecting)
            header.classList.toggle('scroll', !entry.isIntersecting)
        })
    })

    // Hide the header when user scrolls down, show it when scroll up or stop for at least one second
    if (!projectHasStickySubNav) {
        const hideShowHeader = () => {
            const {scrollTop} = document.documentElement
            const scrollTime = 1000
            header.classList.toggle('hidden', scrollTop > lastScrollTop)
            lastScrollTop = scrollTop
            if (scrollTop < 0) {
                lastScrollTop = 0
            }

            clearTimeout(headerScrollTimeout)
            headerScrollTimeout = setTimeout(() => {
                header.classList.remove('hidden')

                document.dispatchEvent(scrollStopNavOut)

            }, scrollTime)
        }
        const scrollDelay = 10
        window.addEventListener('scroll', debounce(hideShowHeader, scrollDelay))
    }
    navObserver.observe(DOMReplacementElement)
}