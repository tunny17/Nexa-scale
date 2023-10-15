import './App.css';
import { Body, Hero, Navbar } from './components';

function App() {
  return (
    <div>
      <div className='bg-[#59A96A]'>
        <div className='py-7 bg-[#FFB930] rounded-b-[85px]'>
          <Navbar />
          <Hero />
        </div>
        <Body />
      </div>
    </div>
  );
}

export default App;
