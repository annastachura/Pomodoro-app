import React from "react";
import Header from "../Components/Header";
import Buttons from "../Components/Buttons";
import PomodoroTime from "../Components/PomodoroTime";
import PomodoroFinishPopup from "./PomodoroFinishPopup";

const defaultPomodoroTimeInSeconds = 10

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isRunning: false,
            remainingTimeInSeconds: defaultPomodoroTimeInSeconds,
            isFinished: false,
            isBreak: false,


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
                 this.setState ({
                     isFinished: true
                 })
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
            remainingTimeInSeconds:defaultPomodoroTimeInSeconds,
            isFinished:false
        

        })
    }
    
    onBreakConfirmed = () => {
        this.setState ({
            isRunning: false,
            remainingTimeInSeconds: 5*60,
            isFinished: false
        })
    }
    
    


    render() {
        const { isRunning, remainingTimeInSeconds,isFinished, isBreak} = this.state;
        return (
            <div>
                <Header></Header>
                <PomodoroTime remainingTimeInSeconds={remainingTimeInSeconds}></PomodoroTime>
                <Buttons isRunning={isRunning} onStart={this.onStart} onStopped={this.onStopped} onReset = {this.onReset}></Buttons>
                <PomodoroFinishPopup isFinished = {isFinished} onBreakConfirmed = {this.onBreakConfirmed}></PomodoroFinishPopup>
            </div>
        )
    }
}

export default App;