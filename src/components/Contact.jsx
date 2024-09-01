import { constacs } from '../assets/assets';

const Contact = () => {
  return (
    <div data-aos="fade-left" data-aos-duration="2000" className="bg-neutral-900 rounded-lg p-5 00 h-full border-[2px] border-green-500">
      <h1 className="sm:text-2xl text-center font-bold font-playwrite">how to reach me</h1>
      <div className="mt-7 flex flex-wrap gap-3 justify-evenly">
        {constacs.map((item, index) => (
          <div key={index} className="flex flex-col items-center bg-green-400 p-5 rounded-md w-32">
            <img className="w-20" src={item.img} alt="" />
            <a href="" className="mt-4 text-black px-3 py-0.5 bg-green-500 font-bold">
              {item.name}
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Contact;
