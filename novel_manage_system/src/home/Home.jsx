import React from "react";
import Header from "../header/Header";
import CarouselMain from "./carousel/Carousel";
import Introduction from "./introduction/introduction";
import Footer from "../footer/footer";
import './home.css';

class Home extends React.Component{
    render() {
        return (
            <div className="novel-home">
                <Header/>
                <CarouselMain className={"home-carousel"}/>
                <Introduction/>
                <Footer/>
            </div>
        )
    }
}
export default Home;