
import './App.css';
import { Counter } from './Counter'
import { store } from './store'
import { Provider } from 'react-redux';
function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Counter />
      </div >
    </Provider>

  );
}

export default App;
