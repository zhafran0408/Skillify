import { Link } from 'react-router-dom';
import { courses } from '../Data/courses'; 

const CourseDetail = ({ courseId }) => {
 
  const item = courses.find((c) => c.id === courseId);


  if (!item) {
    return (
      <div className="text-center py-20 font-bold">
        <p className="mb-4 text-gray-500">Pilih kursus terlebih dahulu!</p>
        <Link to="/courses" className="bg-purple-600 text-white px-6 py-2 rounded-xl">Lihat Daftar Kursus</Link>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto py-12 px-4">
      <Link to="/courses" className="text-purple-600 font-bold mb-6 inline-block">← Kembali ke List</Link>
      
      <div className="bg-white p-10 rounded-[3rem] shadow-2xl border border-purple-100">
        <img src={item.image} className="w-full h-80 object-cover rounded-2rem mb-8" alt="" />
        <h1 className="text-4xl font-black mb-4 text-gray-900">{item.title}</h1>
        <p className="text-lg text-gray-600 mb-8 leading-relaxed">{item.desc}</p>
        
        <div className="bg-purple-50 p-8 rounded-3xl border-l-8 border-purple-600">
          <h4 className="font-black text-purple-900 mb-2 uppercase text-sm tracking-widest">Kurikulum Materi</h4>
          <p className="text-purple-800 font-medium">{item.detail}</p>
        </div>
      </div>
    </div>
  );
};

export default CourseDetail;