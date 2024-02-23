// Import necessary dependencies
import React from 'react';
import { connect } from 'react-redux'; // Import connect from 'react-redux'
import { increment, decrement } from './action'; // Correct the import path for actions
import { useDispatch } from 'react-redux';

// Define the component
const CounterComponent = ({ count, test }) => {
  const dispatch = useDispatch();
  const handleIncrement = () => {
    dispatch(increment());
  };
  const handleDecrement = () => {
    dispatch(decrement());
  }
  return (
    <div>
      <h2>Count: {count}</h2>
      <button onClick={handleIncrement}>Increment</button>
      <br></br>
      <h2>Test: {test}</h2>
      <button onClick={handleDecrement}>Decrement</button>
    </div>
  );
};

// Define mapStateToProps function
const mapStateToProps = (state) => ({
  count: state.counter.count, // Assuming you have a 'counter' reducer in your store
  test: state.counter.test
});

// Connect the component to the Redux store
export default connect(mapStateToProps)(CounterComponent);
