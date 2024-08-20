import { img } from '../assets/assets';

const PersonalData = () => {
  return (
    <div data-aos="fade-up" data-aos-duration="1000" className="sm:w-[40%] w-full h-full bg-neutral-900 rounded-lg p-10 cursor-pointer border-blue-400 hover:border-2 hover:ease-in hover:duration-300">
      <div className="flex flex-col items-center justify-center text-center">
        <img src={img.profile_img} alt="" className="w-5/12 rounded-full" />
        <p className="mt-5">Hi, I`am</p>
        <h1 className=" text-2xl sm:text-4xl font-bold">MAULANA YUSUF</h1>
        <h1 className=" font-bold text-blue-400">FULLSTACK DEVELOPER.</h1>
        <div className="mt-7 flex flex-col items-center">
          <p className="font-bold">A bit about me</p>
          <p className="text-center font-light leading-5">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio quasi labore rem sunt laudantium? Quam dicta, labore nam reiciendis natus corporis, dignissimos et, similique neque quibusdam aliquid sequi repellat odio a pariatur
            nisi obcaecati iure nulla omnis adipisci qui. Hic dolorem minus aliquam veritatis, alias dolores aspernatur ratione amet mollitia!
          </p>
        </div>
      </div>
    </div>
  );
};

export default PersonalData;
