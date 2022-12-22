import About from './components/About';
import Benefit from './components/Benefit';
import Card from './components/Card';
import DisplayRoom from './components/DisplayRoom';
import Features from './components/Features';
import GettingMassage from './components/GettingMessage';
import Header from './components/Header';
import Hero from './components/Hero';
import ListSponsor from './components/ListSponsor';

function App() {
  return (
    <>
      <Header />

      <div className='bg-neutral-800'>
        <div className='container mx-auto w-11/12'>
          <Hero />
        </div>
      </div>
      <ListSponsor />
      <div className='bg-aboutBg'>
        <div className='container mx-auto w-11/12'>
          <About />
        </div>
      </div>
      <div className='container mx-auto w-11/12'>
        <DisplayRoom />
      </div>
      <div className='bg-neutral-800'>
        <div className='container mx-auto w-11/12'>
          <Features />
          <Benefit />
        </div>
      </div>
      <div className='container mx-auto w-11/12'>
        <GettingMassage />
        <Card />
      </div>
    </>
  );
}

export default App;
