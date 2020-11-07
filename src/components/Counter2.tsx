import React, { useReducer } from 'react';
import {ButtonType} from "./Counter1";
import Button from "./Button";

type Counter2Props = {
    title: string;
}

type InitialState = {
    counter: number;
}

enum CounterActionType {
    INCREMENT = 'INCREMENT',
    DECREMENT = 'DECREMENT',
    RESET = 'RESET',
}

type CounterAction = {
    type: CounterActionType;
}

const initialState: InitialState = {
    counter: 10,
};

function counterReducer(state: InitialState, action: CounterAction):InitialState {
    switch (action.type) {
        case CounterActionType.INCREMENT:
            return {counter: state.counter + 1};
        case CounterActionType.DECREMENT:
            return {counter: state.counter - 1};
        case CounterActionType.RESET:
            return {counter: 0};
        default:
            return state;
    }
}

const Counter2: React.FC<Counter2Props> = ({title}) => {
    const [state, dispatch] = useReducer(counterReducer, initialState);

    return (
        <div>
            <h2>{title}</h2>
            <div>
                Counter: {state.counter}
                <Button
                    text={ButtonType.INCREMENT}
                    handleClick={() => dispatch({type: CounterActionType.INCREMENT})}
                />
            </div>
        </div>
    )
}

export default Counter2;