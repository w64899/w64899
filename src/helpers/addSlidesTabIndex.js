import { getFocusableElements } from './getFocusableElements';

export const addSlidesTabIndex = (swiper) => {
    const visibleSlidesCount = swiper.el.querySelectorAll('.swiper-slide-visible')?.length;

    swiper.slides.forEach((slide, index) => {
        /* eslint-disable */
        let slidesPerView = swiper.params.slidesPerView;
        /* eslint-enable */
        if (slidesPerView === 'auto' && slide.classList.contains('swiper-slide-visible')) {
            slidesPerView = visibleSlidesCount;
        }

        const isActiveSlide = index >= swiper.activeIndex && index < swiper.activeIndex + slidesPerView;
        let currentTabIndex;
        if (isActiveSlide) {
            currentTabIndex = '0';
        } else {
            currentTabIndex = '-1';
        }

        getFocusableElements(slide).forEach((element) => {
            element.setAttribute('tabindex', currentTabIndex);
        });
    });
};