import { skills } from '../assets/assets';

const Skils = () => {
  return (
    <div data-aos="fade-left" data-aos-duration="2500" className="bg-neutral-900 h-full border-x-4 border-purple-400 rounded-lg p-5">
      <div className="flex flex-wrap justify-evenly mt-5 items-center h-full gap-3 ">
        {skills.map((item, index) => (
          <div key={index} className="p-1 sm:p-3 tooltip cursor-pointer" data-tip={item.name}>
            <img src={item.img} alt="" className="w-12 sm:w-20 " />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skils;
