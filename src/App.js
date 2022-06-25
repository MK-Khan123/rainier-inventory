import './App.css';
import { Provider } from 'react-redux';
import configureAppStore from './store/configureAppStore';
import Dashboard from './component/Dashboard/Dashboard';
import CartProvider from './contexts/CartProvider';

const store = configureAppStore();

function App() {
  return (
    <div className='App'>
      <Provider store={store}>
        <CartProvider>
          <Dashboard />
        </CartProvider>
      </Provider>
    </div>
  );
}

export default App;
