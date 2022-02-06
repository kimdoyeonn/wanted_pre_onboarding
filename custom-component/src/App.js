import './App.css';
import AutoComplete from './component/AutoComplete';
import ClickToEdit from './component/ClickToEdit';
import Modal from './component/Modal';
import Tab from './component/Tab';
import Tag from './component/Tag';
import Toggle from './component/Toggle';

const autoCompleteData = [
  'antique',
  'refurbished',
  'vintage',
  'rustic',
  '중고A급',
  '중고B급',
];

const tabData = [
  { name: 'Tab1', details: 'Tab menu ONE' },
  { name: 'Tab2', details: 'Tab menu TWO' },
  { name: 'Tab3', details: 'Tab menu THREE' },
];

function App() {
  return (
    <div className='App'>
      <section className='container'>
        <div className='title'>Toggle</div>
        <Toggle checked disable />
      </section>
      <section className='container'>
        <div className='title'>Modal</div>
        <Modal openerMessage='Open Modal' modalMessage='HELLO CODESTATES!' />
      </section>
      <section className='container'>
        <div className='title'>Tab</div>
        <Tab contents={tabData} />
      </section>
      <section className='container'>
        <div className='title'>Tag</div>
        <Tag />
      </section>
      <section className='container'>
        <div className='title'>AutoComplete</div>
        <AutoComplete data={autoCompleteData} />
      </section>
      <section className='container'>
        <div className='title'>ClickToEdit</div>
        <ClickToEdit />
      </section>
    </div>
  );
}

export default App;
