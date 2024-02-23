// Import necessary dependencies
import React from 'react';
import { connect } from 'react-redux'; // Import connect from 'react-redux'
import { increment_action, decrement_action } from './action'; // Correct the import path for actions
import { useDispatch } from 'react-redux';

// Define the component
const CounterComponent = ({ increment, decrement }) => {
  const dispatch = useDispatch();
  const handleIncrement = () => {
    dispatch(increment_action());
  };
  const handleDecrement = () => {
    dispatch(decrement_action());
  }
  return (
    <div>
      <h2>Increment: {increment}</h2>
      <button onClick={handleIncrement}>Increment</button>
      <br></br>
      <h2>Decrement: {decrement}</h2>
      <button onClick={handleDecrement}>Decrement</button>
    </div>
  );
};

// Define mapStateToProps function
const mapStateToProps = (state) => ({
  increment: state.counter.count, // Assuming you have a 'counter' reducer in your store
  decrement: state.counter.test
});

// Connect the component to the Redux store
export default connect(mapStateToProps)(CounterComponent);
