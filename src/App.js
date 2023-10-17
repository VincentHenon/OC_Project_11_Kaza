import './App.css';
import { Routes, Route } from 'react-router-dom'
import Header from './layout/header';
import Footer from './layout/footer';
import Home from './pages/home';
import About from './pages/about';
import Housing from './pages/housing';
import Page404 from './pages/404';

function App() {
  return (
    <div>
      <Header />
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/housing/:id" element={<Housing/>}/>
          <Route path="/*" element={<Page404/>}/>
        </Routes>
      <Footer />
    </div>
  );
}

export default App;