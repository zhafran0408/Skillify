import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainLayout from'./Layouts/MainLayout';
import Home from './Pages/Home';
import Courses from './Pages/Courses';
import CourseDetail from './Pages/CoursesDetail';
import About from './Pages/About';
import NotFound from './Pages/NotFound';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="courses" element={<Courses />} />
          <Route path="courses/:id" element={<CourseDetail />} />
          <Route path="about" element={<About />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
export default App;
