import { img } from '../assets/assets';

const WorkExp = () => {
  return (
    <div data-aos="fade-left" data-aos-duration="2000" className="w-full bg-neutral-900 rounded-lg py-5 sm:p-10 mt-5">
      <h1 className="sm:text-2xl font-bold font-playwrite text-center">my work experience</h1>
      <div className="flex flex-col gap-1 justify-center lg:justify-start lg:flex-row">
        {/* my work section */}
        <div className="bg-neutral-800 mt-10 p-5 w-full sm:w-4/12 ">
          <div className="flex items-center justify-center gap-3 mb-7">
            <img src={img.digiyok} alt="" className="w-8" />
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

        <div className="bg-neutral-800 mt-10 p-5 w-full sm:w-4/12 ">
          <div className="flex items-center gap-3 mb-5">
            <img src={img.incomso} alt="" className="w-8" />
            <h2 className="text-xl font-bold">Pt. Lumintoo</h2>
          </div>
          <div className="mb-5 border-l-2 border-orange-400 ps-3 ">
            <p className="font-light">jan-mar 2024</p>
            <h3 className="mb-1 font-bold">Membuat Sistem Pelatihan Untuk ITTS</h3>
            <ul className="leading-4 font-mono">
              <li>• merancang database</li>
              <li>• develop sistem menggunakan laravel</li>
              <li>• mendeploy sistem ke server</li>
              <li>• mendeploy sistem ke server</li>
              <li>• mendeploy sistem ke server</li>
              <li>• mendeploy sistem ke server</li>
              <li>• mendeploy sistem ke server</li>
            </ul>
          </div>
        </div>

        <div className="bg-neutral-800 mt-10 p-5 w-full sm:w-4/12 ">
          <h2 className="mb-3">Individual Project</h2>
          <div>
            <h3>web programer</h3>
            <ul>
              <li>aaaaaaaaaaaaaaaa</li>
              <li>aaaaaaaaaaaaaaaa</li>
              <li>aaaaaaaaaaaaaaaa</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkExp;
