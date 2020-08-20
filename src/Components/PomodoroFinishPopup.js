import React from "react"


class PomodoroFinishPopup extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        }

        }
    render() {
        return (
        <div className = "popup">
        <button className = "popup_button">X</button>
        <h1 className = "popup_title">Gratulacje! Zasłuzyłeś na przerwę!</h1>
        </div>
        )
    }

    }


export default PomodoroFinishPopup;