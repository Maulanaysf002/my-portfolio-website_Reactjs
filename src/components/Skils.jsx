import { img } from '../assets/assets';

const Skils = () => {
  return (
    <div data-aos="fade-left" data-aos-duration="2500" className="bg-neutral-900 h-full border-x-4 border-purple-400 rounded-lg p-5">
      <div className="flex flex-wrap justify-evenly mt-5 items-center h-full gap-3 ">
        <img src={img.laravel} alt="" className="w-12 sm:w-20 " />
        <img src={img.mysql} alt="" className="w-12 sm:w-20 " />
        <img src={img.bootstrap} alt="" className="w-12 sm:w-20 " />
        <img src={img.react} alt="" className="w-12 sm:w-20 " />
        <img src={img.expressjs} alt="" className="w-12 sm:w-20 " />
        <img src={img.tailwindcss} alt="" className="w-12 sm:w-20 " />
      </div>
    </div>
  );
};

export default Skils;
