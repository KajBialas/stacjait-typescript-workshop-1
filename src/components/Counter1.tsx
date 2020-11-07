import React, { Component } from 'react';
import CounterButton from './Button';

type Counter1State = {
    counter: number;
};

type Counter1Props = {
    title: string;
}

export enum ButtonType {
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
                    <CounterButton text={ButtonType.INCREMENT} handleClick={this.handleIncrement} />
                    <CounterButton text={ButtonType.DECREMENT} handleClick={this.handleDecrement} />
                    <CounterButton text={ButtonType.RESET} handleClick={this.handleReset} />
                </div>
            </div>
        )
    }
}

export default Counter1;