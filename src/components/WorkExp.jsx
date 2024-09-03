import ExpData from '../assets/Expdata.json';

const WorkExp = () => {
  return (
    <div data-aos="fade-left" data-aos-duration="2000" className="w-full bg-neutral-900 rounded-lg py-5 sm:p-10 mt-5">
      <h1 className="sm:text-2xl font-bold font-playwrite text-center mb-3">my work experience</h1>
      <div className="flex flex-col gap-1 justify-evenly md:flex-row md:flex-wrap lg:flex-row lg:flex-wrap">
        {/* my work section */}

        {ExpData.map((item, index) => (
          <div key={index} className="bg-neutral-800 lg:mt-10 mt-5 p-5 w-full md:w-[49%] lg:w-[49%]">
            <div className="flex items-center justify-center gap-3 mb-10">
              <img src={item.img} alt="" className="w-8" />
              <h2 className="text-xl font-bold">{item.institution}</h2>
            </div>
            {item.experience.map((exp, index) => (
              <div key={index} className={`mb-5 border-l-2 ${item['list-color'] || 'bg-white'} ps-3`}>
                <p className="font-extralight font-mono">{exp.date}</p>
                <h3 className="mb-1 font-bold leading-5">{exp['project-name']}</h3>
                <ul className="list-disc list-outside leading-4 font-mono font-thin pl-5">
                  {exp.achievement.map((ach, index) => (
                    <li key={index}>{ach}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        ))}

        {/* <div className="bg-neutral-800 lg:mt-10 mt-5 p-5 w-full md:w-[49%] lg:w-4/12">
          <div className="flex items-center justify-center gap-3 mb-10">
            <img src="src\assets\digiyok-logo.png" alt="" className="w-8" />
            <h2 className="text-xl font-bold">Digiyok</h2>
          </div>
          <div className="mb-5 border-l-2 border-green-400 ps-3 ">
            <p className="font-extralight font-mono">Jul 2024</p>
            <h3 className="mb-1 font-bold leading-5">Membuat Sistem Pemuda Tangsel.</h3>
            <ul className="list-disc list-outside leading-4 font-mono font-thin pl-5">
              <li>Merancang Database Modul.</li>
            </ul>
          </div>
          <div className="mb-5 border-l-2 border-green-400 ps-3 ">
            <p className="font-extralight font-mono">Jun 2024</p>
            <h3 className="mb-1 font-bold leading-5">Menambahkan Modul Tracking pada Sistem Sekolah Digiyok.</h3>
            <ul className="list-disc list-outside leading-4 font-mono font-thin pl-5">
              <li>Merancang Database Modul.</li>
            </ul>
          </div>
          <div className="mb-5 border-l-2 border-green-400 ps-3 ">
            <p className="font-extralight font-mono">Jun 2024</p>
            <h3 className="mb-1 font-bold leading-5">Membuat Website Company Profile untuk AKAR.</h3>
            <ul className="list-disc list-outside leading-4 font-mono font-thin pl-5">
              <li>Merancang Design Wesbite.</li>
              <li>Development.</li>
              <li>Menambahkan Fitur Baru.</li>
            </ul>
          </div>
          <div className="mb-5 border-l-2 border-green-400 ps-3 ">
            <p className="font-extralight font-mono">Feb 2024</p>
            <h3 className="mb-1 font-bold leading-5">Memindahkan Wesbite Iklum Stialan ke Server Baru.</h3>
            <ul className="list-disc list-outside leading-4 font-mono font-thin pl-5">
              <li>Memindahkan Wesbite ke Server Baru.</li>
              <li>Memperbaiki Bug.</li>
              <li>Mengubah Frontend Logo Utama.</li>
            </ul>
          </div>
          <div className="mb-5 border-l-2 border-green-400 ps-3 ">
            <p className="font-extralight font-mono">Nov-Feb 2023-2024</p>
            <h3 className="mb-1 font-bold leading-5">Membuat Sistem Kelola Pelatihan Untuk ITTS.</h3>
            <ul className="list-disc list-outside leading-4 font-mono font-thin pl-5">
              <li>Merancang database</li>
              <li>Develop sistem menggunakan laravel</li>
              <li>Mendeploy sistem ke server</li>
            </ul>
          </div>
        </div>
        </div> */}
      </div>
    </div>
  );
};

export default WorkExp;
