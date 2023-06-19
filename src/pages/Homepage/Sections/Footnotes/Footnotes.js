import React from "react";
import './style.scss'

export default ()=>{
    const listRef = React.useRef([])
    const [loadedParts, setLoadedParts] = React.useState(0);
    const [maxPagination, setMaxPagination] = React.useState(1);
    const [isAccordionOpen, setIsAccordionOpen] = React.useState(false)

    React.useEffect(()=>{
        setMaxPagination(listRef.current.length);
    },[listRef])

    listRef.current.forEach((list,index)=>{
        if(index <= loadedParts) {
            list.dataset.isloaded = 'true'
            return;
        }
        list.dataset.isloaded = 'false'
    })

    return(
        <section className='glossary color--black'>
            <h2>Footnotes</h2>
            <div ref={ref=> listRef.current[0] = ref} className='glossary__list' data-isloaded='true'>
                <div className='glossary__list-wrapper spacing--s'>
                    <p className='glossary__list-wrapper-title font-p-lrg--b spacing--xs'>Lorem ipsum</p>
                    <p className='glossary__list-wrapper-description'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                </div>
                <div className='glossary__list-wrapper spacing--s'>
                    <p className='glossary__list-wrapper-title font-p-lrg--b spacing--xs'>Lorem ipsum</p>
                    <p className='glossary__list-wrapper-description'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate</p>
                </div>
                <div className='glossary__list-wrapper spacing--s'>
                    <p className='glossary__list-wrapper-title font-p-lrg--b spacing--xs'>Lorem ipsum</p>
                    <p className='glossary__list-wrapper-description'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate</p>
                </div>
                <div className='glossary__list-wrapper spacing--s'>
                    <p className='glossary__list-wrapper-title font-p-lrg--b spacing--xs'>Lorem ipsum</p>
                    <p className='glossary__list-wrapper-description'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea.</p>
                </div>
                <div className='glossary__list-wrapper spacing--s'>
                    <p className='glossary__list-wrapper-title font-p-lrg--b spacing--xs'>Lorem ipsum</p>
                    <p className='glossary__list-wrapper-description'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
                </div>
                <div className='glossary__list-wrapper spacing--s'>
                    <p className='glossary__list-wrapper-title font-p-lrg--b spacing--xs'>Lorem ipsum</p>
                    <p className='glossary__list-wrapper-description'>PSed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit.</p>
                </div>
            </div>
            <div ref={ref=> listRef.current[1] = ref} className='glossary__list' data-isloaded='true'>
                <div className='glossary__list-wrapper spacing--s'>
                    <p className='glossary__list-wrapper-title font-p-lrg--b spacing--xs'>Lorem ipsum</p>
                    <p className='glossary__list-wrapper-description'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                </div>
                <div className='glossary__list-wrapper spacing--s'>
                    <p className='glossary__list-wrapper-title font-p-lrg--b spacing--xs'>Lorem ipsum</p>
                    <p className='glossary__list-wrapper-description'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate</p>
                </div>
                <div className='glossary__list-wrapper spacing--s'>
                    <p className='glossary__list-wrapper-title font-p-lrg--b spacing--xs'>Lorem ipsum</p>
                    <p className='glossary__list-wrapper-description'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate</p>
                </div>
                <div className='glossary__list-wrapper spacing--s'>
                    <p className='glossary__list-wrapper-title font-p-lrg--b spacing--xs'>Lorem ipsum</p>
                    <p className='glossary__list-wrapper-description'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea.</p>
                </div>
                <div className='glossary__list-wrapper spacing--s'>
                    <p className='glossary__list-wrapper-title font-p-lrg--b spacing--xs'>Lorem ipsum</p>
                    <p className='glossary__list-wrapper-description'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
                </div>
                <div className='glossary__list-wrapper spacing--s'>
                    <p className='glossary__list-wrapper-title font-p-lrg--b spacing--xs'>Lorem ipsum</p>
                    <p className='glossary__list-wrapper-description'>PSed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit.</p>
                </div>
            </div>
            <div ref={ref=> listRef.current[2] = ref} className='glossary__list' data-isloaded='true'>
                <div className='glossary__list-wrapper spacing--s'>
                    <p className='glossary__list-wrapper-title font-p-lrg--b spacing--xs'>Lorem ipsum</p>
                    <p className='glossary__list-wrapper-description'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                </div>
                <div className='glossary__list-wrapper spacing--s'>
                    <p className='glossary__list-wrapper-title font-p-lrg--b spacing--xs'>Lorem ipsum</p>
                    <p className='glossary__list-wrapper-description'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate</p>
                </div>
                <div className='glossary__list-wrapper spacing--s'>
                    <p className='glossary__list-wrapper-title font-p-lrg--b spacing--xs'>Lorem ipsum</p>
                    <p className='glossary__list-wrapper-description'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate</p>
                </div>
                <div className='glossary__list-wrapper spacing--s'>
                    <p className='glossary__list-wrapper-title font-p-lrg--b spacing--xs'>Lorem ipsum</p>
                    <p className='glossary__list-wrapper-description'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea.</p>
                </div>
                <div className='glossary__list-wrapper spacing--s'>
                    <p className='glossary__list-wrapper-title font-p-lrg--b spacing--xs'>Lorem ipsum</p>
                    <p className='glossary__list-wrapper-description'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
                </div>
                <div className='glossary__list-wrapper spacing--s'>
                    <p className='glossary__list-wrapper-title font-p-lrg--b spacing--xs'>Lorem ipsum</p>
                    <p className='glossary__list-wrapper-description'>PSed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit.</p>
                </div>
            </div>
            {maxPagination > loadedParts+1 && <div className='glossary__pagination flex-center padding-top--md spacing--s'>
                <button className='font-button color-white flex-center-vertical' onClick={() => setLoadedParts(prevState => prevState + 1)}>Show more</button>
            </div>}
            <p className='glossary__footnote padding-top--xxxl spacing--xxxl'>*Sklep internetowy. As of March 31, 2023.</p>
            <div className='glossary__accordion' data-isopen={isAccordionOpen}>
                    <div className='flex-between'>
                        <p className='font-p--b flex-between flex-center-vertical'>Important information</p>
                        <button className='flex-center' onClick={()=>setIsAccordionOpen(prev=>!prev)}></button>
                    </div>
                    <div className='glossary__accordion-wrapper padding-left--s padding-right--s'>
                        <div>
                            <p className='font-caveats'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                            <p className='font-caveats'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                            <p className='font-button-small'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.</p>
                            <p className='font-button-small'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                            <p className='font-caveats'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore <a href='/'>magna</a> aliqua.</p>
                            <p className='font-caveats'><strong>Lorem ipsum dolor sit amet</strong>, consectetur adipiscing elit</p>
                        </div>
                    </div>
                </div>
        </section>
    )
}