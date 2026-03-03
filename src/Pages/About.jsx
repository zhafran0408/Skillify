const About = () => {
  return (
    <div className="max-w-5xl mx-auto py-12 md:py-20 px-6">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-5xl font-black text-gray-900 leading-tight">Membangun Masa Depan <br className="hidden md:block"/> Lewat <span className="text-purple-600">Pendidikan Digital.</span></h2>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
        <img src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=800" className="rounded-[2.5rem] shadow-2xl order-2 lg:order-1" alt="" />
        <div className="space-y-6 order-1 lg:order-2">
          <h3 className="text-xl md:text-2xl font-extrabold text-purple-900">Visi Kami</h3>
          <p className="text-lg md:text-xl text-gray-600 italic">"Mendemokratisasi pendidikan berkualitas agar bisa diakses siapa saja."</p>
          <p className="text-gray-500 text-sm md:text-base">EduCourse Hub adalah platform belajar yang menggabungkan teknologi modern dengan kurikulum industri terkini.</p>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white p-8 rounded-4xl shadow-lg text-center border border-purple-50">
          <h4 className="text-4xl font-black text-purple-600">15k+</h4>
          <p className="text-gray-400 font-bold uppercase text-[10px] tracking-widest mt-2">Siswa Aktif</p>
        </div>
        <div className="bg-purple-600 p-8 rounded-4xl shadow-lg text-center text-white md:-rotate-2">
          <h4 className="text-4xl font-black">98%</h4>
          <p className="text-purple-100 font-bold uppercase text-[10px] tracking-widest mt-2">Kepuasan</p>
        </div>
        <div className="bg-white p-8 rounded-4xl shadow-lg text-center border border-purple-50">
          <h4 className="text-4xl font-black text-purple-600">100+</h4>
          <p className="text-gray-400 font-bold uppercase text-[10px] tracking-widest mt-2">Mentor Expert</p>
        </div>
      </div>
    </div>
  );
};
export default About;
