import './style.scss';
import MenuExternalElements from './menu-external-elements';
import MenuToggle from './menu-toggle';

export default () => {
    const navigations = [];

    document.querySelectorAll('.block-navigation').forEach((module, index, modules) => {
        const navigation = new Navigation(module);
        const isLastNavigation = index === modules.length - 1;

        navigation.init(isLastNavigation);
        navigations.push(navigation);
    });

    document.addEventListener('click', (event) => {
        navigations.forEach((navigation) => {
            navigation.handleOutsideClick(event);

            if (navigation.isToggleEnabled) {
                navigation.toggle.registerDocumentEffects(event);
            }
        });
    });
};

class Navigation {
    constructor(element) {
        this.element = element;
        this.initializedClass = 'block-navigation--initialized';
        this.menuContainer = element.querySelector('.block-navigation__container');
        this.beforeWrapper = this.menuContainer.querySelector('.block-navigation__before-wrapper');
        this.afterWrapper = this.menuContainer.querySelector('.block-navigation__after-wrapper');
        this.backButtons = element.querySelectorAll('.block-navigation__sub-menu-back')
        this.mainButtons = element.querySelectorAll('.block-navigation__main-button')
        this.submenus = element.querySelectorAll('.block-navigation__sub-menu')
        this.openFlyoutButtons = element.querySelectorAll('[data-isopen] button:not(.block-navigation__back-button)')
        this.toggleOption = element.dataset.mobileToggle;
        this.isToggleEnabled = this.toggleOption !== 'off';
        this.mobileBreakpoint = this.toggleOption === 'custom' ? parseInt(element.dataset?.mobileBreakpoint, 10) : 1024;
        this.mediaQueryList = window.matchMedia(`(max-width: ${this.mobileBreakpoint}px)`);

        if (this.isToggleEnabled) {
            this.toggle = new MenuToggle(this.element.querySelector('.block-navigation__mobile-toggle'), this);
            this.element.gravity = new MenuExternalElements(this);
        }
    }

    get isMobile() {
        return this.mediaQueryList.matches;
    }

    init(isLastNavigation = false) {
        if (this.isToggleEnabled) {
            this.toggle.init();
            this.initExternalElements();
            this.registerResizeEffects();
            this.addListenersToMenu();
            this.addEventsToLinks();
        }

        this.element.classList.add(this.initializedClass);

        if (isLastNavigation) {
            document.body.classList.add(this.initializedClass);
        }
    }

    registerResizeEffects() {
        this.mediaQueryList.addEventListener('change', () => {
            this.toggle.toggleMobileClasses();
            this.element.gravity.moveElements();
        });
    }

    addEventsToLinks() {
        this.openFlyoutButtons.forEach(button=>{
            button.addEventListener('keydown', (key) => {
                if (key.code === 'Enter') {
                    key.preventDefault();
                    this.openFlyout(button);
                }
            });
        })

        this.openFlyoutButtons.forEach(button=>{
            button.addEventListener('click', ()=>{
                this.openFlyout(button);
                this.openMobileFlyout(button)
            })
        })
    }

    closeNoneActiveMainTabs(openButton) {
        this.mainButtons.forEach(mainButton => {
            if (openButton === mainButton) {
                this.openFlyoutButtons.forEach(button=>{
                    if(button!==openButton) {
                        button.parentElement.setAttribute('data-isopen', 'false')
                    }
                })
            }
        });
    }

    openFlyout(openButton){
        if(openButton.parentElement.dataset.isopen === 'false') {
            openButton.parentElement.setAttribute('data-isopen','true')
            this.handleDataToggleOnMainButton(openButton)
        } else {
            this.closeFlyout(openButton)
        }

        this.closeNoneActiveMainTabs(openButton)
    }

    handleDataToggleOnMainButton(button) {
        if(!button.classList.contains('block-navigation__main-button') && button.closest('li.block-navigation__item--mega-menu').dataset.isopen==='false'){
            button.closest('li.block-navigation__item--mega-menu').setAttribute('data-isopen','true')
        }
    }
    closeFlyout(openButton) {
        openButton.parentElement.setAttribute('data-isopen','false')
        const siblingMenus = Array.from(openButton.parentElement.parentElement.children)

        siblingMenus.forEach(siblingMenu => {
            if(siblingMenu!==openButton.parentElement) {
                siblingMenu.setAttribute('data-isopen', 'false')
            }
        })
    }

    openMobileFlyout(button) {
        if(button.classList.contains('block-navigation__main-button')){
            return
        }
        this.submenus.forEach(submenu=>{
            submenu.setAttribute('data-mobile-flyout-open','true')
        })
    }

    closeMobileFlyout(button) {
        if(button.classList.contains('block-navigation__main-button')){
            return
        }
        this.submenus.forEach(submenu=>{
            submenu.setAttribute('data-mobile-flyout-open','false')
        })
    }

    backToPreviousMenu() {
        this.backButtons.forEach(backButton => {
            backButton.addEventListener('click', (e) => {
                backButton.parentElement.parentElement.dataset.isopen = false;
                this.closeMobileFlyout(backButton)
                e.stopPropagation();
            });
        });

    }

    addListenersToMenu() {
        this.backToPreviousMenu();
    }

    handleOutsideClick(pointer){
        if(this.element.contains(pointer.target)){
            return
        }
        this.openFlyoutButtons.forEach(button=>{
            button.parentElement.setAttribute('data-isopen','false')
        })
    }

    initExternalElements() {
        this.element.gravity.init();
    }
}