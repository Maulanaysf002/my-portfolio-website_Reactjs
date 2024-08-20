import Information from './components/Information';
import PersonalData from './components/PersonalData';
import Skils from './components/Skils';
import Contact from './components/Contact';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import AOS from 'aos';

function App() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <main className="bg-black flex flex-col justify-between">
      <div className="flex flex-col lg:flex-row p-5 text-white gap-3 h-auto w-full">
        <PersonalData />
        <div className="flex flex-col gap-3 sm:w-[60%] w-full">
          <Contact />
          <Skils />
        </div>
      </div>
      <div className="flex p-5 text-white gap-3 h-screen">
        <Information />
      </div>
    </main>
  );
}

export default App;
