import About from './components/About';
import DisplayRoom from './components/DisplayRoom';
import Features from './components/Features';
import Header from './components/Header';
import Hero from './components/Hero';
import ListSponsor from './components/ListSponsor';

function App() {
  return (
    <>
      <Header />

      <div className='bg-neutral-800'>
        <div className='container mx-auto w-[96%]'>
          <Hero />
        </div>
      </div>
      <ListSponsor />
      <div className='bg-aboutBg'>
        <div className='container mx-auto w-[96%]'>
          <About />
        </div>
      </div>
      <div className='container mx-auto w-[96%]'>
        <DisplayRoom />
      </div>
      <div className='bg-neutral-800'>
        <div className='container mx-auto w-[96%]'>
          <Features />
        </div>
      </div>
    </>
  );
}

export default App;
