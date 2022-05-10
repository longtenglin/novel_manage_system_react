import { Carousel } from 'antd';
import React from "react";
import './carousel.css';
import './image/starry_sky_01.jpeg';

class CarouselMain extends React.Component{
    render() {
        return (
            <Carousel autoplay className={"carousel-items"}>
                <div className={"carousel-item"}>
                    {/*<img src={require("./image/starry_sky_01.jpeg")} alt={"星空1"}/>*/}
                    <div>1</div>
                </div>
                <div className={"carousel-item"}>
                    <div>2</div>
                </div>
                <div className={"carousel-item"}>
                    <div>3</div>
                </div>
                <div className={"carousel-item"}>
                    <div>4</div>
                </div>
            </Carousel>
        )
    }
}

export default CarouselMain