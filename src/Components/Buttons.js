import react from "react";


class Buttons extends React.Component {
    render () {
        return (
            <div class = "buttons">
                <button class = "buttons__start">START</button>
                <button class = "buttons__stop">STOP</button>
                <button class = "buttons__reset">RESET</button>
            </div>
        )
    }
}

export default Buttons