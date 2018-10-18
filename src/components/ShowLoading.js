import React from "react";
 
import Posed from "react-pose";

const Circle = Posed.div(
    {
        hidden: { opacity: 0},
        visible: { opacity: 1}
    }
)

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
            <div>
                {isVisible && isFlashOn && <h1>Loading...</h1>}
            </div>
        );
    }

}