// src/App.tsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AppLayout from './components/AppLayout';
import Home from './pages/Home';
import News from './pages/News';
import Services from './pages/Services';
import Store from './pages/Store';
import Appointments from './pages/Appointments';
import Team from './pages/Team';
import About from './pages/About';
import Contact from './pages/Contact';
import Support from './pages/Support';
// import Login from './pages/Login';
// import Register from './pages/Register';
// import Profile from './pages/Profile';
// import Settings from './pages/Settings';
// import Dashboard from './pages/Dashboard';

const App: React.FC = () => (
  <Router>
    <AppLayout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/news" element={<News />} />
        <Route path="/services" element={<Services />} />
        <Route path="/store" element={<Store />} />
        <Route path="/appointments" element={<Appointments />} />
        <Route path="/team" element={<Team />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/support" element={<Support />} />
        {/* <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/dashboard" element={<Dashboard />} /> */}
      </Routes>
    </AppLayout>
  </Router>
);

export default App;
