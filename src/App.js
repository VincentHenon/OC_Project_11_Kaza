import './App.css';
import { Routes, Route } from 'react-router-dom'
import Header from './layout/header';
import Footer from './layout/footer';
import Home from './pages/Home';
import About from './pages/About';
import Housing from './pages/Housing';
import Page404 from './pages/Page404';

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