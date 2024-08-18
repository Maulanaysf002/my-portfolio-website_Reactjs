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
    <main className="bg-black flex flex-col gap-1">
      <div className="flex flex-col lg:flex-row p-5 text-white gap-3 h-[50%]">
        <PersonalData />
        <div className="flex flex-col gap-3 lg:w-[100%]">
          <Contact />
          <Skils />
        </div>
      </div>
      <div className="flex p-5 text-white gap-3 h-[100vh]">
        <Information />
      </div>
    </main>
  );
}

export default App;
