import React, { Component } from 'react';

type Counter1State = {
    counter: number;
};

type Counter1Props = {
    title: string;
}

enum Button {
    INCREMENT = '+',
    DECREMENT = '-',
    RESET = 'RESET',
}

class Counter1 extends Component<Counter1Props, Counter1State> {
    state: Counter1State = {
        counter: 0,
    }

    handleIncrement = (): void => this.setState({counter: this.state.counter + 1});
    handleDecrement = (): void => this.setState({counter: this.state.counter - 1});
    handleReset = (): void => this.setState({counter: 0});

    render() {
        return (
            <div>
                <header>
                    {this.props.title}
                </header>
                <div>
                    Counter: {this.state.counter}
                    <button onClick={this.handleIncrement}>{Button.INCREMENT}</button>
                    <button onClick={this.handleDecrement}>{Button.DECREMENT}</button>
                    <button onClick={this.handleReset}>{Button.RESET}</button>
                </div>
            </div>
        )
    }
}

export default Counter1;