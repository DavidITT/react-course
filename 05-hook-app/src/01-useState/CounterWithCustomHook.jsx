import {useCounter} from "../hooks/useCounter.js";

export const CounterWithCustomHook = () => {

    const { counter, increment, decrement, reset } = useCounter();

    return (
        <>
            <h1>CounterWithCustomHook: {counter}</h1>
            <hr/>
            <div className={'.d-flex flex-row '}>
                <button className={'btn btn-sm btn-warning mr-2'} onClick={ () => decrement(2)}>-1</button>
                <button className={'btn btn-sm btn-dark mr-2'} onClick={reset}>Reset</button>
                <button className={'btn btn-sm btn-success'} onClick={ () => increment(2)}>+1</button>
            </div>
        </>
    )
}