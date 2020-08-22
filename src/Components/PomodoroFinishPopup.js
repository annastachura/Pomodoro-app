import React from "react"
import classNames from 'classnames';



class PomodoroFinishPopup extends React.Component {
    render() {
        const {isFinished, onBreakConfirmed} = this.props
        const className = classNames("popup", {"popup--visible": isFinished})
        return (
        <div className = {className}>
        <h1 className = "popup_title">Gratulacje! Zasłuzyłeś na przerwę!</h1>
        <button onClick = {onBreakConfirmed} class = "popup__breakButton">Rozpocznij przerwę</button>
        <button class = "popup__continueButton">Pracuj dalej</button>
        </div>
        )
    }

    }


export default PomodoroFinishPopup;