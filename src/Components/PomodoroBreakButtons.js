import React from "react";
import classNames from "classnames";



class PomodoroBreakButtons extends React.Component {
    render () {
        const {onBreakStart, onBreakStop, isBreak} = this.props
        const className = classNames("breakButtons", {"breakButtons--visible": isBreak})
        return (
            <div className = {className}>
                <button onClick = {onBreakStart} className = "breakButtons__start">START</button>
                <button onClick = {onBreakStop} className = "breakButtons__stop">STOP</button>
            </div>
        )
    }
}


export default PomodoroBreakButtons;