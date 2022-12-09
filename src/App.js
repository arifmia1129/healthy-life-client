import { Provider } from 'react-redux';
import './App.css';
import store from './redux/store/store';
import Index from './routes';

function App() {
  return (
    <div className='max-w-7xl mx-auto px-2 md:px-0'>
      <Provider store={store}>
        <Index />
      </Provider>
    </div>
  );
}

export default App;
