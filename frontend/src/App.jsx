import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import AboutPage from './pages/AboutPage';
import AdminDashboard from './pages/AdminDashboard';
import ProjectsPage from './pages/ProjectsPage';
import ChatProvider from './components/chat/ChatProvider';


function App() {
  return (
    <BrowserRouter>
      <ChatProvider>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/admin" element={<AdminDashboard />} />  
          <Route path="/projects" element={<ProjectsPage />} />
        </Routes>
      </ChatProvider>
    </BrowserRouter>
  );
}

export default App
