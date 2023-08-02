import { Nav, Menu, List } from './components';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="">
      <Nav />
      <div className='flex justify-around container mx-auto '>
        <div className=''>
          <Menu />
        </div>
        <List />
        <div>
        <Menu />
        </div>

      </div>
    </div>
  );
}

export default App;
