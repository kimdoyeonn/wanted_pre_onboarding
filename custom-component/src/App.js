import './App.css';
import AutoComplete from './component/AutoComplete';
import ClickToEdit from './component/ClickToEdit';
import Modal from './component/Modal';
import Toggle from './component/Toggle';

function App() {
  return (
    <div className='App'>
      <AutoComplete />
      <ClickToEdit />
      <Modal />
      <Toggle />
    </div>
  );
}

export default App;
