import logo from './logo.svg';
import './App.css';
import store from './store';
import { Provider } from 'react-redux'; 
import CounterComponent from './CounterComponent';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <CounterComponent/>
      </div>
    </Provider>
  );
}

export default App;
