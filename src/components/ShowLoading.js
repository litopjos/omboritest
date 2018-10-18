/* -----------------------------------------------
FILE: ShowLoading.js

DESCRIPTION:


(c) 2018 Joselito Pe 
-------------------------------------------------- */
import React from "react";

import './ShowLoading.css'

export class ShowLoading extends React.Component {
    constructor (props) {
        super(props);

        this.state = {
            isVisible: true,
            isFlashOn : true
        }
    }

    componentDidMount() {
        setInterval(
            () => {
                this.setState({ isFlashOn: !this.state.isFlashOn });
            }, 
            500
        );

        setTimeout (
            () => {
                this.setState({isVisible:false })
                this.props.timeOutCallback();
            },
            this.props.timeInterval
        )
    }

    render() {
        const isVisible = this.state.isVisible;
        const isFlashOn = this.state.isFlashOn;

        return (
            <div className="container_loading">
            
                {isVisible && <span class="pulse"></span>}

            </div>
        );
    }

}

//{isVisible && isFlashOn && <h1>Loading...</h1>}