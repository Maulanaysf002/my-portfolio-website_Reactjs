import { img } from '../assets/assets';

const Contact = () => {
  return (
    <div data-aos="fade-left" data-aos-duration="2000" className="bg-neutral-900 rounded-lg p-5 border-x-4 border-green-400 sm:h-[50%]">
      <h1 className="sm:text-2xl text-center font-bold">HOW TO REACH ME</h1>
      <div className="mt-7 flex flex-wrap gap-3 justify-evenly">
        <div className="flex flex-col items-center bg-green-400 p-5 rounded-md w-32">
          <img className="w-20" src={img.github} alt="" />
          <a href="" className="mt-4 text-black px-3 py-0.5 bg-green-500 font-bold">
            Github
          </a>
        </div>
        <div className="flex flex-col items-center bg-green-400 p-5 rounded-md w-32">
          <img className="w-20" src={img.email} alt="" />
          <a href="" className="mt-4 text-black px-3 py-0.5 bg-green-500 font-bold">
            Email
          </a>
        </div>
        <div className="flex flex-col items-center bg-green-400 p-5 rounded-md w-32">
          <img className="w-20" src={img.whatsapp} alt="" />
          <a href="" className="mt-4 text-black px-3 py-0.5 bg-green-500 font-bold">
            WhatsApp
          </a>
        </div>
        <div className="flex flex-col items-center bg-green-400 p-5 rounded-md w-32">
          <img className="w-20" src={img.instagram} alt="" />
          <a href="" className="mt-4 text-black px-3 py-0.5 bg-green-500 font-bold">
            Instagram
          </a>
        </div>
        <div className="flex flex-col items-center bg-green-400 p-5 rounded-md w-32">
          <img className="w-20" src={img.linkedin} alt="" />
          <a href="" className="mt-4 text-black px-3 py-0.5 bg-green-500 font-bold">
            Linkedin
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
