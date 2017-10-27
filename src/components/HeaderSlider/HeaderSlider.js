import React, {Component} from "react";
import "./HeaderSlider.css";

export default class HeaderSlider extends Component {
    render () {
        return (
            <div className="HeaderSlider">
                 <SlideElement id={0} />
                 <SlideElement id={1} />
                 <SlideElement id={2} />    
            </div>
        )
    }
}