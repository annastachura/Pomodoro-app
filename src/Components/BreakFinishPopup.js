import React from "react"



class BreakFinishPopup extends React.Component {
    render () {
        const {onNewPomodoroStart} = this.props
        return(
            <div className = "BreakFinish">
                <h1 className = "BreakFinish__title"></h1>
                <button onClick = {onNewPomodoroStart} className = "BreakFinish__button">Rozpocznij kolejne pomodoro</button>
            </div>

        )
    }
}


export default BreakFinishPopup;