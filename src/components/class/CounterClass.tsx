//Video: https://www.youtube.com/watch?v=JOhIMtMxjpU&list=PLC3y8-rFHvwi1AXijGTKM0BKtHzVC-LSK&index=17 
import { Component } from "react";

type CounterProps = {
    message: string
}

type CounterState = {
    count: number
}

// A class component that extends Component from react 
export class CounterClass extends Component<CounterProps, CounterState> {
    state = {
        count: 0
    }
    handleClick = () => {
        this.setState((prevState) => ({ count: prevState.count + 1 }))
    }
    render() {
        return (
            <div>
                <button onClick={this.handleClick}>Increment</button>
                {this.props.message} {this.state.count}
            </div>
        )
    }
}