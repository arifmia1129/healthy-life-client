import { Provider } from 'react-redux';
import './App.css';
import store from './redux/store/store';
import Index from './routes';

function App() {
  return (
    <div>
      <Provider store={store}>
        <Index />
      </Provider>
    </div>
  );
}

export default App;
