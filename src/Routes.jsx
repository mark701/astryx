import { Routes, Route, Navigate } from 'react-router-dom';
import MainPage from './Pages/MainPage';
import About from './Pages/About';
import Projects from './Pages/Projects';
import Feedback from './Pages/Feedback';
export default function AppRoutes() {
    return (
        <Routes>
            <Route path="/" element={

                <MainPage />
            } />

            <Route path="/About" element={

                <About />
            } />


            
            <Route path="/Projects" element={

                <Projects />
            } />
            <Route path="/Feedback" element={

                <Feedback />
            } />

            <Route path="*" element={<Navigate to="/" />} />

        </Routes>
    )
}