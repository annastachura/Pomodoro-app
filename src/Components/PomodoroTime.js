import React from "react";


class PomodoroTime extends React.Component {
    render () {
    const {remainingTimeInSeconds} = this.props;

const pomodoroInMinutes = Math.floor(remainingTimeInSeconds /60);
const pomodoroInSeconds = Math.floor(remainingTimeInSeconds % 60);
const secondsPad = pomodoroInSeconds.toString().padStart(2, "0");
    return (
        <h1 class = "pomodoro__time">{pomodoroInMinutes  + ":" + secondsPad}</h1>
    )
}
}

export default PomodoroTime;