
import './App.css';
import Dashboard from './Components/MainSection/Dashboard';
import Reducers from './reducers';
import thunk from 'redux-thunk';
import { applyMiddleware, createStore } from 'redux';
import { Provider } from 'react-redux';

const store = createStore(Reducers, applyMiddleware(thunk));

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Dashboard />
      </Provider>

    </div>
  );
}

export default App;
