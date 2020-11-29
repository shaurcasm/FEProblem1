import React, { Component } from 'react'
import './style.css'

export default class SelectionPanel extends Component {
    constructor(props) {
        super(props);

        this.state = {
            imageSrc: "../../../public/images/misc/al-falcone.png"
        }

        this.changeImage = this.changeImage.bing(this);
    }

    componentDidMount() {
        console.log("Selection Panel mounted");
    }

    changeImage(src) {
        var checkRE = /.png$/
        if(checkRE.test(src)) {
            this.setState({
                imageSrc: src
            })
        }
    }

    render() {
        var RE = /(?<=\/)\w+(?=\.png$)/;
        var src = this.state.imageSrc;
        var imageName = src.match(RE);

        return (
            <img src={this.state.imageSrc} className="selection-img" alt={imageName}></img>
            
        )
    }
}