import React from "react";



class PomodoroBreakButtons extends React.Component {
    render () {
        const {onBreakStart, onBreakStop} = this.props
        return (
            <div className = "breakButtons">
                <button onClick = {onBreakStart} className = "breakButtons__start"></button>
                <button onClick = {onBreakStop} className = "breakButtons__stop"></button>
            </div>
        )
    }
}


export default PomodoroBreakButtons;