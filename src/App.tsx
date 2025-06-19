import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Hooks from './pages/Hooks';
import Form from './pages/Form'

export default function App() {
  return (
    <div className="flex flex-col min-h-screen bg-white text-gray-800">
      <Navbar />
      <main className="flex-1 p-4">
        <Routes>
          {/* skal også lave link i Navbar.tsx */}
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/hooks" element={<Hooks />} />
          <Route path="/form" element={<Form />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}
