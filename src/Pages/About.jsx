const About = () => {
  return (
    <div className="max-w-7xl mx-auto py-16 md:py-24 px-6 lg:px-8">
      {/* HEADER SECTION */}
      <div className="max-w-3xl mb-20">
        <span className="text-purple-600 font-black uppercase tracking-[0.3em] text-xs">Our Identity</span>
        <h2 className="text-4xl md:text-6xl font-black text-gray-900 mt-4 leading-tight">
          We Bridge the Gap Between <span className="text-purple-600">Logic & Art.</span>
        </h2>
      </div>

      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div className="relative">
          <div className="absolute -top-10 -left-10 w-64 h-64 bg-purple-100 rounded-full -z-10 blur-3xl"></div>
          <div className="bg-white p-4 rounded-[3.5rem] shadow-2xl rotate-2">
             <img 
              src="https://images.unsplash.com/photo-1515187029135-18ee286d815b?q=80&w=800"
              className="rounded-[3rem] w-full object-cover h-100"
            />
          </div>
        </div>

        <div className="space-y-8">
          <div className="space-y-4">
            <h3 className="text-2xl font-black text-purple-900">Misi Skillify</h3>
            <p className="text-gray-600 text-lg leading-relaxed">
              Dunia digital tidak hanya butuh orang yang bisa ngoding, tapi juga mereka yang punya rasa seni tinggi. Begitu juga sebaliknya.
            </p>
            <p className="text-gray-500 leading-relaxed">
              Skillify hadir sebagai jembatan bagi para talenta muda untuk menguasai kedua sisi tersebut. Kami percaya bahwa inovasi terbaik lahir dari perpaduan antara baris kode yang efisien dan desain visual yang emosional.
            </p>
          </div>

          {/* STATS */}
          <div className="grid grid-cols-2 gap-6">
            <div className="bg-purple-50 p-6 rounded-3xl border border-purple-100">
              <h4 className="text-3xl font-black text-purple-600">50/50</h4>
              <p className="text-gray-500 text-xs font-bold uppercase tracking-widest mt-1">IT & Creative Balance</p>
            </div>
            <div className="bg-orange-50 p-6 rounded-3xl border border-orange-100">
              <h4 className="text-3xl font-black text-orange-600">100%</h4>
              <p className="text-gray-500 text-xs font-bold uppercase tracking-widest mt-1">Industrial Standards</p>
            </div>
          </div>
        </div>
      </div>

    
      <div className="mt-32 p-12 bg-gray-900 rounded-[4rem] text-center relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-purple-600/20 blur-3xl rounded-full translate-x-1/2 -translate-y-1/2"></div>
        <h3 className="text-white text-3xl md:text-4xl font-black relative z-10 leading-tight">
          "The future belongs to those who learn <br className="hidden md:block" /> more skills and combine them in creative ways."
        </h3>
        <p className="text-purple-400 mt-6 font-bold uppercase tracking-widest text-sm">— Skillify Founder</p>
      </div>
    </div>
  );
};

export default About;
