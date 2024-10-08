import WorkExp from './components/WorkExp';
import PersonalData from './components/PersonalData';
import Skils from './components/Skils';
import Contact from './components/Contact';
import Certificate from './components/Certificate';
// import 'aos/dist/aos.css';
// import { useEffect } from 'react';
// import AOS from 'aos';

function App() {
  // useEffect(() => {
  //   AOS.init();
  // }, []);

  return (
    <main className="bg-black flex flex-col justify-between">
      <div className="flex flex-col overflow-x-hidden lg:flex-row p-5 text-white gap-3 xl:h-screen">
        <PersonalData />
        <div className="flex flex-col gap-3 lg:w-[60%]">
          <Contact />
          <Skils />
        </div>
      </div>
      <div className="flex flex-col p-5 text-white gap-3 bg-zinc-950 overflow-x-hidden">
        <WorkExp />
        <Certificate />
      </div>
    </main>
  );
}

export default App;
