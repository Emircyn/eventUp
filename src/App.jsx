import Button from './components/Button';
import Header from './components/Header';
import Hero from './components/Hero';
import ListSponsor from './components/ListSponsor';

function App() {
  return (
    <>
      <div className='bg-neutral-800'>
        <div className='container mx-auto w-[96%]'>
          <Header />
          <Hero />
        </div>
      </div>
      <ListSponsor />
    </>
  );
}

export default App;
