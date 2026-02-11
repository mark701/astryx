import './App.css';
import './CSS/Button.css'
import AppRoutes from './Routes';
import NavBar from './Components/NavBar';
import Footer from './Components/Footer';
import CTA from './Components/CTA';
function App() {
  return (

    <div>
      <NavBar />


      <main>
        <AppRoutes />
      </main>
      
      <CTA />
      <Footer />

    </div>
  );
}

export default App;
