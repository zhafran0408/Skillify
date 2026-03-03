import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <section className="bg-purple-900 py-12 md:py-24 px-6 lg:px-20 rounded-b-[3rem] md:rounded-b-[5rem] overflow-hidden">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="text-white space-y-6 text-center lg:text-left">
          <h5 className="text-purple-300 font-bold tracking-widest uppercase text-xs md:text-sm">Learn New Skills & Popular Courses</h5>
          <h1 className="text-4xl md:text-7xl font-black leading-tight tracking-tighter">
            For Every Student, <br /> Every <span className="text-orange-400">Classroom</span>.
          </h1>
          <p className="text-purple-100 text-sm md:text-lg opacity-80 font-light max-w-lg mx-auto lg:mx-0">
            Dramatically supply transparent deliverables before backward comp-internal or "organic" sources.
          </p>
          <div className="pt-4">
            <Link to="/courses" className="bg-orange-500 hover:bg-orange-600 text-white px-8 md:px-10 py-3 md:py-4 rounded-xl font-bold text-base md:text-lg transition-all inline-block shadow-xl shadow-orange-900/20">
              Explore Courses
            </Link>
          </div>
        </div>
        <div className="relative group flex justify-center">
          <div className="absolute inset-0 bg-blue-400 rounded-full opacity-20 blur-3xl scale-75"></div>
          <img 
            src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=800" 
            className="relative z-10 w-full max-w-md lg:max-w-none rounded-4xl md:rounded-[3rem] shadow-2xl transition-transform duration-500 group-hover:scale-105" 
            alt="Hero" 
          />
        </div>
      </div>
    </section>
  );
};
export default Home;