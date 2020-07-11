import react from "react";
import Header from "../Components/Header";
import Buttons from "../Components/Buttons";
import PomodoroTime from "../Components/PomodoroTime";



class App extends React.Component {
    constructor(props) {
        super(props);
    this.state  = {

    }
}
    render () {
        return (
            <div>
            <Header></Header>
            <PomodoroTime></PomodoroTime>
            <Buttons></Buttons>
            </div>

        )
    }
}