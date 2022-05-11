import React from "react";
import CarouselMain from "./carousel/Carousel";
import Introduction from "./introduction/introduction";
import './home.css';

class Home extends React.Component {
    render() {
        return (
            <div className="novel-home">
                <CarouselMain />
                <Introduction />
            </div>
        )
    }
}

export default Home;