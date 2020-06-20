import React, { Component } from 'react';
import '../css/WebpageSnap.css'

interface Prop {
    url: string
}

interface State {

}

class WebpageSnap extends Component<Prop, State> {

    render() {
        const apiURL: string = 'https://api.apiflash.com/v1/urltoimage?access_key=81b584f60fb2444db5beb297443320db&url=';
        const snapImgURL: string = apiURL + this.props.url;

        if (this.props.url != null && this.props.url.length > 0) {
            return <img src={snapImgURL} alt="" />
        } else {
            return null;
        }
    }
}

export default WebpageSnap;