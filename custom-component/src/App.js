import './App.css';
import AutoComplete from './component/AutoComplete';
import ClickToEdit from './component/ClickToEdit';
import Modal from './component/Modal';
import Tab from './component/Tab';
import Tag from './component/Tag';
import Toggle from './component/Toggle';

function App() {
  return (
    <div className='App'>
      <section className='container'>
        <div className='title'>Toggle</div>
        <Toggle />
      </section>
      <section className='container'>
        <div className='title'>Modal</div>
        <Modal />
      </section>
      <section className='container'>
        <div className='title'>Tab</div>
        <Tab />
      </section>
      <section className='container'>
        <div className='title'>Tag</div>
        <Tag />
      </section>
      <section className='container'>
        <div className='title'>AutoComplete</div>
        <AutoComplete />
      </section>
      <section className='container'>
        <div className='title'>ClickToEdit</div>
        <ClickToEdit />
      </section>
    </div>
  );
}

export default App;
