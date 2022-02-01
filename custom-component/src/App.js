import './App.css';
import AutoComplete from './component/AutoComplete';
import ClickToEdit from './component/ClickToEdit';
import Modal from './component/Modal';
import Tab from './component/Tab';
import Toggle from './component/Toggle';

function App() {
  return (
    <div className='App'>
      <div className='container'>
        <div className='title'>Toggle</div>
        <Toggle />
      </div>
      <div className='container'>
        <div className='title'>Modal</div>
        <Modal />
      </div>
      <div className='container'>
        <div className='title'>Tab</div>
        <Tab />
      </div>
      <div className='container'>
        <div className='title'>AutoComplete</div>
        <AutoComplete />
      </div>
      <div className='container'>
        <div className='title'>ClickToEdit</div>
        <ClickToEdit />
      </div>
    </div>
  );
}

export default App;
