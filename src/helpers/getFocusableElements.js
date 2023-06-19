import { isVisible } from './isVisible';

export const getFocusableElements = (container = document) => {
    const focusable = [
        ...container.querySelectorAll(
            'a[href], area[href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), ' +
            'button:not([disabled]), iframe, object, embed, *[tabindex], *[contenteditable]'
        ),
    ];

    return focusable.filter((element) => isVisible(element));
};