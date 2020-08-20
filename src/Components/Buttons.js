import React from "react";


class Buttons extends React.Component {




    render () {
        const {isRunning, onStart, onStopped, onReset} = this.props;
        return (
            <div className = "buttons">
                <button disabled = {isRunning} onClick = {onStart} className = "buttons__start">START</button>
                <button disabled = {!isRunning}onClick = {onStopped}className = "buttons__stop">STOP</button>
                <button onClick = {onReset}className = "buttons__reset">RESET</button>
            </div>
        )
    }
}

export default Buttons