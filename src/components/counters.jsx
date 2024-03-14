import React from 'react'
import Counter from './counter';


const Counters = ({counters, onReset, onDecrement, onDelete, onIncrement}) => {
    return (
        <div>
            <button onClick = { onReset} className="btn btn-danger btn-sm m-2">Reset</button>
            {counters.map(counter => (
            <Counter 
                key={counter.id} 
                DoDelete={ onDelete} 
                DoIncrement={onIncrement} 
                DoDecrement={onDecrement} 
                counter={counter}>
                    <h4>Counter #{counter.id}</h4>
            </Counter>
            ))}
        </div>
        );
};
 
export default Counters;
