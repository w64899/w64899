export default class MenuExternalElements {
    constructor(parent) {
        this.parent = parent;
        this.before = [];
        this.after = [];
    }

    init() {
        this.moveElements();
    }

    /**
     * Deprecated name since 1.1.0
     */
    moveExternalElements() {
        this.moveElements();
    }

    moveElements() {
        if (this.parent.isMobile) {
            this.moveElementsInside();
        } else {
            this.moveElementsBack();
        }
    }

    moveElementsInside() {
        this.before.forEach((element) => {
            // Need this param when moving elements back to their original positions
            // eslint-disable-next-line no-param-reassign

            element.gravity = {
                previousParent: element.parentElement,
                previousNextElement: element.nextElementSibling,
            };

            this.parent.beforeWrapper.appendChild(element);
        });

        this.after.forEach((element) => {
            // Need this param when moving elements back to their original positions
            // eslint-disable-next-line no-param-reassign
            element.gravity = {
                previousParent: element.parentElement,
                previousNextElement: element.nextElementSibling,
            };
            this.parent.afterWrapper.appendChild(element);
        });
    }

    moveElementsBack() {
        // We have to reverse the afters because element is inserted before original next element and in scenario when it also was one of afterElement then it wasn't moved yet
        [...this.afterElements].reverse().forEach((element) => {

            this.moveElementBack(element);
        });

        [...this.beforeElements].forEach((element) => {
            this.moveElementBack(element);
        });
    }

    get afterElements() {
        return this.parent.afterWrapper?.children || [];
    }

    get beforeElements() {
        return this.parent.beforeWrapper?.children || [];
    }

    moveElementBack(element) {
        if (element.gravity.previousNextElement === null) {
            element.gravity.previousParent.appendChild(element);
        } else {
            element.gravity.previousParent.insertBefore(element, element.gravity.previousNextElement);
        }
    }
    registerBeforeWrapper(element) {
        this.before.push(element);
    }
    registerAfterWrapper(element) {
        this.after.push(element);
    }
}