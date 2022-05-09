import React from "react";
import Header from "../header/Header";
import CarouselMain from "./carousel/Carousel";
import './home.css';

class Home extends React.Component{
    render() {
        return (
            <div className="novel-home">
                <Header/>
                <CarouselMain className={"home-carousel"}/>
            </div>
        )
    }
}
export default Home;