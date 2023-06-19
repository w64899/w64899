import React from "react";
import './style.scss'
import Banner from "./Sections/Banner/Banner";
import Carousel from "./Sections/Carousel/Carousel";
import Magazine from "../../components/Magazine/Magazine";
import Footnotes from "./Sections/Footnotes/Footnotes";
import NavigationBoxes from "./Sections/NavigationBoxes/NavigationBoxes";

export default ()=>{
    return(<main>
        <Banner/>
        <NavigationBoxes/>
        <section className='magazine-wrapper'>
            <div className='flex-center'>
            <Magazine
                img="commingsoon.jpg"
                title="Comming soon"
                description="Lorem ipsum dolor sit amet."
                time="July 18, 2023 15:01"
                link="a"
            />
            <Magazine
                img="magazine.jpg"
                title="New ideas"
                description="Lorem ipsum dolor sit amet."
                time="July 10, 2023 15:23"
                link="a"
            />
            <Magazine
                img="commingsoon.jpg"
                title="Comming soon"
                description="Lorem ipsum dolor sit amet."
                time="July 30, 2023 22:53"
                link="a"
            />
            </div>
        </section>
        <Carousel/>
        <Footnotes/>
    </main>)
}