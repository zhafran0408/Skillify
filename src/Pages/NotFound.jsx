import { Link } from 'react-router';

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center py-32">
      <h1 className="text-9xl font-black text-gray-200">404</h1>
      <p className="text-2xl font-bold text-gray-800 -mt-8 mb-6">Halaman Tidak Ditemukan</p>
      <Link to="/" className="text-purple-500 hover:underline">Balik ke Beranda</Link>
    </div>
  );
};

export default NotFound;