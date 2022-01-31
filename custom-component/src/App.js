import './App.css';
import AutoComplete from './component/AutoComplete';
import ClickToEdit from './component/ClickToEdit';
import Modal from './component/Modal';
import Toggle from './component/Toggle';

function App() {
  return (
    <div className='App'>
      <div className='container'>
        <div className='title'>Toggle</div>
        <Toggle />
      </div>
      <div className='container'>
        <div className='title'>AutoComplete</div>
        <AutoComplete />
      </div>
      <div className='container'>
        <div className='title'>ClickToEdit</div>
        <ClickToEdit />
      </div>
      <div className='container'>
        <div className='title'>Modal</div>
        <Modal />
      </div>
    </div>
  );
}

export default App;

// const Container = styled.div`
//   width: 100%;
//   height: 20rem;
//   border-radius: 1rem;
//   border: 3px solid #ddd;
//   margin: 1rem;
// `;

// const Title = styled.div`
//   font-size: 1.5rem;
//   font-weight: 700;
//   padding-left: 1rem;
//   padding-top: 0.3rem;
// `;
