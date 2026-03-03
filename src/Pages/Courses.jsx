import { Link } from 'react-router-dom';
import { courses } from '../Data/courses';

const Courses = ({ setCourseId }) => {
  return (
    <div className="max-w-7xl mx-auto py-12 md:py-20 px-6 lg:px-8">
      <div className="mb-12 md:mb-16">
        <h2 className="text-3xl md:text-5xl font-black text-gray-900 mb-4">Katalog <span className="text-purple-600">Kelas</span></h2>
        <p className="text-gray-500 text-sm md:text-lg max-w-2xl leading-relaxed">Pilih materi yang sesuai dengan minatmu dan mulai belajar hari ini.</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
        {courses.map((item) => (
          <div key={item.id} className="group bg-white rounded-4xl md:rounded-[2.5rem] shadow-lg shadow-purple-100 overflow-hidden flex flex-col h-full hover:shadow-2xl transition-all duration-500 border border-purple-50">
            <div className="h-48 md:h-60 overflow-hidden relative">
              <img src={item.image} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" alt={item.title} />
              <div className="absolute top-4 left-4 bg-white/90 px-3 py-1 rounded-full text-[10px] font-black uppercase text-purple-700">Populer</div>
            </div>
            <div className="p-6 md:p-8 flex flex-col ">
              <h3 className="text-xl md:text-2xl font-black text-gray-800 mb-3 group-hover:text-purple-600 transition-colors">{item.title}</h3>
              <p className="text-gray-500 text-xs md:text-sm leading-relaxed mb-8  opacity-80">{item.desc}</p>
              <Link 
                to="/course-detail" 
                onClick={() => setCourseId(item.id)}
                className="group/btn flex items-center justify-between bg-purple-50 text-purple-700 py-3 md:py-4 px-6 rounded-[1.2rem] md:rounded-3xl font-black hover:bg-purple-600 hover:text-white transition-all"
              >
                <span>Pelajari</span>
                <span className="transform transition-transform group-hover/btn:translate-x-2 text-xl">→</span>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Courses;