import './App.css';
import Inventory from './component/Inventory/Inventory';

function App() {
  return (
    <div className='App'>
      <div className="w-3/5">
        <Inventory />
      </div>
      <div className="w-2/5">
        Something
      </div>
    </div>
  );
}

export default App;
