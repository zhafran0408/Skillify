import { useState } from 'react';
import { Link } from 'react-router-dom';
import { courses } from '../Data/courses'; 

const Courses = () => {
  const [search, setSearch] = useState("");
  const [limit, setLimit] = useState(6);

  const filteredCourses = courses.filter((item) =>
    item.title.toLowerCase().includes(search.toLowerCase()) ||
    item.category.toLowerCase().includes(search.toLowerCase())
  );

  const visibleCourses = filteredCourses.slice(0, limit);

  return (
    <div className="max-w-7xl mx-auto py-12 md:py-20 px-6 lg:px-8">
  
      <div className="flex flex-col md:flex-row justify-between items-center gap-8 mb-16">
        <div className="text-center md:text-left">
          <h2 className="text-4xl md:text-5xl font-black text-gray-900">
            Digital <span className="text-purple-600">Skills</span>
          </h2>
          <p className="text-gray-500 mt-2">Kuasai IT & Creative Media bersama para ahli.</p>
        </div>

        <div className="relative w-full md:w-96 group">
          <input
            type="text"
            placeholder="Cari kursus ..."
            className="w-full pl-12 pr-4 py-4 rounded-2xl border-2 border-purple-50 focus:border-purple-600 outline-none shadow-xl shadow-purple-100/50 transition-all"
            onChange={(e) => {
              setSearch(e.target.value);
              setLimit(6);
            }}
          />
          <div className="absolute left-4 top-1/2 -translate-y-1/2 pointer-events-none">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="w-6 h-6 text-purple-400 group-focus-within:text-purple-600 transition-colors" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="11" cy="11" r="8"></circle>
              <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
            </svg>
          </div>
        </div>
      </div>

   
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {visibleCourses.map((item) => (
          <div key={item.id} className="group bg-white rounded-[2.5rem] shadow-xl hover:shadow-2xl transition-all duration-500 border border-purple-50 overflow-hidden flex flex-col h-full relative">
            
           
            <div className={`absolute top-0 right-0 w-32 h-32 -mr-16 -mt-16 rounded-full opacity-10 transition-transform group-hover:scale-150 duration-700 ${
              item.category === 'IT' ? 'bg-purple-600' : 'bg-orange-500'
            }`}></div>

            <div className="p-10 flex flex-col relative z-10">
             
              <div className="mb-6">
                <span className={`px-4 py-1.5 rounded-xl text-[10px] font-black uppercase tracking-[0.2em] shadow-sm ${
                  item.category === 'IT' 
                  ? 'bg-purple-600 text-white' 
                  : 'bg-orange-500 text-white'
                }`}>
                  {item.category}
                </span>
              </div>
              
          
              <h3 className="text-3xl font-black text-gray-900 mb-4 leading-tight group-hover:text-purple-600 transition-colors">
                {item.title}
              </h3>
              
              <p className="text-gray-500 text-base leading-relaxed mb-10 flex">
                {item.desc}
              </p>

              
              <Link
                to={`/course/${item.id}`}
                className={`flex items-center justify-between py-5 px-8 rounded-2xl font-black transition-all duration-300 ${
                  item.category === 'IT'
                  ? 'bg-purple-50 text-purple-700 hover:bg-purple-600 hover:text-white'
                  : 'bg-orange-50 text-orange-700 hover:bg-orange-500 hover:text-white'
                }`}
              >
                <span>PELAJARI SEKARANG</span>
                <span className="text-xl transform transition-transform group-hover:translate-x-2">→</span>
              </Link>
            </div>
          </div>
        ))}
      </div>

    
      {limit < filteredCourses.length && (
        <div className="mt-20 text-center">
          <button
            onClick={() => setLimit(limit + 3)}
            className="bg-white border-4 border-purple-600 text-purple-600 px-12 py-4 rounded-2xl font-black hover:bg-purple-600 hover:text-white transition-all shadow-xl active:scale-95"
          >
            MUAT LEBIH BANYAK
          </button>
        </div>
      )}

 
      {filteredCourses.length === 0 && (
        <div className="text-center py-20 bg-white rounded-[3rem] border-2 border-dashed border-purple-200">
          <p className="text-gray-400 font-bold text-xl">Maaf kursus "{search}" belum tersedia</p>
        </div>
      )}
    </div>
  );
};

export default Courses;