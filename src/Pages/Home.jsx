import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="overflow-hidden bg-gray-50">
      
  
      <section className="relative bg-purple-900 py-12 md:py-28 px-6 lg:px-20 rounded-b-[3rem] md:rounded-b-[6rem] shadow-2xl">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          
      
          <div className="z-10 text-white text-center lg:text-left flex flex-col items-center lg:items-start">
            
            <span className="inline-block bg-purple-600/50 backdrop-blur-md text-purple-200 px-4 py-2 rounded-2xl text-[10px] md:text-sm font-bold tracking-widest uppercase border border-purple-400/30 mb-6">
              #1 Tech & Creative Learning Hub
            </span>
            
            <h1 className="text-4xl md:text-7xl font-black leading-[1.1] tracking-tighter mb-8">
              Where Tech Meets <br />
              <span className="text-orange-400">Creative Media</span>.
            </h1>

            {/* GAMBAR MOBILE (Hanya muncul di HP) */}
            <div className="relative group lg:hidden w-full mb-10">
              <div className="absolute -inset-4 bg-linear-to-tr from-purple-500 to-blue-400 rounded-[2.5rem] blur-2xl opacity-30"></div>
              <img 
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=800" 
                alt="Creative Technology" 
                className="relative z-10 w-full rounded-[2.5rem] shadow-2xl border-4 border-white/10 object-cover aspect-video"
              />
            </div>
            
            <p className="text-purple-100 text-base md:text-xl max-w-lg leading-relaxed opacity-80 font-light mb-8">
              Kuasai skill teknologi terbaru dan asah kreativitas visualmu dalam satu platform yang dirancang untuk masa depan digital.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto justify-center lg:justify-start">
              <Link 
                to="/courses" 
                className="bg-orange-500 hover:bg-orange-600 text-white px-10 py-4 rounded-2xl font-black text-lg shadow-xl shadow-orange-900/20 transition-all hover:-translate-y-1 active:scale-95 text-center"
              >
                Explore Courses
              </Link>
              <div className="flex items-center justify-center gap-3 px-6 py-4 text-purple-200 font-bold">
                <span className="flex h-3 w-3 rounded-full bg-green-400 animate-pulse"></span>
                1.2k+ Students Online
              </div>
            </div>
          </div>

          <div className="hidden lg:block relative group">
            <div className="absolute -inset-4 bg-linear-to-tr from-purple-500 to-blue-400 rounded-[3rem] blur-2xl opacity-30 group-hover:opacity-50 transition-opacity"></div>
            <img 
              src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=800" 
              alt="Creative Technology" 
              className="relative z-10 w-full rounded-[3rem] shadow-2xl border-4 border-white/10 transform rotate-2 group-hover:rotate-0 transition-transform duration-500"
            />
          </div>

        </div>
      </section>

     
      <section className="max-w-7xl mx-auto py-16 md:py-24 px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-10">
          {[
            { icon: "💻", title: "Cutting-Edge IT", desc: "Kurikulum coding & infra paling update." },
            { icon: "🎨", title: "Visual Arts", desc: "Eksplorasi desain & media kreatif." },
            { icon: "🚀", title: "Career Ready", desc: "Portofolio yang diakui industri global." }
          ].map((feat, i) => (
            <div key={i} className="bg-white p-8 rounded-[2.5rem] shadow-xl shadow-purple-100/50 border border-purple-50 flex items-center md:items-start gap-5 hover:-translate-y-2 transition-transform duration-300">
              <div className="bg-purple-50 w-14 h-14 flex items-center justify-center rounded-2xl text-3xl">
                {feat.icon}
              </div>
              <div>
                <h4 className="font-black text-gray-800 text-xl">{feat.title}</h4>
                <p className="text-gray-500 text-sm mt-1 leading-relaxed">{feat.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
};

export default Home;