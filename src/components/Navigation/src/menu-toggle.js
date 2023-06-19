export default class MenuToggle {
    constructor(element, parent) {
        this.parent = parent;
        this.element = element;
        this.trapFocusHandler = this.trapFocusHandler(parent.element);
    }

    get isOpen() {
        return this.element.getAttribute('aria-expanded') === 'true';
    }

    init() {
        this.toggleMobileClasses();
        this.registerEffects();
    }

    isVisible = (element) => !!(element.offsetWidth || element.offsetHeight || element.getClientRects().length);
    trapFocusHandler = (element) => (event) => {
        if (element.contains(event.target)) {
            // eslint-disable-next-line no-param-reassign
            element.gravityLastFocus = event.target;
        } else {
            const allFocusableElements = element.querySelectorAll(
                "a[href]:not([disabled]), a[role='button'], button:not([disabled]), textarea:not([disabled]), input:not([disabled]), select:not([disabled])"
            );
            const focusableElements = [...allFocusableElements].filter((focusableElement) => this.isVisible(focusableElement));
            const firstFocusableElement = focusableElements[0];
            const lastFocusableElement = focusableElements[focusableElements.length - 1];

            if (element.gravityLastFocus === firstFocusableElement) {
                lastFocusableElement.focus();
            } else {
                firstFocusableElement.focus();
            }

            // eslint-disable-next-line no-param-reassign
            element.gravityLastFocus = document.activeElement;
        }
    };
    toggleMobileClasses() {
        if (this.parent.isMobile) {
            this.parent.element.classList.add('block-navigation--is-mobile');
            document.body.classList.add('navigation-is-mobile');
        } else {
            this.parent.element.classList.remove('block-navigation--is-mobile');
            document.body.classList.remove('navigation-is-mobile');
            this.close();
        }
    }

    registerEffects() {
        // Toggle mobile menu on button click
        this.element.addEventListener('click', () => {
            this.toggle();
        });
    }

    registerDocumentEffects(event) {
        if (event.target.closest('.block-navigation')) {
            return;
        }

        this.close();
    }

    toggle() {
        if (this.isOpen) {
            this.close();
        } else {
            this.open();
        }
    }

    open() {
        document.body.classList.add('block-navigation--mobile-open');

        this.element.setAttribute('aria-label', 'Close Menu');
        this.element.setAttribute('aria-expanded', true);

        document.addEventListener('focus', this.trapFocusHandler, true);
    }

    close() {
        document.body.classList.remove('block-navigation--mobile-open');

        this.element.setAttribute('aria-label', 'Open Menu');
        this.element.setAttribute('aria-expanded', false);
        document.removeEventListener('focus', this.trapFocusHandler, true);
    }
}