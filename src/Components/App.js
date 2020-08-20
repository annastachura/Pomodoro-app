import React from "react";
import Header from "../Components/Header";
import Buttons from "../Components/Buttons";
import PomodoroTime from "../Components/PomodoroTime";

const defaultPomodoroTimeInSeconds = 10

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isRunning: false,
            remainingTimeInSeconds: defaultPomodoroTimeInSeconds

        }
    }
intervalId = null

    onStart = () => {
        this.setState({
            isRunning: true,
            remainingTimeInSeconds: defaultPomodoroTimeInSeconds
        })

        this.intervalId = setInterval(() => {
            this.setState((prevState) => {
                return {
                    remainingTimeInSeconds: prevState.remainingTimeInSeconds - 1
                }
            }) 
             const {remainingTimeInSeconds} = this.state
             if (remainingTimeInSeconds <= 0) {
                 this.onStopped()
                 console.log ("Gratulacje, zasłuzyłeś na przerwę");
             }
        }, 1000)
    }

    onStopped = () => {
        this.setState({
            isRunning: false

        })
        clearInterval(this.intervalId)
    }

    onReset = () => {
        this.onStopped()
        this.setState({
            remainingTimeInSeconds:defaultPomodoroTimeInSeconds

        })
    }
    
    


    render() {
        const { isRunning, remainingTimeInSeconds,} = this.state;
        return (
            <div>
                <Header></Header>
                <PomodoroTime remainingTimeInSeconds={remainingTimeInSeconds}></PomodoroTime>
                <Buttons isRunning={isRunning} onStart={this.onStart} onStopped={this.onStopped} onReset = {this.onReset}></Buttons>
            </div>
        )
    }
}

export default App;